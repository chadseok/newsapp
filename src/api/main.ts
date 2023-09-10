import type { Category } from "@/lib/types/main";

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export const getToptrendArticlesApi = (category: Category, page?: number) => {
  return fetch(
    `${
      import.meta.env.VITE_NEWS_API_URL
    }/top-headlines?apiKey=${API_KEY}&category=${category}&page=${
      page || 1
    }&pageSize=12`,
    {
      method: "GET",
    }
  );
};

export const getSearchArticlesApi = () => {};
