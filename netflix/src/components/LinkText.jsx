import React from 'react'
import { NormalText } from './globals'
import { Link } from 'react-router-dom'

export const LinkText = ({ to, text, mobileShow }) => {
    return (
        <Link to={to} className={`${mobileShow ? "" : "hidden sm:block"}`}>
            <NormalText className='text-white hover:underline w-max'>
                {text}
            </NormalText>
        </Link>
    )
}
