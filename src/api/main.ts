import { makeQueryString } from "@/lib/utils/main";
import type { TopHeadlineQuery, SearchQuery } from "@/lib/types/main";

export const getToptrendArticlesApi = (queryObject: TopHeadlineQuery) => {
  const queryString = makeQueryString(queryObject);

  return fetch(
    `${import.meta.env.VITE_NEWS_API_URL}/top-headlines?${queryString}`,
    {
      method: "GET",
    }
  );
};

export const getSearchArticlesApi = (queryObject: SearchQuery) => {
  const queryString = makeQueryString(queryObject);

  return fetch(
    `${import.meta.env.VITE_NEWS_API_URL}/everything?${queryString}`,
    {
      method: "GET",
    }
  );
};
