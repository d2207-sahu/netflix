import React, { useRef, useState } from 'react'
import Header from '../../components/layouts/Header';
import { BackgroundImage } from '../../components/layouts/BackgroundImage';
import { AuthInput, ButtonRed, ErrorText, Form, Heading } from "../../components/globals"
import loginValidator from '../../utils/loginValidator';
import { useFirebase } from '../../hooks';
// import { FirebaseErrorMap } from '../../constants/firebase-Error-Map';
import ToggleSignUpAndSignInComponent from '../../components/AuthComponents/ToggleSignUpAndSignInComponent';
import SignInReCaptchaSecurityText from '../../components/AuthComponents/SignInReCaptchaSecurityText';
import { useLanguage } from '../../context/LanguageContext';
import useError from '../../hooks/useError';

// TODO remove the <div mt 10 > => spacer global component
const LoginPage = () => {
    const throwError = useError();
    const { languageData } = useLanguage();
    const [signInErrorMessage, setSignInErrorMessage] = useState('');
    const [signInSubmitError, setSignInSubmitError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const { auth, signInWithEmailAndPassword } = useFirebase();
    const emailRef = useRef();
    const passwordRef = useRef();

    function handleSignUp() {
        try {
            if (!isLoading) {
                const email = emailRef.current.value;
                const password = passwordRef.current.value;
                const message = loginValidator(languageData, email, password, null, throwError )
                setSignInErrorMessage(message);
                setSignInSubmitError('');
                if (message !== '') return;
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
        } catch (e) {
            console.error(e);
            setIsLoading(false);
            throwError("Internal Application Error, while signing up")
        }
    }

    return (<div>
        <Header />
        <BackgroundImage />
        <Form
            onSubmit={(e) => e?.preventDefault()}>
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

export default LoginPage