import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import { HomePage } from "../pages/HomePage";

export const RoutingComponent = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      index: true,
      path: "/login",
      element: <LoginPage />,
    },
  ]);
  return <RouterProvider router={appRouter} />;
};
