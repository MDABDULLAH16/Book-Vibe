import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import Books from "../Pages/Books/Books";
import NotFound from "../Pages/NotFound/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <NotFound></NotFound>,
    children: [
      { index: true, path: "/", Component: Home },
      {
        path: "books",
        Component: Books,
      },
    ],
  },
]);
