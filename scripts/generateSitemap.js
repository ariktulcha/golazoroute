/**
 * Script to generate sitemap.xml
 * Run with: node scripts/generateSitemap.js
 */

import { writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const BASE_URL = 'https://worldcup2026planner.com';

// City IDs
const cityIds = [
  'atlanta', 'boston', 'dallas', 'guadalajara', 'houston', 'kansas-city',
  'los-angeles', 'mexico-city', 'miami', 'monterrey', 'new-york',
  'philadelphia', 'san-francisco', 'seattle', 'toronto', 'vancouver'
];

// Stadium IDs
const stadiumIds = [
  'mercedes-benz-stadium', 'gillette-stadium', 'att-stadium',
  'estadio-akron', 'nrg-stadium', 'arrowhead-stadium',
  'sofi-stadium', 'estadio-azteca', 'hard-rock-stadium',
  'estadio-bbva', 'metlife-stadium', 'lincoln-financial-field',
  'levis-stadium', 'lumen-field', 'bmo-field', 'bc-place'
];

// Blog article slugs
const blogSlugs = [
  'stadium-database',
  'match-schedule',
  'los-angeles-guide',
  'west-coast-route',
  'new-york-final',
  'budget-guide',
  'ticket-sales-phases',
  'ticket-pricing-guide'
];

// Fan zone IDs
const fanZoneIds = cityIds; // Same as cities

const today = new Date().toISOString().split('T')[0];

const urls = [];

// High priority pages
urls.push(
  { loc: `${BASE_URL}/`, lastmod: today, changefreq: 'daily', priority: 1.0 },
  { loc: `${BASE_URL}/app`, lastmod: today, changefreq: 'daily', priority: 0.9 },
  { loc: `${BASE_URL}/weather`, lastmod: today, changefreq: 'weekly', priority: 0.9 },
  { loc: `${BASE_URL}/blog`, lastmod: today, changefreq: 'weekly', priority: 0.8 },
  { loc: `${BASE_URL}/stadiums`, lastmod: today, changefreq: 'weekly', priority: 0.8 },
  { loc: `${BASE_URL}/fan-zones`, lastmod: today, changefreq: 'weekly', priority: 0.8 }
);

// City pages
cityIds.forEach(id => {
  urls.push({
    loc: `${BASE_URL}/cities/${id}`,
    lastmod: today,
    changefreq: 'weekly',
    priority: 0.8
  });
});

// Stadium pages
stadiumIds.forEach(id => {
  urls.push({
    loc: `${BASE_URL}/stadiums/${id}`,
    lastmod: today,
    changefreq: 'weekly',
    priority: 0.8
  });
});

// Fan zone pages
fanZoneIds.forEach(id => {
  urls.push({
    loc: `${BASE_URL}/fan-zones/${id}`,
    lastmod: today,
    changefreq: 'weekly',
    priority: 0.7
  });
});

// Blog articles
blogSlugs.forEach(slug => {
  urls.push({
    loc: `${BASE_URL}/blog/${slug}`,
    lastmod: today,
    changefreq: 'monthly',
    priority: 0.7
  });
});

// Other pages
const otherPages = [
  { path: '/about', priority: 0.6 },
  { path: '/our-story', priority: 0.6 },
  { path: '/contact', priority: 0.6 },
  { path: '/sponsor', priority: 0.5 },
  { path: '/donate', priority: 0.5 },
  { path: '/roadmap', priority: 0.5 },
  { path: '/join-facebook-group', priority: 0.5 }
];

otherPages.forEach(({ path, priority }) => {
  urls.push({
    loc: `${BASE_URL}${path}`,
    lastmod: today,
    changefreq: 'monthly',
    priority
  });
});

// Legal pages
['/privacy', '/terms', '/gdpr', '/cookies'].forEach(path => {
  urls.push({
    loc: `${BASE_URL}${path}`,
    lastmod: today,
    changefreq: 'yearly',
    priority: 0.3
  });
});

// Generate XML
let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n';
xml += '        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n';
xml += '        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9\n';
xml += '        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">\n';

urls.forEach(url => {
  xml += '  <url>\n';
  xml += `    <loc>${url.loc}</loc>\n`;
  if (url.lastmod) {
    xml += `    <lastmod>${url.lastmod}</lastmod>\n`;
  }
  if (url.changefreq) {
    xml += `    <changefreq>${url.changefreq}</changefreq>\n`;
  }
  if (url.priority !== undefined) {
    xml += `    <priority>${url.priority.toFixed(1)}</priority>\n`;
  }
  xml += '  </url>\n';
});

xml += '</urlset>';

// Write to file
const outputPath = join(__dirname, '..', 'public', 'sitemap.xml');
writeFileSync(outputPath, xml, 'utf8');

console.log('✅ Sitemap generated successfully!');
console.log(`📊 Total URLs: ${urls.length}`);
console.log(`📁 Location: public/sitemap.xml`);

