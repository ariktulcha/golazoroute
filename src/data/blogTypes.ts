export interface BlogArticle {
  id: string;
  slug: string;
  title: string;
  metaDescription: string;
  category: 'city-guide' | 'itinerary' | 'team' | 'planning' | 'experience' | 'comparison' | 'ticket-info';
  publishDate: string;
  lastUpdated: string;
  author: string;
  readTime: number;
  featuredImage: string;
  tags: string[];
  relatedCities?: string[];
  relatedArticles?: string[];
  schema: any; // JSON-LD structured data
  content: BlogContent;
}

export interface BlogContent {
  quickFacts?: QuickFact[];
  sections: BlogSection[];
  faq: FAQItem[];
}

export interface QuickFact {
  label: string;
  value: string;
  icon?: string;
}

export interface BlogSection {
  id: string;
  title: string;
  content: string;
  subsections?: BlogSection[];
  dataTable?: any;
  interactive?: 'map' | 'calculator' | 'schedule';
}

export interface FAQItem {
  question: string;
  answer: string;
}

