import React from 'react'
import Header from '../../components/layouts/Header';
import Form from '../../components/globals/Form';
import { BackgroundImage } from '../../components/layouts/BackgroundImage';
import { config } from '../../config/translation';
import { Input } from '../../components/globals/Input';
import { Heading, NormalText } from '../../components/globals/Text';
import { Button } from '../../components/globals/Button';
import { Link } from 'react-router-dom';

const LoginPage = () => {
    return (<div>
        <Header />
        <BackgroundImage />
        <Form>
            <Heading>Sign In</Heading>
            <Input placeholder={config.email} autoComplete="email" type="email" title={config.email} />
            <Input placeholder={config.password} type='password' title={config.password} />
            <Button autoCorrect='false' >Sign In</Button>
            <div className='flex flex-row'>
                <NormalText className='text-[#737373]'>New to Netflix? </NormalText>
                <Link to={'/signup'} className='text-white hover:underline'> <NormalText>Sign up Now</NormalText></Link>
            </div>
        </Form>
    </div>)
}


export default LoginPage