import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {popularTitles} from './loaders/popularTitles.js'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: popularTitles,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
