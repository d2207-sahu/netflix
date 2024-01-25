import React from "react"
import { BackgroundImage } from "../../components/layouts/BackgroundImage"
import Header from "../../components/layouts/Header"
import { useRef, useState } from "react"
import { AuthInput, ButtonRed, ErrorText, Form, Heading } from "../../components/globals"
import { useFirebase } from "../../hooks"
import { FirebaseErrorMap } from "../../constants/firebase-Error-Map"
import ToggleSignUpAndSignInComponent from "../../components/AuthComponents/ToggleSignUpAndSignInComponent"
import SignInReCaptchaSecurityText from "../../components/AuthComponents/SignInReCaptchaSecurityText"
import { useLanguage } from "../../context/LanguageContext"
import { validatePassword } from "firebase/auth"
import { validateEmail, validateName } from "../../utils/validation"

// TODO remove the <div mt 10 > => spacer global component
const SignUpPage = () => {
    const { languageData } = useLanguage();
    const [signInErrorMessage, setSignInErrorMessage] = useState('');
    const [signInSubmitError, setSignInSubmitError] = useState('');
    const { auth, createUserWithEmailAndPassword } = useFirebase();
    const emailRef = useRef();
    const rePasswordRef = useRef();
    const passwordRef = useRef();
    const [isLoading, setIsLoading] = useState(false);
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
            const rePassword = rePasswordRef.current.value;
            const password = passwordRef.current.value;
            if (!(password === rePassword)) {
                setSignInErrorMessage(!languageData ? '' : languageData?.passwordMisMatch)
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
