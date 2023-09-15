import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <div className="w-full bg-blue-500 shadow-md">
      <header className="flex justify-between items-center  w-[60rem] h-12 mx-auto px-2 ">
        <div className="text-xl text-white font-bold">📰 NEWSAPP</div>
        <SearchBar />
      </header>
    </div>
  );
};

export default Header;
