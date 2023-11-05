import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.scss";
import {
  Fallback,
  Layout,
  RootErrorBoundary,
  Project,
  ProjectErrorBoundary,
  projectLoader,
} from "./routes";
import Home from "./pages/Home";

let router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
        errorElement: <RootErrorBoundary />,
        children: [
          {
            path: "projects/:projectId",
            element: <Project />,
            errorElement: <ProjectErrorBoundary />,
            loader: projectLoader,
          },
        ],
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} fallbackElement={<Fallback />} />;
}
