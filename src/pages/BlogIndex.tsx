import { useState } from 'react';
import { Link } from 'react-router-dom';
import { blogArticles } from '../data/blogArticles';
import { Search, BookOpen, Calendar, Clock } from 'lucide-react';
import SEO from '../components/SEO';
import { generateBreadcrumbData } from '../utils/seoHelpers';

export default function BlogIndex() {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');

  const filteredArticles = blogArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.metaDescription.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = categoryFilter === 'all' || article.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const categories = [
    { id: 'all', label: 'All Articles', count: blogArticles.length },
    { id: 'city-guide', label: 'City Guides', count: blogArticles.filter(a => a.category === 'city-guide').length },
    { id: 'itinerary', label: 'Itineraries', count: blogArticles.filter(a => a.category === 'itinerary').length },
    { id: 'planning', label: 'Planning', count: blogArticles.filter(a => a.category === 'planning').length },
    { id: 'ticket-info', label: 'Ticket Info', count: blogArticles.filter(a => a.category === 'ticket-info').length },
    { id: 'team', label: 'Team Guides', count: blogArticles.filter(a => a.category === 'team').length },
    { id: 'experience', label: 'Experiences', count: blogArticles.filter(a => a.category === 'experience').length },
    { id: 'comparison', label: 'Comparisons', count: blogArticles.filter(a => a.category === 'comparison').length },
  ];

  const canonicalUrl = 'https://worldcup2026travel.com/blog';
  
  const blogSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Blog',
        '@id': canonicalUrl,
        mainEntityOfPage: canonicalUrl,
        name: 'World Cup 2026 Travel Blog',
        description: 'Complete guides, itineraries, and planning resources for the FIFA World Cup 2026. Expert tips for traveling to stadiums across USA, Mexico, and Canada.',
        publisher: {
          '@type': 'Organization',
          name: 'GolazoRoute',
          logo: {
            '@type': 'ImageObject',
            url: 'https://worldcup2026travel.com/logo.png'
          }
        },
        blogPost: filteredArticles.slice(0, 10).map(article => ({
          '@type': 'BlogPosting',
          headline: article.title,
          description: article.metaDescription,
          image: article.featuredImage,
          datePublished: article.publishDate,
          dateModified: article.lastUpdated,
          author: {
            '@type': 'Organization',
            name: article.author
          },
          url: `https://worldcup2026travel.com/blog/${article.slug}`
        }))
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://worldcup2026travel.com'
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Blog',
            item: canonicalUrl
          }
        ]
      }
    ]
  };

  return (
    <>
      <SEO
        title="World Cup 2026 Blog | Travel Guides, Planning & Tips"
        description="Complete guides, itineraries, and planning resources for the FIFA World Cup 2026. Expert tips for traveling to stadiums across USA, Mexico, and Canada."
        keywords="world cup 2026, fifa world cup, travel guides, city guides, stadium guides, itinerary planning, usa mexico canada, World Cup tickets, World Cup schedule"
        canonicalUrl="/blog"
        structuredData={[
          {
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "World Cup 2026 Travel Blog",
            "description": "Complete guides, itineraries, and planning resources for the FIFA World Cup 2026",
            "publisher": {
              "@type": "Organization",
              "name": "GolazoRoute",
              "logo": {
                "@type": "ImageObject",
                "url": "https://worldcup2026planner.com/logo.png"
              }
            }
          },
          generateBreadcrumbData([
            { name: 'Home', url: 'https://worldcup2026planner.com/' },
            { name: 'Blog', url: 'https://worldcup2026planner.com/blog' }
          ])
        ]}
      />

      <div className="min-h-screen bg-gray-950 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-6">
              <BookOpen className="w-12 h-12 text-fifa-gold-400" />
              <h1 className="text-5xl font-bold gradient-text">World Cup 2026 Blog</h1>
            </div>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Complete guides, itineraries, and planning resources for the FIFA World Cup 2026
            </p>
          </div>

          {/* Search */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-fifa-blue-400 transition-colors" />
              <input
                type="text"
                placeholder="Search articles, topics, cities..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="input-field pl-12 text-lg"
              />
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-3 mb-12 justify-center">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setCategoryFilter(cat.id)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  categoryFilter === cat.id
                    ? 'bg-gradient-to-r from-fifa-blue-500 to-fifa-blue-600 text-white shadow-glow-blue scale-105'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                {cat.label} <span className="text-sm opacity-70">({cat.count})</span>
              </button>
            ))}
          </div>

          {/* Results Counter */}
          {(searchTerm || categoryFilter !== 'all') && (
            <div className="mb-6 text-center">
              <p className="text-gray-400">
                Showing <span className="text-fifa-blue-300 font-bold">{filteredArticles.length}</span> {filteredArticles.length === 1 ? 'article' : 'articles'}
              </p>
            </div>
          )}

          {/* Articles Grid */}
          {filteredArticles.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article) => (
                <Link
                  key={article.id}
                  to={`/blog/${article.slug}`}
                  className="card hover:border-fifa-blue-500 hover:scale-105 transition-all duration-300 group overflow-hidden"
                >
                  <div className="relative overflow-hidden rounded-lg mb-4">
                    <img
                      src={article.featuredImage}
                      alt={article.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 rounded-full bg-fifa-blue-500/90 backdrop-blur-sm text-white text-xs font-semibold uppercase">
                        {article.category.replace('-', ' ')}
                      </span>
                    </div>
                  </div>
                  
                  <h2 className="text-xl font-bold mb-3 group-hover:text-fifa-blue-300 transition-colors line-clamp-2">
                    {article.title}
                  </h2>
                  
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    {article.metaDescription}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t border-gray-800">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {article.readTime} min
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {new Date(article.publishDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <BookOpen className="w-20 h-20 text-gray-600 mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-2">No articles found</h3>
              <p className="text-gray-400 mb-6">Try adjusting your search or filters</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setCategoryFilter('all');
                }}
                className="btn-secondary"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

