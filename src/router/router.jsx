import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../pages/Main/Main";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/about",
    element: <div>About</div>,
  },
]);
