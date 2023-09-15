import React from "react";
import Header from "./Header";

const Layout = (props: React.PropsWithChildren) => {
  return (
    <div className="w-full min-h-screen bg-slate-100">
      <Header />
      {props.children}
    </div>
  );
};

export default Layout;
