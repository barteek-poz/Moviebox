import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {popularTitles} from './loaders/popularTitles.js'
import { MainPage } from "./pages/MainPage/MainPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    loader: popularTitles,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
