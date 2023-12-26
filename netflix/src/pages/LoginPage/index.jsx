import React, { useRef, useState } from 'react'
import Header from '../../components/layouts/Header';
import { BackgroundImage } from '../../components/layouts/BackgroundImage';
import { translationConfig } from '../../config/translation-config';
import { Button, ErrorText, Form, Heading, Input, NormalText } from "../../components/globals"
import { checkEmailAndPassword } from '../../utils/validation';
import { LinkText } from '../../components/LinkText';
import { useFirebase } from '../../hooks';
import { FirebaseErrorMap } from '../../config/firebase-Error-Map-config';

const LoginPage = () => {
    const [signInErrorMessage, setSignInErrorMessage] = useState('');
    const [signInSubmitError, setSignInSubmitError] = useState('');
    const { auth, signInWithEmailAndPassword } = useFirebase();
    const emailRef = useRef();
    const passwordRef = useRef();

    function handleSignUp() {
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const message = checkEmailAndPassword(email, password)
        setSignInErrorMessage(message);
        setSignInSubmitError('');
        if (message !== '') return;
        console.log(checkEmailAndPassword(email, password), signInErrorMessage);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCred) => {
                emailRef.current.value = '';
                passwordRef.current.value = '';
            })
            .catch((err => {
                if (typeof (err) === 'object')
                    setSignInSubmitError(FirebaseErrorMap[err?.code?.split('/')[1]])
                else setSignInSubmitError(err)
            }));
    }

    return (<div>
        <Header />
        <BackgroundImage />
        <Form onSubmit={(e) => e.preventDefault()}>
            <Heading>{translationConfig.signIn}</Heading>
            <Input ref={emailRef} placeholder={translationConfig.email} autoComplete="email" type="email" title={translationConfig.email} />
            <Input ref={passwordRef} placeholder={translationConfig.password} type='password' title={translationConfig.password} />
            <ErrorText >{signInErrorMessage}</ErrorText>
            <Button autoCorrect='false' onClick={handleSignUp}>{translationConfig.signIn}</Button>
            <ErrorText >{signInSubmitError}</ErrorText>
            <div className='flex flex-row'>
                <NormalText className='text-[#737373]'>{translationConfig.newToNetflix}</NormalText>
                <LinkText to={'/signup'} text={translationConfig.signUpNow} />
            </div>
        </Form>
    </div>)
}

// TODO
// Faciong Error when saving name + phoitoURL,
// add a browse page UI, and also add the cuntionality tyheir
// we will use TMDB API to get the URLs
// 2. Have the image lazy Laod
// 3. See the Stack and Queue 5 Videos from Striver Playlist 
// Shift to routing-configs

export default LoginPage