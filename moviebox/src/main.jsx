import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { popularTitles } from "./loaders/popularTitles.js";
import { popularMovies} from "./loaders/popularMovies.js";
import { MainPage } from "./pages/MainPage/MainPage.jsx";
import { MoviesPage } from "./pages/MoviesPage/MoviesPage.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    loader: popularTitles,
  },
  {
    path: "/movies",
    element: <MoviesPage />,
    loader: popularMovies,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
