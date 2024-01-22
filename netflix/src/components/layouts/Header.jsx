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
import LanguageSelect from '../HeaderComponents/LanguageSelect';
import { LinkText } from '../LinkText';
import useFirestoreDB from '../../hooks/useFirestoreDB';

/**
 * This Component is rendered in every page
 * @returns 
 */
const Header = () => {
  const navigate = useNavigate();
  useFirestoreDB();
  const { pathname } = useLocation();
  const user = useSelector(((store) => store.user))
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

  let showAuthheaders = decideShowAuthHeaders(pathname);

  return (
    <Container
      $top={0}
      $position='fixed'
      $z_index="30"
      $justifyContent="space-between"
      $background_transparent={showAuthheaders}
    >
      <div className='flex items-center justify-start gap-5'>
        <Logo />
        {/* Should also contain the navigation dropdown items to show the sections of the application */}
        {showAuthheaders && <LinkText to={routingConfig.mylist} className='m-auto w-max' text={"My List"}></LinkText>}
      </div>
      <div className='flex h-[inherit] justify-between items-center gap-2'>
        {showAuthheaders && <SearchComponent />}
        {showAuthheaders && <LanguageSelect />}
        {(user && showAuthheaders) && <UserProfileImage
          onClick={() => { signOut(auth) }}
          className="mr-[3vw] mx-3 cursor-pointer h-[4rem] rounded-[.5rem] sm:block hidden"
          alt='user' />}
      </div>
    </Container>
  )
}

function decideShowAuthHeaders(pathname) {
  let showAuthheaders;
  switch (pathname) {
    case routingConfig.login:
      showAuthheaders = false;
      break;
    case routingConfig.profile:
      showAuthheaders = false;
      break;
    case routingConfig.signup:
      showAuthheaders = false;
      break;
    default:
      showAuthheaders = true;
      break;
  }
  return showAuthheaders
}

export default Header