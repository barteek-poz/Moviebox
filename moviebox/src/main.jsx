import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { MainPage } from "./pages/MainPage/MainPage.jsx";
import { MoviesPage } from "./pages/MoviesPage/MoviesPage.jsx";
import { moviesLoader } from "./loaders/moviesLoader.js";
import { mainPageLoader } from "./loaders/mainPageLoader.js";
import { TVPage } from "./pages/TVPage/TVPage.jsx";
import { tvShowsLoader } from "./loaders/tvShowsLoader.js";
import { Streaming } from "./pages/Streaming/Streaming.jsx";
import { streamingLoader } from "./loaders/streamingLoader.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    loader: mainPageLoader,
  },
  {
    path: "/movies",
    element: <MoviesPage />,
    loader: moviesLoader,
  },
  {
    path: "/tv",
    element: <TVPage />,
    loader: tvShowsLoader,
  },
  {
    path: "/streaming",
    element: <Streaming />,
    loader: streamingLoader,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
