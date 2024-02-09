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
import AnonymousPage from '../pages/AnonymousPage';
import MyNetflixPage from '../pages/MyNetflixPage';
const HomePage = React.lazy(() => import('../pages/HomePage'));
import CustomErrorBoundary from '../error/GlobalErrorBoundary';
import HomePageErrorCallback from '../error/HomePageErrorCallback';
import LoginPageErrorCallback from '../error/LoginPageErrorCallback';

/**
 * @function
 * @param {index} boolean
 * @param {path} string path
 * @param {child} React.element Page Component
 * @param {errorElement} React.element Error Element
 * @param {ErrorBoundary} ErrorBoundary Page Component
 * @returns RouteObject
 */
function suspensePathLoader({ index, path, child, errorElement, ErrorBoundary }) {
  return {
    index: index,
    path: path,
    element: <Suspense fallback={<ShimmerLoading />}>{child}</Suspense>,
    errorElement: errorElement,
    ErrorBoundary: ErrorBoundary
  };
}

const paths = [
  {
    index: true,
    path: routingConfig.anonymous,
    child: <AnonymousPage />
  },
  {
    index: true,
    path: routingConfig.home,
    child: (
      <HomePageErrorCallback>
        <HomePage />
      </HomePageErrorCallback>
    )
  },
  {
    index: false,
    path: routingConfig.mynetflix,
    child: <MyNetflixPage />
    // errorElement: <ErrorBoundaryFallback />,
  },
  {
    index: false,
    path: routingConfig.login,
    child: (
      <LoginPageErrorCallback>
        <LoginPage />
      </LoginPageErrorCallback>
    )
  },
  {
    index: false,
    path: routingConfig.signup,
    child: (
      <LoginPageErrorCallback>
        <SignUpPage />
      </LoginPageErrorCallback>
    )
  },
  {
    index: false,
    path: routingConfig.search,
    child: <SearchPage />
    // errorElement: <ErrorBoundaryFallback />
  },
  {
    index: false,
    path: routingConfig.mylist,
    child: <MyListPage />
    // errorElement: <ErrorBoundaryFallback />
  },
  {
    index: false,
    path: routingConfig.profile,
    child: <ProfilePage />
    // errorElement: <ErrorBoundaryFallback />,
  }
];

const appRouter = createBrowserRouter([
  { path: routingConfig.index, element: <Navigate to="/browse" /> },
  ...paths.map((path) => suspensePathLoader(path))
]);

export const RoutingComponent = () => {
  return (
    <CustomErrorBoundary>
      <GlobalStyle />
      <RouterProvider router={appRouter} />
    </CustomErrorBoundary>
  );
};
