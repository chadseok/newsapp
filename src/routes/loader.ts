import type { LoaderFunction } from "react-router-dom";
import { getToptrendArticlesApi, getSearchArticlesApi } from "@/api/main";
import type { Category, SearchQuery, TopHeadlineQuery } from "@/lib/types/main";

export const homeLoader: LoaderFunction = async ({ request }) => {
  const category =
    (new URL(request.url).searchParams.get("category") as Category) ||
    "general";
  const page = Number(new URL(request.url).searchParams.get("page") || 1);

  const queryObject: TopHeadlineQuery = {
    apiKey: import.meta.env.VITE_NEWS_API_KEY,
    country: "kr",
    category,
    page,
    pageSize: 12,
  };

  const res = await getToptrendArticlesApi(queryObject);
  const body = await res.json();

  return body.articles;
};

export const searchLoader: LoaderFunction = async ({ request }) => {
  const search = new URL(request.url).searchParams.get("q");
  const page = Number(new URL(request.url).searchParams.get("page") || 1);

  const queryObject: SearchQuery = {
    apiKey: import.meta.env.VITE_NEWS_API_KEY,
    q: search || "",
    page,
    pageSize: 12,
  };

  const res = await getSearchArticlesApi(queryObject);
  const body = await res.json();

  return body.articles;
};
