import React from "react"
import { BackgroundImage } from "../../components/layouts/BackgroundImage"
import Header from "../../components/layouts/Header"
import { translationConfig } from "../../config/translation-config"
import { useRef, useState } from "react"
import { checkEmailAndPassword } from "../../utils/validation"
import { Button, ErrorText, Form, Heading, Input, NormalText } from "../../components/globals"
import { LinkText } from "../../components/LinkText"
import { useFirebase } from "../../hooks"
import { updateProfile } from "firebase/auth"
import { useDispatch } from "react-redux"
import { addUser } from "../../redux/slices/userSlice"
import { FirebaseErrorMap } from "../../config/firebase-Error-Map-config"

// TODO create a confirm password fiel;d here.
const SignUpPage = () => {
    const [signInErrorMessage, setSignInErrorMessage] = useState('');
    const [signInSubmitError, setSignInSubmitError] = useState('');
    const { auth, createUserWithEmailAndPassword } = useFirebase();
    const dispatch = useDispatch();
    const emailRef = useRef();
    const nameRef = useRef();
    const passwordRef = useRef();

    function handleSignUp() {
        const email = emailRef.current.value;
        const name = nameRef.current.value;
        const password = passwordRef.current.value;
        const message = checkEmailAndPassword(email, password, name)
        setSignInErrorMessage(message);
        setSignInSubmitError('');
        if (message !== '') return;
        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                emailRef.current.value = '';
                passwordRef.current.value = '';
                nameRef.current.value = '';
                return updateProfile(auth, { displayName: name });
            }).then(() => {
                auth.currentUser &&
                    dispatch(
                        addUser({
                            name: auth.currentUser?.displayName,
                            photoURL: auth.currentUser?.photoURL
                        }));
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
        <Form onSubmit={(event) => { event.preventDefault(); }}>
            <Heading>{translationConfig.signUp}</Heading>
            <Input ref={nameRef} placeholder={translationConfig.name} autoComplete="email" type="text" title={translationConfig.name} />
            <Input ref={emailRef} placeholder={translationConfig.email} autoComplete="email" type="email" title={translationConfig.email} />
            <Input ref={passwordRef} placeholder={translationConfig.password} type='password' title={translationConfig.password} />
            <ErrorText>{signInErrorMessage}</ErrorText>
            <Button autoCorrect='false' onClick={handleSignUp} >{translationConfig.signUp}</Button>
            <ErrorText>{signInSubmitError}</ErrorText>
            <div className='flex flex-row'>
                <NormalText className='text-[#737373]'>{translationConfig.alreadySignedUp} </NormalText>
                <LinkText to={'/login'} text={translationConfig.signInNow} />
            </div>
        </Form>
    </div>)
}

export default SignUpPage;
