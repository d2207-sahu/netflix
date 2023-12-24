import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './../styles/style.css';
import LoginPage from "../pages/LoginPage";
import { HomePage } from "../pages/HomePage";
import GlobalStyle from "../styles/GlobalComponent";
import SignUpPage from "../pages/SignUpPage";

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
    {
      index: true,
      path: "signup",
      element: <SignUpPage />,
    },
  ]);
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={appRouter} />
    </>
  );
};
