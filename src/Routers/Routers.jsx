import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import Books from "../Pages/Books/Books";
import NotFound from "../Pages/NotFound/NotFound";
import BookDetails from "../Pages/BookDetails/BookDetails";
import About from "../Pages/About/About";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        index: true,
        path: "/",
        loader: () => fetch("/booksData.json"),
        Component: Home,
      },
      {
        path: "books",
        loader: () => fetch("/booksData.json"),
        Component: Books,
      },
      {
        path: "books/:id",
        loader: async ({ params }) => {
          const res = await fetch("/booksData.json");
          const data = await res.json();
          const singleBook = await data.find(
            (book) => book.bookId === parseInt(params.id)
          );
          return singleBook || null;
        },
        Component: BookDetails,
        hydrateFallbackElement: <h1>loading</h1>,
      },
      {
        path: "about",
        loader: () => fetch("booksData.json"),
        Component: About,
      },
    ],
  },
]);
