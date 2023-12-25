import React, {useEffect} from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import './../styles/style.css';
import {useFirebase} from '../hooks';
import GlobalStyle from '../styles/GlobalComponent';
import SignUpPage from '../pages/SignUpPage';
import LoginPage from '../pages/LoginPage';
import {HomePage} from '../pages/HomePage';
import {addUser, removeUser} from '../redux/slices/userSlice';

export const RoutingComponent = () => {
  const {auth, onAuthStateChanged} = useFirebase();
  const dispatch = useDispatch();

  useEffect(() => {
    // Listener that dispatches user object to redux store
    onAuthStateChanged(auth, (userCred) => {
      if (userCred) {
        // User Credentials Found, means have to logIn user
        const {uid, email, displayName, photoURL} = userCred;
        dispatch(
          addUser({
            state: true,
            name: displayName,
            photoURL,
            email,
            uid,
          }),
        );
      } else {
        // No User Credentials Found, means have to logout user
        dispatch(removeUser());
      }
    });
  }, []);

  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />,
    },
    {
      index: true,
      path: '/login',
      element: <LoginPage />,
    },
    {
      index: true,
      path: 'signup',
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
