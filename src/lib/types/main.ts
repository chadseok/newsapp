import { categoryList } from "@/lib/constants/main";

export type Category = (typeof categoryList)[number]["id"];

export type Article = {
  source: {
    id: string;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
};

export type TopHeadlineQuery = {
  [key: string]: number | string;
  apiKey: string;
  country: string;
  category: Category;
  page: number;
  pageSize: number;
};

export type SearchQuery = {
  [key: string]: number | string;
  apiKey: string;
  q: string;
  page: number;
  pageSize: number;
};
