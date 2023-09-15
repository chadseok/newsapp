import { Link } from "react-router-dom";
import type { Article } from "@/lib/types/main";

type Props = { data: Article };

const ArticleCard = ({ data }: Props) => {
  return (
    <div className="bg-white rounded-md shadow-md overflow-hidden col-span-1 row-span-2">
      <Link to={data.url} target="_blank" rel="noreferrer">
        <div className="flex flex-col justify-between h-full">
          <img className="w-full h-52 object-cover" src={data.urlToImage} />
          <div className="p-2">
            <span className="text-xs">{data.source.name}</span>
            <h2 className="font-bold text-sm h-16 mt-2 line-clamp-3">
              {data.title}
            </h2>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ArticleCard;
