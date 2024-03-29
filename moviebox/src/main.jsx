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
import { TitlePage } from "./pages/TitlePage/TitlePage.jsx";
import { titleLoader } from "./loaders/titleLoader.js";
import { SearchPage } from "./pages/SearchPage/SearchPage.jsx";
import { searchTitleLoader } from "./loaders/searchTitleLoader.js";
import { WatchlistProvider } from "./context/WatchlistContext.jsx";
import { MainLayout } from "./components/MainLayout/MainLayout.jsx";
import { ErrorElement } from "./components/ErrorElement/ErrorElement.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorElement/>,

    children: [
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
        loader: ({ params }) => {
          return searchTitleLoader(params);
        },
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <WatchlistProvider>
      <RouterProvider router={router}></RouterProvider>
    </WatchlistProvider>
  </React.StrictMode>
);
