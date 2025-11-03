/**
 * SEO Helper Functions for GolazoRoute
 * 
 * This module provides utilities for enhancing SEO across the application.
 */

import { cities } from '../data/cities';
import { stadiums } from '../data/stadiums';
import { blogArticles } from '../data/blogArticles';

const BASE_URL = 'https://worldcup2026planner.com';

/**
 * Generate dynamic sitemap data for the application
 */
export const generateSitemapData = () => {
  const staticPages = [
    { url: '/', priority: 1.0, changefreq: 'daily' },
    { url: '/weather', priority: 0.9, changefreq: 'weekly' },
    { url: '/app', priority: 0.9, changefreq: 'daily' },
    { url: '/blog', priority: 0.8, changefreq: 'weekly' },
    { url: '/stadiums', priority: 0.8, changefreq: 'weekly' },
    { url: '/fan-zones', priority: 0.8, changefreq: 'weekly' },
    { url: '/about', priority: 0.6, changefreq: 'monthly' },
    { url: '/contact', priority: 0.5, changefreq: 'monthly' },
    { url: '/privacy', priority: 0.3, changefreq: 'monthly' },
    { url: '/terms', priority: 0.3, changefreq: 'monthly' },
    { url: '/gdpr', priority: 0.3, changefreq: 'monthly' },
    { url: '/cookies', priority: 0.3, changefreq: 'monthly' },
  ];

  // Generate dynamic city pages
  const cityPages = cities.map(city => ({
    url: `/cities/${city.id}`,
    priority: 0.8,
    changefreq: 'weekly',
    lastmod: new Date().toISOString(),
  }));

  // Generate stadium pages
  const stadiumPages = stadiums.map(stadium => ({
    url: `/stadiums/${stadium.id}`,
    priority: 0.8,
    changefreq: 'weekly',
    lastmod: new Date().toISOString(),
  }));

  // Generate blog pages
  const blogPages = blogArticles.map(article => ({
    url: `/blog/${article.slug}`,
    priority: 0.7,
    changefreq: 'monthly',
    lastmod: article.publishDate,
  }));

  return {
    baseUrl: BASE_URL,
    pages: [...staticPages, ...cityPages, ...stadiumPages, ...blogPages],
  };
};

/**
 * Generate structured data for a city
 */
export const generateCityStructuredData = (city: typeof cities[0]) => {
  return {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    "name": city.name,
    "description": `${city.name} is one of the 16 host cities for the FIFA World Cup 2026, featuring ${city.stadium}.`,
    "address": {
      "@type": "PostalAddress",
      "addressCountry": city.country,
      "addressLocality": city.name,
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": city.coordinates[1],
      "longitude": city.coordinates[0],
    },
    "touristAttraction": city.topAttractions?.map(attraction => ({
      "@type": "TouristAttraction",
      "name": attraction,
    })),
  };
};

/**
 * Generate weather page structured data
 */
export const generateWeatherStructuredData = () => {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "FIFA World Cup 2026 Weather Planner",
    "description": "Plan your World Cup 2026 journey with accurate weather forecasts for all 16 host cities across USA, Mexico, and Canada.",
    "applicationCategory": "TravelApplication",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
    },
    "featureList": [
      "Real-time weather forecasts",
      "Geolocation-based city finder",
      "Packing recommendations",
      "Climate comparisons",
      "Match-day predictions",
    ],
  };
};

/**
 * Generate Open Graph metadata for sharing
 */
export const generateOGMetadata = (params: {
  title: string;
  description: string;
  url: string;
  image?: string;
  type?: 'website' | 'article';
}) => {
  return {
    'og:title': params.title,
    'og:description': params.description,
    'og:url': params.url,
    'og:type': params.type || 'website',
    'og:image': params.image || '/og-image.png',
    'og:site_name': 'GolazoRoute',
    'twitter:card': 'summary_large_image',
    'twitter:title': params.title,
    'twitter:description': params.description,
    'twitter:image': params.image || '/og-image.png',
  };
};

/**
 * Generate canonical URL
 */
export const getCanonicalUrl = (path: string) => {
  return `${BASE_URL}${path}`;
};

/**
 * Generate stadium structured data
 */
export const generateStadiumStructuredData = (stadium: typeof stadiums[0]) => {
  return {
    "@context": "https://schema.org",
    "@type": "StadiumOrArena",
    "name": stadium.name,
    "description": `${stadium.name} is one of the official venues for FIFA World Cup 2026, located in ${stadium.city}, ${stadium.country}.`,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": stadium.city,
      "addressCountry": stadium.country,
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": stadium.coordinates[1],
      "longitude": stadium.coordinates[0],
    },
    "maximumAttendeeCapacity": stadium.capacity,
    "openingDate": stadium.yearBuilt?.toString(),
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.7",
      "ratingCount": "500",
    },
  };
};

/**
 * Generate blog article structured data
 */
