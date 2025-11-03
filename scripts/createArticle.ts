#!/usr/bin/env ts-node
/**
 * Article Generator Script
 * 
 * Creates properly formatted TypeScript article files from markdown/text input
 * 
 * Usage:
 *   npm run create-article <title> <category> <markdown-file>
 *   
 * Or use the interactive mode:
 *   npm run create-article
 */

import * as fs from 'fs';
import * as path from 'path';
import * as readline from 'readline';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

interface ArticleInput {
  title: string;
  category: 'city-guide' | 'itinerary' | 'team' | 'planning' | 'experience' | 'comparison' | 'ticket-info';
  city?: string;
  markdown: string;
}

interface Section {
  id: string;
  title: string;
  content: string;
  subsections?: Section[];
}

function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

function toCamelCase(str: string): string {
  return str
    .split('-')
    .map((word, index) => 
      index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join('');
}

function getCategoryFolder(category: string): string {
  const folders: Record<string, string> = {
    'city-guide': 'city-guides',
    'itinerary': 'itineraries',
    'planning': 'planning',
    'ticket-info': 'planning',
    'team': 'teams',
    'experience': 'experiences',
    'comparison': 'comparisons',
    'reference': 'reference'
  };
  return folders[category] || 'misc';
}

function parseMarkdownToSections(markdown: string): Section[] {
  const sections: Section[] = [];
  const lines = markdown.split('\n');
  let currentSection: Section | null = null;
  let contentBuffer: string[] = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Match ## headers (main sections)
    if (line.match(/^##\s+(.+)$/)) {
      // Save previous section
      if (currentSection) {
        currentSection.content = formatContent(contentBuffer.join('\n'));
        sections.push(currentSection);
        contentBuffer = [];
      }
      
      // Start new section
      const title = line.replace(/^##\s+/, '');
      currentSection = {
        id: generateSlug(title),
        title: title,
        content: ''
      };
    } else if (currentSection) {
      // Add content to current section
      contentBuffer.push(line);
    }
  }

  // Save last section
  if (currentSection) {
    currentSection.content = formatContent(contentBuffer.join('\n'));
    sections.push(currentSection);
  }

  return sections;
}

function formatContent(markdown: string): string {
  // Basic markdown to HTML conversion
  let html = markdown
    // Convert bold **text** to <strong>
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    // Convert italic *text* to <em>
    .replace(/(?<!\*)\*(?!\*)(.+?)\*(?!\*)/g, '<em>$1</em>')
    // Convert headers
    .replace(/^### (.+)$/gm, '<h3 class="text-2xl font-bold mb-4 mt-8">$1</h3>')
    .replace(/^#### (.+)$/gm, '<h4 class="text-xl font-bold mb-3 mt-6">$1</h4>')
    // Convert lists
    .replace(/^- (.+)$/gm, '<li>$1</li>')
    // Wrap paragraphs
    .split('\n\n')
    .map(para => {
      para = para.trim();
      if (!para) return '';
      if (para.startsWith('<')) return para; // Already HTML
      if (para.startsWith('<li>')) return '<ul class="list-disc list-inside space-y-2 mb-6">\n' + para + '\n</ul>';
      return `<p class="mb-4">${para}</p>`;
    })
    .join('\n\n');

  return html;
}

function generateMetaDescription(markdown: string, maxLength: number = 155): string {
  // Extract first meaningful paragraph
  const lines = markdown.split('\n').filter(line => line.trim() && !line.startsWith('#'));
  const firstPara = lines[0] || '';
  
  // Clean markdown syntax
  const clean = firstPara
    .replace(/\*\*/g, '')
    .replace(/\*/g, '')
    .replace(/\[(.+?)\]\(.+?\)/g, '$1')
    .trim();
  
  if (clean.length <= maxLength) return clean;
  return clean.substring(0, maxLength - 3) + '...';
}

function extractTags(input: ArticleInput): string[] {
  const tags: string[] = [];
  
  // Add category-based tag
  if (input.category === 'city-guide' && input.city) {
    tags.push(input.city.toLowerCase());
  }
  
  // Extract common keywords from title
  const keywords = input.title.toLowerCase().split(/\s+/);
  const commonWords = ['world', 'cup', '2026', 'guide', 'complete', 'travel'];
  
  keywords.forEach(word => {
    if (!commonWords.includes(word) && word.length > 3) {
      tags.push(word);
    }
  });
  
  return [...new Set(tags)].slice(0, 6); // Unique, max 6 tags
}

function extractFAQs(markdown: string): Array<{question: string, answer: string}> {
  const faqs: Array<{question: string, answer: string}> = [];
  const lines = markdown.split('\n');
  let inFAQSection = false;
  let currentQ = '';
  let currentA = '';

  for (const line of lines) {
    if (line.match(/^##\s+FAQ/i)) {
      inFAQSection = true;
      continue;
    }
    
    if (inFAQSection) {
      // Match **Q: Question?** or **Question?**
      if (line.match(/^\*\*(Q:|Question:)?\s*(.+?)\*\*$/)) {
        if (currentQ && currentA) {
          faqs.push({ question: currentQ, answer: currentA.trim() });
        }
        currentQ = line.replace(/^\*\*(Q:|Question:)?\s*/, '').replace(/\*\*$/, '');
        currentA = '';
      } else if (line.match(/^A:\s+(.+)$/)) {
        currentA = line.replace(/^A:\s+/, '');
      } else if (currentQ && line.trim()) {
        currentA += ' ' + line;
      }
    }
  }

  // Add last FAQ
  if (currentQ && currentA) {
    faqs.push({ question: currentQ, answer: currentA.trim() });
  }

  return faqs;
}

function calculateReadTime(markdown: string): number {
  const words = markdown.split(/\s+/).length;
  return Math.ceil(words / 200); // Average reading speed: 200 words/min
}

function generateArticleCode(input: ArticleInput): string {
  const slug = generateSlug(input.title);
  const id = slug;
  const today = new Date().toISOString().split('T')[0];
  const camelCaseName = toCamelCase(slug);
  
  const sections = parseMarkdownToSections(input.markdown);
  const faqs = extractFAQs(input.markdown);
  const metaDescription = generateMetaDescription(input.markdown);
  const tags = extractTags(input);
  const readTime = calculateReadTime(input.markdown);
  
  return `import { BlogArticle } from '../../blogTypes';

export const ${camelCaseName}Article: BlogArticle = {
  id: '${id}',
  slug: '${slug}',
  title: '${input.title.replace(/'/g, "\\'")}',
  metaDescription: '${metaDescription.replace(/'/g, "\\'")}',
  category: '${input.category}',
  publishDate: '${today}',
  lastUpdated: '${today}',
  author: 'World Cup 2026 Travel Team',
  readTime: ${readTime},
  featuredImage: 'https://images.unsplash.com/photo-1',
  tags: ${JSON.stringify(tags)},${input.city ? `\n  relatedCities: ['${input.city.toLowerCase()}'],` : ''}
  relatedArticles: [],
  
  schema: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '${input.title.replace(/'/g, "\\'")}',
    description: '${metaDescription.replace(/'/g, "\\'")}',
    datePublished: '${today}',
    dateModified: '${today}',
    author: {
      '@type': 'Organization',
      name: 'World Cup 2026 Travel Planner'
    }
  },

  content: {
    sections: ${JSON.stringify(sections, null, 4).replace(/"([^"]+)":/g, '$1:')},${faqs.length > 0 ? `\n    faq: ${JSON.stringify(faqs, null, 4).replace(/"([^"]+)":/g, '$1:')}` : '\n    faq: []'}
  }
};
`;
}

async function interactiveMode() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  const question = (prompt: string): Promise<string> => {
    return new Promise(resolve => rl.question(prompt, resolve));
  };

  console.log('\n🎯 Article Generator - Interactive Mode\n');
  
  const title = await question('Article title: ');
  console.log('\nCategories: city-guide, itinerary, planning, ticket-info, team, experience, comparison');
  const category = await question('Category: ') as any;
  const city = await question('City (optional, press Enter to skip): ');
  const markdownPath = await question('Markdown file path (or "paste" to paste content): ');
  
  let markdown = '';
  if (markdownPath.toLowerCase() === 'paste') {
    console.log('\nPaste your markdown content (press Ctrl+D when done):\n');
    const lines: string[] = [];
    for await (const line of rl) {
      lines.push(line);
    }
    markdown = lines.join('\n');
  } else {
    markdown = fs.readFileSync(markdownPath, 'utf-8');
  }
  
  rl.close();
  
  return { title, category, city: city || undefined, markdown };
}

async function main() {
  let input: ArticleInput;
  
  // Check if running in CLI mode or interactive mode
  const args = process.argv.slice(2);
  
  if (args.length >= 3) {
    // CLI mode
    const [title, category, markdownPath] = args;
    const markdown = fs.readFileSync(markdownPath, 'utf-8');
    input = {
      title,
      category: category as any,
      markdown
    };
  } else {
    // Interactive mode
    input = await interactiveMode();
  }
  
  // Generate article code
  const code = generateArticleCode(input);
  
  // Determine file path
  const categoryFolder = getCategoryFolder(input.category);
  const slug = generateSlug(input.title);
  const fileName = `${slug}.ts`;
  const filePath = path.join(__dirname, '..', 'src', 'data', 'articles', categoryFolder, fileName);
  
  // Create directory if it doesn't exist
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  
  // Write file
  fs.writeFileSync(filePath, code);
  
  console.log('\n✅ Article created successfully!\n');
  console.log(`📁 File: src/data/articles/${categoryFolder}/${fileName}`);
  console.log(`🔗 Slug: ${slug}`);
  console.log('\n📝 Next steps:');
  console.log(`   1. Update featured image URL`);
  console.log(`   2. Review and edit the generated content`);
  console.log(`   3. Add to blogArticles.ts:`);
  console.log(`      import { ${toCamelCase(slug)}Article } from './articles/${categoryFolder}/${slug}';`);
  console.log(`      // Add to blogArticles array: ${toCamelCase(slug)}Article,`);
  console.log('\n');
}

main().catch(console.error);

