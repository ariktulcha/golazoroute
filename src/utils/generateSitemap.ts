/**
 * Sitemap Generator for GolazoRoute
 * Run this script to generate sitemap.xml
 */

import { cities } from '../data/cities';
import { blogArticles } from '../data/blogArticles';
import { stadiums } from '../data/stadiums';
import { fanZones } from '../data/fanZones';

const BASE_URL = 'https://worldcup2026planner.com';

interface SitemapUrl {
  loc: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

const today = new Date().toISOString().split('T')[0];

export const generateSitemapUrls = (): SitemapUrl[] => {
  const urls: SitemapUrl[] = [];

  // Static pages with high priority
  urls.push(
    { loc: `${BASE_URL}/`, lastmod: today, changefreq: 'daily', priority: 1.0 },
    { loc: `${BASE_URL}/app`, lastmod: today, changefreq: 'daily', priority: 0.9 },
    { loc: `${BASE_URL}/weather`, lastmod: today, changefreq: 'weekly', priority: 0.9 },
    { loc: `${BASE_URL}/blog`, lastmod: today, changefreq: 'weekly', priority: 0.8 },
    { loc: `${BASE_URL}/stadiums`, lastmod: today, changefreq: 'weekly', priority: 0.8 },
    { loc: `${BASE_URL}/fan-zones`, lastmod: today, changefreq: 'weekly', priority: 0.8 },
  );

  // City pages
  cities.forEach(city => {
    urls.push({
      loc: `${BASE_URL}/cities/${city.id}`,
      lastmod: today,
      changefreq: 'weekly',
      priority: 0.8,
    });
  });

  // Stadium pages
  stadiums.forEach(stadium => {
    urls.push({
      loc: `${BASE_URL}/stadiums/${stadium.id}`,
      lastmod: today,
      changefreq: 'weekly',
      priority: 0.8,
    });
  });

  // Fan Zone pages
  fanZones.forEach(zone => {
    urls.push({
      loc: `${BASE_URL}/fan-zones/${zone.id}`,
      lastmod: today,
      changefreq: 'weekly',
      priority: 0.7,
    });
  });

  // Blog articles
  blogArticles.forEach(article => {
    urls.push({
      loc: `${BASE_URL}/blog/${article.slug}`,
      lastmod: article.publishDate,
      changefreq: 'monthly',
      priority: 0.7,
    });
  });

  // Other important pages
  const otherPages = [
    { path: '/about', priority: 0.6 },
    { path: '/our-story', priority: 0.6 },
    { path: '/contact', priority: 0.6 },
    { path: '/sponsor', priority: 0.5 },
    { path: '/donate', priority: 0.5 },
    { path: '/roadmap', priority: 0.5 },
    { path: '/join-facebook-group', priority: 0.5 },
  ];

  otherPages.forEach(({ path, priority }) => {
    urls.push({
      loc: `${BASE_URL}${path}`,
      lastmod: today,
      changefreq: 'monthly',
      priority,
    });
  });

  // Legal pages
  const legalPages = ['/privacy', '/terms', '/gdpr', '/cookies'];
  legalPages.forEach(path => {
    urls.push({
      loc: `${BASE_URL}${path}`,
      lastmod: today,
      changefreq: 'yearly',
      priority: 0.3,
    });
  });

  return urls;
};

export const generateSitemapXml = (): string => {
  const urls = generateSitemapUrls();
  
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
  
  return xml;
};

// Note: Sitemap generation is handled by scripts/generateSitemap.js
// This file is only for client-side sitemap URL generation

