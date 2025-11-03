# 📝 Article Management System

A streamlined system for creating high-quality blog articles with proper TypeScript types, SEO optimization, and schema markup.

## 🎯 Quick Start

### Method 1: Interactive Mode (Easiest)

```bash
npm run create-article
```

Answer the prompts:
- Article title
- Category
- City (optional)
- Markdown file path or "paste" to paste content

### Method 2: CLI Mode

```bash
npm run create-article "Miami World Cup 2026 Guide" city-guide article.md
```

### Method 3: Just Send Me the Text!

The simplest way - just send me:

```
CATEGORY: city-guide
TITLE: Miami World Cup 2026: Complete Guide
CITY: Miami

## Introduction

Your article content here...

## FAQ

**How do I get to the stadium?**
Take the Metro Rail...
```

I'll convert it instantly to proper TypeScript!

## 📁 Folder Structure

```
src/data/articles/
├── city-guides/         # City-specific guides
│   ├── losAngelesGuide.ts
│   └── newYorkFinal.ts
├── planning/            # Planning and ticket info
│   ├── budgetGuide.ts
│   ├── ticketPricingGuide.ts
│   └── ticketSalesPhasesGuide.ts
├── itineraries/         # Travel routes and itineraries
│   └── westCoastRoute.ts
├── reference/           # Database and reference content
│   ├── stadiumDatabase.ts
│   └── matchSchedule.ts
└── _TEMPLATE.md         # Article template
```

## 📋 Categories

- **city-guide** - Guides for specific host cities
- **itinerary** - Multi-city travel routes
- **planning** - Budget, tickets, logistics
- **ticket-info** - Ticket purchasing guides
- **team** - Team-specific content
- **experience** - Fan experiences
- **comparison** - Comparisons between options

## ✍️ Writing an Article

### 1. Use the Template

Start with `src/data/articles/_TEMPLATE.md` for guidance.

### 2. Article Structure

```markdown
## Introduction / Why Visit [Topic]?

Start with **Direct Answer** - specific numbers, dates, benefits.

### Key Facts:
- Important bullet points
- Concrete numbers
- Specific details

## Main Section 1

Detailed content organized logically...

### Subsection

More details...

## FAQ

**Question 1?**
Answer with specific details.

**Question 2?**
More helpful answers.
```

### 3. Writing Best Practices

✅ **DO:**
- Start with a direct answer in the first paragraph
- Include specific numbers, prices, dates
- Use headers for organization (## for main, ### for sub)
- Add 5-10 FAQ items
- Write 2000-3000 words for comprehensive guides
- Use bold for important terms
- Include practical, actionable advice

❌ **DON'T:**
- Write vague descriptions
- Skip FAQ section
- Use poor structure
- Forget concrete examples
- Make it too short (< 1000 words)

## 🚀 Adding Article to Site

After generating the article:

### 1. Review Generated File
```
src/data/articles/[category]/[your-article].ts
```

### 2. Update Featured Image
Replace the placeholder URL with a real image from Unsplash or your assets.

### 3. Add to Index
Edit `src/data/blogArticles.ts`:

```typescript
// Add import at top
import { miamiGuideArticle } from './articles/city-guides/miamiGuide';

// Add to blogArticles array
export const blogArticles: BlogArticle[] = [
  // ... existing articles
  miamiGuideArticle,  // Add your article
];
```

### 4. Test
```bash
npm run dev
```

Visit `/blog/[your-slug]` to see your article!

## 🎨 Article Features

Each article automatically includes:

- ✅ TypeScript type safety
- ✅ SEO-optimized metadata
- ✅ Schema.org structured data
- ✅ Automatic read time calculation
- ✅ Related articles linking
- ✅ FAQ section
- ✅ Responsive formatting
- ✅ City/tag associations

## 📊 Quality Checklist

Before publishing, ensure:

- [ ] Title is 50-60 characters
- [ ] Meta description is 150-160 characters
- [ ] Has 3+ main sections
- [ ] Has 5+ FAQ items
- [ ] Includes specific numbers and data
- [ ] Featured image is relevant and high-quality
- [ ] All links work
- [ ] Related articles are linked
- [ ] Content is 2000+ words
- [ ] Grammar and spelling checked

## 🔧 Advanced Usage

### Custom Sections

The generator handles standard markdown, but you can manually add:

```typescript
sections: [
  {
    id: 'custom',
    title: 'Custom Section',
    content: `<div class="custom-class">...</div>`,
    dataTable: { /* custom data */ },
    interactive: 'map' // or 'calculator', 'schedule'
  }
]
```

### Quick Facts

Add at the top of articles for key highlights:

```typescript
quickFacts: [
  { label: 'Stadium', value: 'Hard Rock Stadium', icon: '🏟️' },
  { label: 'Capacity', value: '65,326', icon: '👥' }
]
```

### Related Content

Link articles together:

```typescript
relatedArticles: ['stadium-database-2026', 'budget-guide-2026'],
relatedCities: ['miami', 'los-angeles']
```

## 🤖 How the Generator Works

1. **Parses Markdown** - Converts ## headers to sections
2. **Formats Content** - Converts markdown to styled HTML
3. **Extracts FAQs** - Automatically finds Q&A pairs
4. **Generates Metadata** - Creates SEO descriptions and tags
5. **Calculates Stats** - Read time, word count
6. **Creates Schema** - Structured data for search engines
7. **Outputs TypeScript** - Type-safe article file

## 📝 Example Workflow

```bash
# 1. Write article in your favorite editor
# 2. Run generator
npm run create-article

# 3. Enter details when prompted:
Article title: Miami World Cup 2026: Complete Guide
Category: city-guide
City: miami
Markdown file: /path/to/miami-article.md

# 4. Generator creates:
✅ src/data/articles/city-guides/miami-world-cup-2026-complete-guide.ts

# 5. Update blogArticles.ts (copy/paste from output)
# 6. Update featured image
# 7. Test and deploy!
```

## 🎓 Tips for Quality Articles

### SEO Optimization
- Use target keywords in title, headers, first paragraph
- Include location names for local SEO
- Add plenty of internal links
- Write comprehensive FAQs
- Use descriptive image alt text

### User Experience
- Start with direct answers
- Use clear structure
- Include actionable advice
- Add specific examples
- Break up long text with headers
- Use bullet points for lists

### Content Depth
- Answer common questions thoroughly
- Include insider tips
- Provide price ranges
- Mention specific locations/venues
- Compare options (pros/cons)
- Update with current information

## 🆘 Troubleshooting

### Script won't run
```bash
# Reinstall dependencies
npm install --legacy-peer-deps
```

### Import errors
Check that the file path in `blogArticles.ts` matches the actual file location.

### TypeScript errors
Run `npm run lint` to check for issues.

### Missing features
Manually edit the generated file - it's just TypeScript!

## 📞 Need Help?

Just send me:
1. Your article text (any format)
2. Title and category
3. I'll convert it for you!

Or ask any questions about the system.

---

## Why This System?

✅ **Quality Control** - Every article reviewed
✅ **Type Safety** - No runtime errors
✅ **Version Control** - Full git history
✅ **No CMS Needed** - Zero extra costs
✅ **SEO Built-in** - Schema markup automatic
✅ **Fast** - No API calls needed
✅ **Simple** - Just write and generate

Perfect for your use case where you want quality over quantity!

