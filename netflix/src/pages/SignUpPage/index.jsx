import { Link } from "react-router-dom"
import { BackgroundImage } from "../../components/layouts/BackgroundImage"
import Header from "../../components/layouts/Header"
import { Heading, NormalText } from "../../components/globals/Text"
import { Input } from "../../components/globals/Input"
import { Button } from "../../components/globals/Button"
import { config } from "../../config/translation"
import Form from "../../components/globals/Form"

const SignUpPage = () => {
    return (<div>
        <Header />
        <BackgroundImage />
        <Form>
            <Heading>Sign Up</Heading>
            <Input placeholder={config.email} autoComplete="email" type="email" title={config.email} />
            <Input placeholder={config.password} type='password' title={config.password} />
            <Button autoCorrect='false' >Sign Up</Button>
            <div className='flex flex-row'>
                <NormalText className='text-[#737373]'>Already Signed Up? </NormalText>
                <Link to={'/login'} className='text-white hover:underline'> <NormalText>Sign In Now</NormalText></Link>
            </div>
        </Form>
    </div>)
}

export default SignUpPage;
