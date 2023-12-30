import React, { useEffect } from 'react'
import Logo from '../globals/Logo';
import Container from '../globals/Container';
import { useFirebase } from '../../hooks';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../../redux/slices/userSlice';
import { useNavigate } from 'react-router-dom';
import { routingConfig } from '../../router/routing-config';
import { Image } from '../globals';
import { userRed } from './../../assets';
import SearchComponent from '../SearchComponent';

/**
 * This Component is rendered in every page
 * @returns 
 */
const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(((store) => store.user))
  const app = useSelector(((store) => store.app))
  const { auth, onAuthStateChanged, signOut } = useFirebase();
  const dispatch = useDispatch();

  // This code block runs on every reload of the page.
  useEffect(() => {
    // Listener that dispatches user object to redux store
    const unsubscribe = onAuthStateChanged(auth, (userCred) => {
      if (userCred) {
        // User Credentials Found, means have to logIn user
        const { uid, email, displayName, photoURL } = userCred;
        dispatch(
          addUser({
            state: true,
            name: displayName,
            photoURL,
            email,
            uid,
          }),
        );
        if ((window.location.href.includes(routingConfig.signup) || window.location.href.includes(routingConfig.login)))
          navigate(routingConfig.home, { replace: true });
      } else {
        // No User Credentials Found, means have to logout user
        dispatch(removeUser());
        if (!(window.location.href.includes(routingConfig.signup) || window.location.href.includes(routingConfig.login))) {
          navigate(routingConfig.login, { replace: true });
        }
      }
    });
    return () => unsubscribe();
  }, []);


  return (
    <Container $top={0} $position='fixed' $z_index="10" $justifyContent="space-between" >
      <Logo />
      {/* Should also contain the navigation dropdown items to show the sections of the application */}
      {/* This should have signin button if not logged in. */}
      <div className='flex h-[inherit] justify-between items-center'>
        <SearchComponent />
        {/* Had to keep a constants file in the CONSTANTS, and update the thing accordingly */}
        <select >
          <option title='en' value={app.languages}>{app.languages}</option>
          <option title='hn' value={app.language}>{app.languages}</option>
        </select>
        {user && <Image onClick={() => { signOut(auth) }} className="mr-[3vw] mx-3 cursor-pointer" src={userRed} alt='user' />}
      </div>
    </Container>
  )
}

export default Header