import React from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const navigate = useNavigate();
  const [searchword, setSearchword] = React.useState("");

  const doSearch = () => {
    navigate(`/search?q=${searchword}`);
  };

  return (
    <div className="w-48">
      <input
        type="text"
        className="w-full h-8 rounded-md text-xs px-2"
        spellCheck="false"
        placeholder="검색어를 입력해주세요"
        value={searchword}
        onChange={(event) => setSearchword(event.target.value)}
        onKeyDown={(e) => e.key === "Enter" && doSearch()}
      />
    </div>
  );
};

export default SearchBar;
