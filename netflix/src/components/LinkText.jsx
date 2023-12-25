import React from 'react'
import { NormalText } from './globals'
import { Link } from 'react-router-dom'

export const LinkText = (props) => {
    return (
        <Link to={props.to}>
            <NormalText className='text-white hover:underline'>
                {props.text}
            </NormalText>
        </Link>
    )
}
