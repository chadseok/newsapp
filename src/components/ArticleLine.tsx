import { Link } from "react-router-dom";
import type { Article } from "@/lib/types/main";

type Props = { data: Article };

const ArticleLine = ({ data }: Props) => {
  return (
    <Link to={data.url} target="_blank" rel="noreferrer">
      <div className="flex p-4 border-b border-slate-200">
        <div className="mr-4">
          <img
            className="object-cover w-[28rem] h-[7rem]"
            src={data.urlToImage}
          />
        </div>
        <div className="flex flex-col justify-between">
          <h2 className="text-base font-bold line-clamp-2">{data.title}</h2>
          <p className="text-xs text-gray-500 line-clamp-2">{data.content}</p>
          <div className="text-xs line-clamp-1">
            <span>{data.publishedAt.split("T")[0]}</span>
            <span className="px-2">·</span>
            <span className="article__author">{data.author || "unknown"}</span>
            <span className="px-1 text-gray-500">in</span>
            <span className="article__source">{data.source.name}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ArticleLine;
