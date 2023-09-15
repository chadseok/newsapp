import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <div className="w-full bg-blue-500 shadow-md">
      <header className="flex justify-between items-center  w-[60rem] h-12 mx-auto px-2 ">
        <h1 className="text-xl text-white font-bold">
          <Link to="/">📰 NEWSAPP</Link>
        </h1>
        <SearchBar />
      </header>
    </div>
  );
};

export default Header;
