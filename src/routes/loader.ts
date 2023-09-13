import type { LoaderFunction } from "react-router-dom";
import { getToptrendArticlesApi } from "@/api/main";
import type { Category, QueryObject } from "@/lib/types/main";

export const homeLoader: LoaderFunction = async ({ request }) => {
  const category =
    (new URL(request.url).searchParams.get("category") as Category) ||
    "general";
  const page = Number(new URL(request.url).searchParams.get("page") || 1);

  const queryObject: QueryObject = {
    apiKey: import.meta.env.VITE_NEWS_API_KEY,
    country: "kr",
    category,
    page,
    pageSize: 12,
  };

  const res = await getToptrendArticlesApi(queryObject);
  const body = await res.json();

  return { list: body.articles, page, category };
};
