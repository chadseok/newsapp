import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "@/pages/Home";
import Search from "@/pages/Search";
import { homeLoader } from "./loader";

const routerObject = createBrowserRouter([
  { path: "/", element: <Home />, loader: homeLoader },
  { path: "/search", element: <Search /> },
]);

const Router = () => {
  return <RouterProvider router={routerObject} />;
};

export default Router;
