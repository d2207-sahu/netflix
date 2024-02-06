import React from "react"
import { BackgroundImage } from "../../components/layouts/BackgroundImage"
import Header from "../../components/layouts/Header"
import { useRef, useState } from "react"
import { AuthInput, ButtonRed, ErrorText, Form, Heading } from "../../components/globals"
import { useFirebase } from "../../hooks"
// import { FirebaseErrorMap } from "../../constants/firebase-Error-Map"
import ToggleSignUpAndSignInComponent from "../../components/AuthComponents/ToggleSignUpAndSignInComponent"
import SignInReCaptchaSecurityText from "../../components/AuthComponents/SignInReCaptchaSecurityText"
import { useLanguage } from "../../context/LanguageContext"
import signupValidator from "../../utils/loginValidator"
import useError from "../../hooks/useError"

// TODO remove the <div mt 10 > => spacer global component
const SignUpPage = () => {
    const throwError = useError();
    const { languageData } = useLanguage();
    const [signInErrorMessage, setSignInErrorMessage] = useState('');
    const [signInSubmitError, setSignInSubmitError] = useState('');
    const { auth, createUserWithEmailAndPassword } = useFirebase();
    const emailRef = useRef();
    const rePasswordRef = useRef();
    const passwordRef = useRef();
    const [isLoading, setIsLoading] = useState(false);
    function handleSignUp() {
        try {
            if (!isLoading) {
                const email = emailRef.current.value;
                const rePassword = rePasswordRef.current.value;
                const password = passwordRef.current.value;
                if (!(password === rePassword)) {
                    setSignInErrorMessage(!languageData ? '' : languageData?.passwordMisMatch)
                    return;
                } else {
                    setSignInErrorMessage('');
                }
                const message = signupValidator(languageData, email, password, null, throwError)
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
            onSubmit={(event) => event?.preventDefault()}>
            <Heading>{!languageData ? '' : languageData?.signUp}</Heading>
            <div className='mt-10' />
            <AuthInput
                ref={emailRef}
                placeholder={!languageData ? '' : languageData?.email}
                autoComplete="email"
                type="email"
                title={!languageData ? '' : languageData?.email} />
            <AuthInput ref={passwordRef}
                placeholder={!languageData ? '' : languageData?.password}
                type='password'
                autoComplete="password"
                title={!languageData ? '' : languageData?.password} />
            <AuthInput ref={rePasswordRef}
                placeholder={!languageData ? '' : languageData?.repassword}
                type="password"
                autoComplete="password"
                title={!languageData ? '' : languageData?.repassword} />
            <ErrorText>{signInErrorMessage}</ErrorText>
            <div className='mt-5' />
            <ButtonRed
                $loading={isLoading}
                $marginTop='1rem'
                autoCorrect='false'
                onClick={handleSignUp} >
                {!isLoading && !languageData ? '' : languageData?.signUp}
            </ButtonRed>
            <ErrorText>{signInSubmitError}</ErrorText>
            <ToggleSignUpAndSignInComponent />
            <SignInReCaptchaSecurityText />
        </Form>
    </div>)
}

export default SignUpPage;
