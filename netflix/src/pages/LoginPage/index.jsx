import React, { useRef, useState } from 'react'
import Header from '../../components/layouts/Header';
import { BackgroundImage } from '../../components/layouts/BackgroundImage';
import { AuthInput, ButtonRed, ErrorText, Form, Heading } from "../../components/globals"
import { validateEmail, validateName, validatePassword } from '../../utils/validation';
import { useFirebase } from '../../hooks';
// import { FirebaseErrorMap } from '../../constants/firebase-Error-Map';
import ToggleSignUpAndSignInComponent from '../../components/AuthComponents/ToggleSignUpAndSignInComponent';
import SignInReCaptchaSecurityText from '../../components/AuthComponents/SignInReCaptchaSecurityText';
import { useLanguage } from '../../context/LanguageContext';

// TODO remove the <div mt 10 > => spacer global component
const LoginPage = () => {
    const { languageData } = useLanguage();
    const [signInErrorMessage, setSignInErrorMessage] = useState('');
    const [signInSubmitError, setSignInSubmitError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const { auth, signInWithEmailAndPassword } = useFirebase();
    const emailRef = useRef();
    const passwordRef = useRef();
    const checkEmailAndPassword = (email, password, name) => {
        if (!validateEmail(email)) {
            return !languageData ? '' : languageData?.emailInvlaid;
        } else if (!validatePassword(password)) {
            return !languageData ? '' : languageData?.passwordInvlaid;
        } else if (name && !validateName(name)) {
            return !languageData ? '' : languageData?.nameInvalid;
        } else return '';
    };
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
                        setSignInSubmitError(Object.create(window.FirebaseErrorMap)[err?.code?.split('/')[1]])
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
            <Heading>{!languageData ? '' : languageData?.signIn}</Heading>
            <div className='mt-10' />
            <AuthInput
                ref={emailRef}
                placeholder={!languageData ? '' : languageData?.email}
                autoComplete="email"
                type="email"
                title={!languageData ? '' : languageData?.email} />
            <AuthInput
                ref={passwordRef}
                placeholder={!languageData ? '' : languageData?.password}
                type='password'
                autoComplete="password"
                title={!languageData ? '' : languageData?.password} />
            <ErrorText>{signInErrorMessage}</ErrorText>
            <div className='mt-5' />
            <ButtonRed
                $loading={isLoading}
                $marginTop='1rem'
                autoCorrect='false'
                onClick={handleSignUp}>{!isLoading && !languageData ? '' : languageData?.signIn}
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