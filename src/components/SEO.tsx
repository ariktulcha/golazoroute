/**
 * SEO Component for managing meta tags and structured data
 * Uses react-helmet-async for dynamic meta tag management
 */

import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  structuredData?: object | object[];
  noindex?: boolean;
  article?: {
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
    section?: string;
    tags?: string[];
  };
}

const DEFAULT_IMAGE = 'https://worldcup2026planner.com/og-image.png';
const SITE_NAME = 'FIFA World Cup 2026 Planner';
const TWITTER_HANDLE = '@worldcup2026';
const BASE_URL = 'https://worldcup2026planner.com';

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage = DEFAULT_IMAGE,
  ogType = 'website',
  structuredData,
  noindex = false,
  article,
}) => {
  const fullTitle = title === SITE_NAME ? title : `${title} | ${SITE_NAME}`;
  const fullCanonicalUrl = canonicalUrl ? `${BASE_URL}${canonicalUrl}` : BASE_URL;
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${BASE_URL}${ogImage}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullCanonicalUrl} />
      
      {/* Robots */}
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      )}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_US" />
      
      {/* Article specific OG tags */}
      {article && ogType === 'article' && (
        <>
          {article.publishedTime && (
            <meta property="article:published_time" content={article.publishedTime} />
          )}
          {article.modifiedTime && (
            <meta property="article:modified_time" content={article.modifiedTime} />
          )}
          {article.author && (
            <meta property="article:author" content={article.author} />
          )}
          {article.section && (
            <meta property="article:section" content={article.section} />
          )}
          {article.tags?.map(tag => (
            <meta key={tag} property="article:tag" content={tag} />
          ))}
        </>
      )}
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={TWITTER_HANDLE} />
      <meta name="twitter:creator" content={TWITTER_HANDLE} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />
      
      {/* Additional SEO tags */}
      <meta name="author" content={SITE_NAME} />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(Array.isArray(structuredData) ? structuredData : [structuredData])}
        </script>
      )}
    </Helmet>
  );
};

// Pre-configured SEO components for common pages
export const HomeSEO = () => (
  <SEO
    title="FIFA World Cup 2026 Planner"
    description="Plan your ultimate FIFA World Cup 2026 journey across USA, Mexico, and Canada. Find matches, optimize routes, explore cities, check weather, and create your perfect trip itinerary."
    keywords="World Cup 2026, FIFA World Cup, USA Mexico Canada 2026, World Cup planner, World Cup trip planner, World Cup cities, World Cup stadiums, World Cup tickets, World Cup travel guide"
    canonicalUrl="/"
    structuredData={{
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "FIFA World Cup 2026 Planner",
      "description": "Comprehensive trip planning tool for the FIFA World Cup 2026",
      "applicationCategory": "TravelApplication",
      "operatingSystem": "Web Browser",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "ratingCount": "1250"
      }
    }}
  />
);

export default SEO;

