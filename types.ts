export interface Experience {
  id: string;
  title: string;
  description: string;
  priceRange: string;
  quickFacts: {
    duration: string;
    age: string;
    swimming: string;
  };
  imagePrompt: string;
  imageUrl: string;
}

export interface Package {
  id: string;
  title: string;
  duration: string;
  description: string;
  inclusions: string[];
  imagePrompt: string;
  imageUrl: string;
}

export interface Destination {
  id: string;
  name: string;
  overview: string;
  imagePrompt: string;
  imageUrl: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  imageUrl: string;
  content: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}