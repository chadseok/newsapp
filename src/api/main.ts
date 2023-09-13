import { makeQueryString } from "@/lib/utils/main";
import type { QueryObject } from "@/lib/types/main";

export const getToptrendArticlesApi = (queryObject: QueryObject) => {
  const queryString = makeQueryString(queryObject);

  return fetch(
    `${import.meta.env.VITE_NEWS_API_URL}/top-headlines?${queryString}`,
    {
      method: "GET",
    }
  );
};

export const getSearchArticlesApi = () => {};
