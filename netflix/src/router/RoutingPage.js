import React from 'react';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import './../styles/style.css';
import GlobalStyle from '../styles/GlobalComponent';
import SignUpPage from '../pages/SignUpPage';
import LoginPage from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import SearchPage from '../pages/SearchPage';
import { routingConfig } from './routing-config';
import ProfilePage from '../pages/ProfilePage';
import MyListPage from '../pages/MyListPage';

export const RoutingComponent = () => {
  const appRouter = createBrowserRouter([
    {
      path: routingConfig.index,
      element: <Navigate to="/browse" />
    },
    {
      index: true,
      path: routingConfig.home,
      element: <HomePage />
    },
    {
      path: routingConfig.login,
      element: <LoginPage />
    },
    {
      path: routingConfig.signup,
      element: <SignUpPage />
    },
    {
      path: routingConfig.search,
      element: <SearchPage />
    },
    {
      path: routingConfig.profile,
      element: <ProfilePage />
    },
    {
      path: routingConfig.mylist,
      element: <MyListPage />
    }
  ]);

  return (
    <>
      <GlobalStyle />
      <RouterProvider router={appRouter} />
    </>
  );
};
