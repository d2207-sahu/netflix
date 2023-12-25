import React, { useRef, useState } from 'react'
import Header from '../../components/layouts/Header';
import { BackgroundImage } from '../../components/layouts/BackgroundImage';
import { config } from '../../config/translation';
import { Button, Form, Heading, Input, NormalText } from "../../components/globals"
import { Link } from 'react-router-dom';
import { validateEmail, validatePassword } from '../../utils/validation';

const LoginPage = () => {
    const [signInErrorMessage, setSignInErrorMessage] = useState('');
    const emailRef = useRef();
    const passwordRef = useRef();

    function handleSignUp() {
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email, password);
        if (!validateEmail(email)) { setSignInErrorMessage("Email is not valid.") }
        else if (!validatePassword(password)) { setSignInErrorMessage("Password is not valid.") }
    }

    return (<div>
        <Header />
        <BackgroundImage />
        <Form onSubmit={(event) => { event.preventDefault(); }}>
            <Heading>Sign In</Heading>
            <Input ref={emailRef} placeholder={config.email} autoComplete="email" type="email" title={config.email} />
            <Input ref={passwordRef} placeholder={config.password} type='password' title={config.password} />
            <Button autoCorrect='false' onClick={handleSignUp}>Sign In</Button>
            <NormalText className='text-[#e87c03]'>{signInErrorMessage}</NormalText>
            <div className='flex flex-row'>
                <NormalText className='text-[#737373]'>New to Netflix? </NormalText>
                <Link to={'/signup'} className='text-white hover:underline'>
                    <NormalText>Sign up Now</NormalText>
                </Link>
            </div>
        </Form>
    </div>)
}

// ToDo
// 1. Firebase connection and making the user account.
// 2. Have the image lazy Laod
// 3. See the Stack and Queue 5 Videos from Striver Playlist 

export default LoginPage