import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { getBlogArticleBySlug, getRelatedArticles } from '../data/blogArticles';
import { getCityById } from '../data/cities';
import { Calendar, Clock, ArrowLeft, Share2, BookOpen } from 'lucide-react';
import Map from '../components/Map';
import SEO from '../components/SEO';
import { generateBlogArticleStructuredData, getBlogKeywords, generateBreadcrumbData } from '../utils/seoHelpers';

export default function BlogArticle() {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getBlogArticleBySlug(slug) : null;

  // Scroll to top when article changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  if (!article) {
    return (
      <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center">
        <div className="text-center p-8">
          <BookOpen className="w-20 h-20 text-gray-600 mx-auto mb-6" />
          <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
          <p className="text-gray-400 mb-6">The article you're looking for doesn't exist.</p>
          <Link to="/blog" className="btn-primary inline-flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const relatedArticles = getRelatedArticles(article.id);
  const relatedCities = article.relatedCities?.map(id => getCityById(id)).filter((c): c is NonNullable<ReturnType<typeof getCityById>> => c !== undefined && c !== null);

  // Get primary city for geo data
  const primaryCity = relatedCities && relatedCities.length > 0 ? relatedCities[0] : null;
  
  const handleShare = (platform: string) => {
    const url = window.location.href;
    const text = article.title;
    
    if (platform === 'twitter') {
      window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
    } else if (platform === 'facebook') {
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
    }
  };

  // Enhanced structured data with breadcrumbs (removed to avoid TypeScript warning)

  return (
    <>
      <SEO
        title={`${article.title} | GolazoRoute`}
        description={article.metaDescription}
        keywords={getBlogKeywords(article)}
        canonicalUrl={`/blog/${article.slug}`}
        ogImage={article.featuredImage}
        ogType="article"
        article={{
          publishedTime: article.publishDate,
          modifiedTime: article.lastUpdated,
          author: article.author,
          section: article.category,
          tags: article.tags
        }}
        structuredData={[
          generateBlogArticleStructuredData(article),
          generateBreadcrumbData([
            { name: 'Home', url: 'https://worldcup2026planner.com/' },
            { name: 'Blog', url: 'https://worldcup2026planner.com/blog' },
            { name: article.title, url: `https://worldcup2026planner.com/blog/${article.slug}` }
          ]),
          ...(primaryCity ? [{
            "@context": "https://schema.org",
            "@type": "Place",
            "name": primaryCity.name,
            "address": {
              "@type": "PostalAddress",
              "addressCountry": primaryCity.country === 'USA' ? 'US' : primaryCity.country === 'Mexico' ? 'MX' : 'CA',
              "addressLocality": primaryCity.name
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": primaryCity.coordinates[1],
              "longitude": primaryCity.coordinates[0]
            }
          }] : [])
        ]}
      />

      <div className="min-h-screen bg-gray-950 text-white">
        {/* Hero Section */}
        <div className="relative h-96 overflow-hidden">
          <img 
            src={article.featuredImage} 
            alt={article.title}
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/80 to-transparent" />
          
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="max-w-4xl mx-auto">
              <Link 
                to="/blog" 
                className="inline-flex items-center gap-2 text-fifa-blue-400 hover:text-fifa-blue-300 mb-4 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Blog
              </Link>
              
              <div className="inline-block px-3 py-1 rounded-full bg-fifa-blue-500/20 text-fifa-blue-300 text-sm font-semibold mb-4">
                {article.category.toUpperCase()}
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">{article.title}</h1>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {new Date(article.publishDate).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {article.readTime} min read
                </span>
                <span className="text-gray-500">•</span>
                <span>By {article.author}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="max-w-4xl mx-auto px-4 py-12">
          {/* Quick Facts */}
          {article.content.quickFacts && article.content.quickFacts.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {article.content.quickFacts.map((fact, idx) => (
                <div key={idx} className="card text-center p-4 hover:border-fifa-blue-500/50 transition-colors">
                  <div className="text-3xl mb-2">{fact.icon}</div>
                  <div className="text-sm text-gray-400 mb-1">{fact.label}</div>
                  <div className="font-bold text-lg">{fact.value}</div>
                </div>
              ))}
            </div>
          )}

          {/* Article Sections */}
          {article.content.sections.map((section) => (
            <section key={section.id} className="mb-12">
              <h2 className="text-3xl font-bold mb-6 gradient-text">{section.title}</h2>
              
              <div 
                className="prose prose-invert prose-lg max-w-none
                  prose-headings:text-white prose-headings:font-bold
                  prose-p:text-gray-300 prose-p:leading-relaxed
                  prose-a:text-fifa-blue-400 prose-a:no-underline hover:prose-a:text-fifa-blue-300
                  prose-strong:text-white prose-strong:font-semibold
                  prose-ul:text-gray-300 prose-ol:text-gray-300
                  prose-li:marker:text-fifa-blue-400"
                dangerouslySetInnerHTML={{ __html: section.content }}
              />

              {/* Interactive Map */}
              {section.interactive === 'map' && relatedCities && relatedCities.length > 0 && (
                <div className="my-8 rounded-xl overflow-hidden border-2 border-gray-800 h-96">
                  <Map 
                    highlightedCities={relatedCities.map(c => c.id)}
                    selectedCity={relatedCities[0]}
                  />
                </div>
              )}

              {/* Subsections */}
              {section.subsections?.map((sub) => (
                <div key={sub.id} className="ml-0 md:ml-6 mt-8">
                  <h3 className="text-2xl font-bold mb-4 text-fifa-blue-300">{sub.title}</h3>
                  <div 
                    className="prose prose-invert prose-lg max-w-none
                      prose-headings:text-white prose-headings:font-bold
                      prose-p:text-gray-300 prose-p:leading-relaxed
                      prose-a:text-fifa-blue-400 prose-a:no-underline hover:prose-a:text-fifa-blue-300
                      prose-strong:text-white prose-strong:font-semibold
                      prose-ul:text-gray-300 prose-ol:text-gray-300
                      prose-li:marker:text-fifa-blue-400"
                    dangerouslySetInnerHTML={{ __html: sub.content }}
                  />
                </div>
              ))}
            </section>
          ))}

          {/* FAQ Section */}
          {article.content.faq && article.content.faq.length > 0 && (
            <section className="mb-12 card p-8">
              <h2 className="text-3xl font-bold mb-6 gradient-text">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {article.content.faq.map((item, idx) => (
                  <div key={idx} className="border-b border-gray-800 pb-6 last:border-0">
                    <h3 className="text-xl font-bold mb-3 text-fifa-blue-300">{item.question}</h3>
                    <p className="text-gray-300 leading-relaxed">{item.answer}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {article.tags.map((tag) => (
              <span key={tag} className="badge-blue">
                #{tag}
              </span>
            ))}
          </div>

          {/* Share Buttons */}
          <div className="card p-6 mb-12">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <span className="text-gray-400 font-semibold flex items-center gap-2">
                <Share2 className="w-4 h-4" />
                Share this article:
              </span>
              <div className="flex gap-3">
                <button 
                  onClick={() => handleShare('twitter')}
                  className="btn-secondary flex items-center gap-2"
                >
                  <Share2 className="w-4 h-4" />
                  Twitter
                </button>
                <button 
                  onClick={() => handleShare('facebook')}
                  className="btn-secondary flex items-center gap-2"
                >
                  <Share2 className="w-4 h-4" />
                  Facebook
                </button>
              </div>
            </div>
          </div>

          {/* Related Articles */}
          {relatedArticles.length > 0 && (
            <section>
              <h2 className="text-3xl font-bold mb-6">Related Articles</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedArticles.map((related) => (
                  <Link 
                    key={related.id} 
                    to={`/blog/${related.slug}`}
                    className="card hover:border-fifa-blue-500 transition-all group"
                  >
                    <img 
                      src={related.featuredImage} 
                      alt={related.title}
                      className="w-full h-48 object-cover rounded-lg mb-4 group-hover:opacity-80 transition-opacity"
                    />
                    <h3 className="font-bold mb-2 group-hover:text-fifa-blue-300 transition-colors">{related.title}</h3>
                    <p className="text-sm text-gray-400">{related.readTime} min read</p>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Citation Info */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <p className="text-sm text-gray-500">
              <strong>About This Article:</strong><br />
              Published: {new Date(article.publishDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}<br />
              Last Updated: {new Date(article.lastUpdated).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}<br />
              Author: {article.author}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

