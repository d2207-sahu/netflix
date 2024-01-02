import React, { useEffect } from 'react'
import Logo from '../globals/Logo';
import Container from '../globals/Container';
import { useFirebase } from '../../hooks';
import { useDispatch, useSelector } from 'react-redux';
import { addAccount, removeAccount } from '../../redux/slices/userSlice';
import { useLocation, useNavigate } from 'react-router-dom';
import { routingConfig } from '../../router/routing-config';
import SearchComponent from '../SearchComponent';
import UserProfileImage from '../UserProfileImage';

/**
 * This Component is rendered in every page
 * @returns 
 */
const Header = () => {
  const navigate = useNavigate();
  const { path } = useLocation();
  const user = useSelector(((store) => store.user))
  const app = useSelector(((store) => store.app))
  const { auth, onAuthStateChanged, signOut } = useFirebase();
  const dispatch = useDispatch();

  // This code block runs on every reload of the page.
  useEffect(() => {
    // Listener that dispatches user object to redux store
    const unsubscribe = onAuthStateChanged(auth, (userCred) => {
      if (userCred) {
        const { uid } = userCred;
        dispatch(addAccount(uid));
        if ((window.location.href.includes(routingConfig.signup) || window.location.href.includes(routingConfig.login))) {
          if (user && user.name)
            navigate(routingConfig.home, { replace: true });
          else
            navigate(routingConfig.profile, { replace: true });
        }
      } else {
        // No User Credentials Found, means have to logout user
        dispatch(removeAccount());
        if (!(window.location.href.includes(routingConfig.signup) || window.location.href.includes(routingConfig.login))) {
          navigate(routingConfig.login, { replace: true });
        }
      }
    });
    return () => unsubscribe();
  }, []);

  let userIndex = 0;
  user && user.users && user.users.forEach((element, index) => {
    if (element.name === user.name) userIndex = index;
  })
  const showLoginPageComponent = (path === routingConfig.login || path === routingConfig.signup);
  const showProfilePageComponent = (path === routingConfig.profile);
  return (
    <Container $top={0} $position='fixed' $z_index="10" $justifyContent="space-between" >
      <Logo />
      {/* Should also contain the navigation dropdown items to show the sections of the application */}
      {/* This should have signin button if not logged in */}
      <div className='flex h-[inherit] justify-between items-center'>
        {showLoginPageComponent ? <SearchComponent /> : <></>}
        {/* Had to keep a constants file in the CONSTANTS, and update the thing accordingly */}
        {/* // There is header component in the top of signup page */}
        {showLoginPageComponent ?
          <select >
            <option title='en' value={app.languages}>{app.languages}</option>
            <option title='hn' value={app.language}>{app.languages}</option>
          </select>
          : <></>}
        {(user && showProfilePageComponent) && <UserProfileImage
          onClick={() => { signOut(auth) }}
          className="mr-[3vw] mx-3 cursor-pointer h-[4rem]"
          index={userIndex}
          alt='user' />}
      </div>
    </Container>
  )
}

export default Header