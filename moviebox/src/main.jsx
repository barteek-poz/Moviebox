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
import { Watchlist } from "./pages/Watchlist/Watchlist.jsx";
import { watchlistLoader } from "./loaders/watchlistLoader.js";
import { TitlePage } from "./pages/TitlePage/TitlePage.jsx";
import { titleLoader } from "./loaders/titleLoader.js";
import { SearchPage } from "./pages/SearchPage/SearchPage.jsx";
import { searchTitleLoader } from "./loaders/searchTitleLoader.js";
import { addToWatchlist } from "./actions/addToWatchlist.js";

//zmienic routing tak zeby byly childreny a nie osobne sciezki

const router = createBrowserRouter([
  {
    path: "/add-to-watchlist/:titleId",
    action: addToWatchlist
  },
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
  {
    path: "/watchlist",
    element: <Watchlist />,
    loader: watchlistLoader,
  },
  {
    path: ":category?/:search?/:media/:titleId",
    element: <TitlePage />,
    loader: ({ params }) => {
      return titleLoader(params);
    },
  },
  {
    path: "/search/:param",
    element: <SearchPage />,
    loader: ({params}) => {
      return searchTitleLoader(params)
    }
  
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
