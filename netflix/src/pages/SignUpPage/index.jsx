import { Link } from "react-router-dom"
import { BackgroundImage } from "../../components/layouts/BackgroundImage"
import Header from "../../components/layouts/Header"
import { config } from "../../config/translation"
import { useRef, useState } from "react"
import { validateEmail, validatePassword } from "../../utils/validation"
import { Button, Form, Heading, Input, NormalText } from "../../components/globals"

const SignUpPage = () => {
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
            <Heading>Sign Up</Heading>
            <Input ref={emailRef} placeholder={config.email} autoComplete="email" type="email" title={config.email} />
            <Input ref={passwordRef} placeholder={config.password} type='password' title={config.password} />
            <Button autoCorrect='false' onClick={handleSignUp} >Sign Up</Button>
            <NormalText className='text-red-600'>{signInErrorMessage}</NormalText>
            <div className='flex flex-row'>
                <NormalText className='text-[#737373]'>Already Signed Up? </NormalText>
                <Link to={'/login'} className='text-white hover:underline'> <NormalText>Sign In Now</NormalText></Link>
            </div>
        </Form>
    </div>)
}

export default SignUpPage;
