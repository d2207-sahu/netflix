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
/**
 * This Component is rendered in every page
 * @returns 
 */
const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(((store) => store.user))
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
        navigate(routingConfig.home, { replace: true });
      } else {
        // No User Credentials Found, means have to logout user
        dispatch(removeUser());
        if (!(window.location.href.includes(routingConfig.signup) || window.location.href.includes(routingConfig.login)))
          navigate(routingConfig.login, { replace: true });
      }
    });
    return () => unsubscribe();
  }, []);


  return (
    <Container $top={0} $position='absolute' $z_index="10" $justifyContent="space-between" >
      <Logo />
      {user && <Image onClick={() => { signOut(auth) }} className="mx-[3%] cursor-pointer" src={userRed} alt='user' />}
    </Container>
  )
}

export default Header