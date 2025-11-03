import { BlogArticle } from './blogTypes';
// Reference articles
import { stadiumDatabaseArticle } from './articles/reference/stadiumDatabase';
import { matchScheduleArticle } from './articles/reference/matchSchedule';
// City guide articles
import { losAngelesGuideArticle } from './articles/city-guides/losAngelesGuide';
import { newYorkFinalArticle } from './articles/city-guides/newYorkFinal';
// Planning articles
import { budgetGuideArticle } from './articles/planning/budgetGuide';
import { ticketSalesPhasesGuide } from './articles/planning/ticketSalesPhasesGuide';
import { ticketPricingGuide } from './articles/planning/ticketPricingGuide';
// Itinerary articles
import { westCoastRouteArticle } from './articles/itineraries/westCoastRoute';

// Article index - add more articles here as they're created
export const blogArticles: BlogArticle[] = [
  stadiumDatabaseArticle,
  matchScheduleArticle,
  losAngelesGuideArticle,
  westCoastRouteArticle,
  newYorkFinalArticle,
  budgetGuideArticle,
  ticketSalesPhasesGuide,
  ticketPricingGuide,
];

export const getBlogArticleBySlug = (slug: string): BlogArticle | undefined => 
  blogArticles.find(article => article.slug === slug);

export const getBlogArticlesByCategory = (category: string): BlogArticle[] =>
  blogArticles.filter(article => article.category === category);

export const getRelatedArticles = (articleId: string, limit: number = 3): BlogArticle[] => {
  const article = blogArticles.find(a => a.id === articleId);
  if (!article?.relatedArticles) return [];
  return article.relatedArticles
    .map(id => blogArticles.find(a => a.id === id))
    .filter((a): a is BlogArticle => a !== undefined)
    .slice(0, limit);
};

export const getFeaturedArticles = (limit: number = 3): BlogArticle[] => {
  return blogArticles
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())
    .slice(0, limit);
};

