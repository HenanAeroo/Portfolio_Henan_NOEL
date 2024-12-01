// eslint-disable-next-line no-unused-vars
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Maintenance from "./pages/Maintenance";
import Projects from "./pages/Projects";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/contact",
    element: <Maintenance />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
