import { BlogArticle } from './blogTypes';
import { stadiumDatabaseArticle } from './articles/stadiumDatabase';
import { matchScheduleArticle } from './articles/matchSchedule';
import { losAngelesGuideArticle } from './articles/losAngelesGuide';
import { westCoastRouteArticle } from './articles/westCoastRoute';
import { newYorkFinalArticle } from './articles/newYorkFinal';
import { budgetGuideArticle } from './articles/budgetGuide';
import { ticketSalesPhasesGuide } from './articles/ticketSalesPhasesGuide';
import { ticketPricingGuide } from './articles/ticketPricingGuide';

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

