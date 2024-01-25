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

/**
 * @function
 * @param {index} boolean 
 * @param {path} string path 
 * @param {child} React.element Page Component 
 * @returns RouteObject
 */
function suspensePathLoader({ index, path, child }) {
  return {
    index: index,
    path: path,
    element: <Suspense fallback={<ShimmerLoading />}>{child}</Suspense>
  };
}

const paths = [
  { index: true, path: routingConfig.home, child: <HomePage /> },
  { index: false, path: routingConfig.home, child: <HomePage /> },
  { index: false, path: routingConfig.login, child: <LoginPage /> },
  { index: false, path: routingConfig.signup, child: <SignUpPage /> },
  { index: false, path: routingConfig.search, child: <SearchPage /> },
  { index: false, path: routingConfig.mylist, child: <MyListPage /> },
  { index: false, path: routingConfig.profile, child: <ProfilePage /> }
];

const appRouter = createBrowserRouter([
  {
    path: routingConfig.index,
    element: <Navigate to="/browse" />
  },
  ...paths.map((path) => suspensePathLoader(path))
]);

export const RoutingComponent = () => {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={appRouter} />
    </>
  );
};
