import React, { Suspense } from 'react';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import './../styles/style.css';
import GlobalStyle from '../styles/GlobalComponent';
import SignUpPage from '../pages/SignUpPage';
import LoginPage from '../pages/LoginPage';
import SearchPage from '../pages/SearchPage';
import { routingConfig } from './routing-config';
import ProfilePage from '../pages/ProfilePage';
import MyListPage from '../pages/MyListPage';
import ShimmerLoading from '../components/Shimmer/ShimmerLoading';
const HomePage = React.lazy(() => import('../pages/HomePage'));

export const RoutingComponent = () => {
  const appRouter = createBrowserRouter([
    {
      path: routingConfig.index,
      element: <Navigate to="/browse" />
    },
    {
      index: true,
      path: routingConfig.home,
      element: (
        <Suspense fallback={<ShimmerLoading />}>
          <HomePage />
        </Suspense>
      )
    },
    {
      path: routingConfig.login,
      element: (
        <Suspense fallback={<ShimmerLoading />}>
          <LoginPage />
        </Suspense>
      )
    },
    {
      path: routingConfig.signup,
      element: (
        <Suspense fallback={<ShimmerLoading />}>
          <SignUpPage />
        </Suspense>
      )
    },
    {
      path: routingConfig.search,
      element: (
        <Suspense fallback={<ShimmerLoading />}>
          <SearchPage />
        </Suspense>
      )
    },
    {
      path: routingConfig.profile,
      element: (
        <Suspense fallback={<ShimmerLoading />}>
          <ProfilePage />
        </Suspense>
      )
    },
    {
      path: routingConfig.mylist,
      element: (
        <Suspense fallback={<ShimmerLoading />}>
          <MyListPage />
        </Suspense>
      )
    }
  ]);

  return (
    <>
      <GlobalStyle />
      <RouterProvider router={appRouter} />
    </>
  );
};
