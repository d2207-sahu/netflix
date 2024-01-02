import React, { useRef, useState } from 'react'
import Header from '../../components/layouts/Header';
import { BackgroundImage } from '../../components/layouts/BackgroundImage';
import { translationConfig } from '../../config/translation-config';
import { AuthInput, ButtonRed, ErrorText, Form, Heading } from "../../components/globals"
import { checkEmailAndPassword } from '../../utils/validation';
import { useFirebase } from '../../hooks';
import { FirebaseErrorMap } from '../../config/firebase-Error-Map-config';
import ToggleSignUpAndSignInComponent from '../../components/ToggleSignUpAndSignInComponent';
import SignInReCaptchaSecurityText from '../../components/AuthComponents/SignInReCaptchaSecurityText';

// TODO remove the <div mt 10 > => spacer global component
const LoginPage = () => {
    const [signInErrorMessage, setSignInErrorMessage] = useState('');
    const [signInSubmitError, setSignInSubmitError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const { auth, signInWithEmailAndPassword } = useFirebase();
    const emailRef = useRef();
    const passwordRef = useRef();

    function handleSignUp() {
        if (!isLoading) {
            const email = emailRef.current.value;
            const password = passwordRef.current.value;
            const message = checkEmailAndPassword(email, password)
            setSignInErrorMessage(message);
            setSignInSubmitError('');
            if (message !== '') return;
            console.log(checkEmailAndPassword(email, password), signInErrorMessage);
            setIsLoading(true);
            signInWithEmailAndPassword(auth, email, password)
                .then(() => {
                    emailRef.current.value = '';
                    passwordRef.current.value = '';
                })
                .catch((err => {
                    if (typeof (err) === 'object')
                        setSignInSubmitError(FirebaseErrorMap[err?.code?.split('/')[1]])
                    else setSignInSubmitError(err)
                })).finally(() => {
                    setIsLoading(false);
                });
        }
    }

    return (<div>
        <Header />
        <BackgroundImage />
        <Form
            onSubmit={(e) => e.preventDefault()}>
            <Heading>{translationConfig.signIn}</Heading>
            <div className='mt-10' />
            <AuthInput
                ref={emailRef}
                placeholder={translationConfig.email}
                autoComplete="email"
                type="email"
                title={translationConfig.email} />
            <AuthInput
                ref={passwordRef}
                placeholder={translationConfig.password}
                type='password'
                autoComplete="password"
                title={translationConfig.password} />
            <ErrorText>{signInErrorMessage}</ErrorText>
            <div className='mt-5' />
            <ButtonRed
                $loading={isLoading}
                $marginTop='1rem'
                autoCorrect='false'
                onClick={handleSignUp}>{!isLoading && translationConfig.signIn}
            </ButtonRed>
            <ErrorText>{signInSubmitError}</ErrorText>
            <ToggleSignUpAndSignInComponent isSignin />
            <SignInReCaptchaSecurityText />
        </Form >
    </div >)
}

// TODO
// 2. Have the image lazy Laod

export default LoginPage