import React from 'react'
import Image from '../globals/Image'
import { background_image } from '../../assets'

export const BackgroundImage = () => {
    return (
        <Image
            // $height={"-webkit-fill-available"}
            $position="absolute" 
            // $width={"-webkit-fill-available"} 
            src={background_image} 
            alt='Login Page Background' />
    )
}
