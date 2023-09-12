import type { QueryObject } from "@/lib/types/main";

export const makeQueryString = (queryObject: QueryObject) => {
  let queryString = "";

  for (const key in queryObject) {
    if (queryObject[key]) {
      queryString += `${key}=${queryObject[key]}&`;
    }
  }

  return queryString.slice(0, -1);
};
