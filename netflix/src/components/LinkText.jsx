import React from 'react'
import { NormalText } from './globals'
import { Link } from 'react-router-dom'

export const LinkText = ({ to, text }) => {
    return (
        <Link to={to}>
            <NormalText className='text-white hover:underline'>
                {text}
            </NormalText>
        </Link>
    )
}