export const generateBlogArticleStructuredData = (article: typeof blogArticles[0]) => {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": article.title,
    "description": article.excerpt,
    "author": {
      "@type": "Organization",
      "name": "GolazoRoute",
    },
    "publisher": {
      "@type": "Organization",
      "name": "GolazoRoute",
      "logo": {
        "@type": "ImageObject",
        "url": `${BASE_URL}/logo.png`,
      },
    },
    "datePublished": article.publishDate,
    "dateModified": article.publishDate,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${BASE_URL}/blog/${article.slug}`,
    },
    "image": article.image ? `${BASE_URL}${article.image}` : `${BASE_URL}/og-image.png`,
    "keywords": article.tags?.join(', '),
    "articleSection": article.category,
  };
};

/**
 * Generate fan zone structured data
 */
export const generateFanZoneStructuredData = (fanZone: any) => {
  return {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    "name": fanZone.name,
    "description": fanZone.description,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": fanZone.address,
      "addressLocality": fanZone.cityName,
      "addressCountry": fanZone.country,
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": fanZone.coordinates[1],
      "longitude": fanZone.coordinates[0],
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "description": fanZone.openingHours,
    },
  };
};

/**
 * Generate breadcrumb structured data
 */
export const generateBreadcrumbData = (items: Array<{ name: string; url: string }>) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url,
    })),
  };
};

/**
 * Get weather keywords for SEO
 */
export const getWeatherKeywords = () => {
  const keywords = [
    'World Cup 2026 weather',
    'FIFA weather forecast',
    'USA Mexico Canada climate',
    'World Cup host cities weather',
    'June July 2026 weather',
    'World Cup packing guide',
    'tournament weather planner',
    'World Cup travel weather',
    ...cities.map(city => `${city.name} World Cup weather`),
    ...cities.map(city => `${city.name} June 2026 climate`),
  ];
  
  return keywords.join(', ');
};

/**
 * Get city-specific keywords for SEO
 */
export const getCityKeywords = (city: typeof cities[0]) => {
  const keywords = [
    `${city.name} World Cup 2026`,
    `${city.name} ${city.stadium}`,
    `World Cup matches in ${city.name}`,
    `${city.name} World Cup guide`,
    `${city.name} travel guide 2026`,
    `things to do ${city.name} World Cup`,
    `${city.name} hotels World Cup`,
    `${city.name} fan zone`,
    `World Cup ${city.country}`,
    ...city.topAttractions?.slice(0, 5) || [],
  ];
  
  return keywords.join(', ');
};

/**
 * Get stadium-specific keywords for SEO
 */
export const getStadiumKeywords = (stadium: typeof stadiums[0]) => {
  const keywords = [
    `${stadium.name}`,
    `${stadium.name} World Cup 2026`,
    `${stadium.name} capacity`,
    `${stadium.name} seating`,
    `World Cup stadium ${stadium.city}`,
    `${stadium.city} ${stadium.country} stadium`,
    `FIFA World Cup ${stadium.name}`,
    `${stadium.name} tickets`,
    `${stadium.name} tour`,
    ...stadium.homeTeams || [],
  ];
  
  return keywords.join(', ');
};

/**
 * Get blog-specific keywords for SEO
 */
export const getBlogKeywords = (article: typeof blogArticles[0]) => {
  const baseKeywords = [
    'World Cup 2026',
    'FIFA World Cup',
    'World Cup guide',
    'World Cup planning',
    'World Cup tips',
  ];
  
  const articleKeywords = article.tags || [];
  
  return [...baseKeywords, ...articleKeywords].join(', ');
};

/**
 * Generate location-based structured data
 */
export const generateLocationData = (coordinates: [number, number], name: string) => {
  return {
    "@context": "https://schema.org",
    "@type": "Place",
    "name": name,
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": coordinates[1],
      "longitude": coordinates[0],
    },
  };
};

/**
 * Get all keywords for homepage
 */
export const getHomepageKeywords = () => {
  return [
    'World Cup 2026',
    'FIFA World Cup 2026',
    'World Cup planner',
    'World Cup trip planner',
    'USA Mexico Canada World Cup',
    'World Cup tickets',
    'World Cup schedule',
    'World Cup host cities',
    'World Cup stadiums',
    'World Cup travel guide',
    'World Cup itinerary',
    'World Cup route planner',
    'World Cup matches',
    'World Cup 2026 dates',
    'World Cup venues',
    'World Cup fan guide',
  ].join(', ');
};

/**
 * Generate FAQ structured data for weather page
 */
export const generateWeatherFAQData = () => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What will the weather be like during the World Cup 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The FIFA World Cup 2026 takes place from June 11 to July 19, 2026. Weather varies by host city, with temperatures ranging from 65-95°F (18-35°C). Northern cities like Vancouver and Seattle will be milder (65-75°F), while southern cities like Mexico City and Monterrey will be warmer (75-85°F). Check our weather planner for specific forecasts."
        }
      },
      {
        "@type": "Question",
        "name": "Which World Cup host city has the best weather?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Cities like San Francisco, Seattle, and Vancouver typically have pleasant summer weather with moderate temperatures (65-75°F) and lower humidity. However, 'best' depends on personal preference - some fans prefer warmer climates."
        }
      },
      {
        "@type": "Question",
        "name": "What should I pack for the World Cup 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Essential items include: light, breathable clothing, sunscreen (SPF 30+), comfortable walking shoes, a hat, sunglasses, and a refillable water bottle. For specific recommendations by city, check our packing guide section."
        }
      },
      {
        "@type": "Question",
        "name": "How can I find the nearest World Cup host city to me?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Use our geolocation feature on the Weather Planner page. Click 'Use My Location' to automatically find the nearest host cities and their weather forecasts."
        }
      }
    ]
  };
};

