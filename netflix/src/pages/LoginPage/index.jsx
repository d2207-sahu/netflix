import React from 'react'
import { background_image } from './../../assets';
import Header from '../../components/layouts/Header';
import Image from '../../components/globals/Image';

const LoginPage = () => {
    return (<div>
        <Header></Header>
        <Image width={"-webkit-fill-available"} src={background_image} alt='Login Page Background' />
    </div>)
}


export default LoginPage