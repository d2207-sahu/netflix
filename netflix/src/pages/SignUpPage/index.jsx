import React from "react"
import { BackgroundImage } from "../../components/layouts/BackgroundImage"
import Header from "../../components/layouts/Header"
import { translationConfig } from "../../config/translation-config"
import { useRef, useState } from "react"
import { checkEmailAndPassword } from "../../utils/validation"
import { AuthInput, ButtonRed, ErrorText, Form, Heading } from "../../components/globals"
import { useFirebase } from "../../hooks"
import { FirebaseErrorMap } from "../../config/firebase-Error-Map-config"
import ToggleSignUpAndSignInComponent from "../../components/ToggleSignUpAndSignInComponent"
import SignInReCaptchaSecurityText from "../../components/AuthComponents/SignInReCaptchaSecurityText"

// TODO remove the <div mt 10 > => spacer global component
const SignUpPage = () => {
    const [signInErrorMessage, setSignInErrorMessage] = useState('');
    const [signInSubmitError, setSignInSubmitError] = useState('');
    const { auth, createUserWithEmailAndPassword } = useFirebase();
    const emailRef = useRef();
    const rePasswordRef = useRef();
    const passwordRef = useRef();
    const [isLoading, setIsLoading] = useState(false);

    function handleSignUp() {
        if (!isLoading) {
            const email = emailRef.current.value;
            const rePassword = rePasswordRef.current.value;
            const password = passwordRef.current.value;
            if (!(password === rePassword)) {
                setSignInErrorMessage(translationConfig.passwordMisMatch)
                return;
            } else {
                setSignInErrorMessage('');
            }
            const message = checkEmailAndPassword(email, password)
            setSignInErrorMessage(message);
            setSignInSubmitError('');
            if (message !== '') return;
            setIsLoading(true);
            createUserWithEmailAndPassword(auth, email, password)
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
            onSubmit={(event) => { event.preventDefault(); }}>
            <Heading>{translationConfig.signUp}</Heading>
            <div className='mt-10' />
            <AuthInput
                ref={emailRef}
                placeholder={translationConfig.email}
                autoComplete="email"
                type="email"
                title={translationConfig.email} />
            <AuthInput ref={passwordRef}
                placeholder={translationConfig.password}
                type='password'
                autoComplete="password"
                title={translationConfig.password} />
            <AuthInput ref={rePasswordRef}
                placeholder={translationConfig.repassword}
                type="password"
                autoComplete="password"
                title={translationConfig.repassword} />
            <ErrorText>{signInErrorMessage}</ErrorText>
            <div className='mt-5' />
            <ButtonRed
                $loading={isLoading}
                $marginTop='1rem'
                autoCorrect='false'
                onClick={handleSignUp} >
                {!isLoading && translationConfig.signUp}
            </ButtonRed>
            <ErrorText>{signInSubmitError}</ErrorText>
            <ToggleSignUpAndSignInComponent />
            <SignInReCaptchaSecurityText />
        </Form>
    </div>)
}

export default SignUpPage;
