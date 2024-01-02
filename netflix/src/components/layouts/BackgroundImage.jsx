import React from 'react'
import Image from '../globals/Image'
import { background_image } from '../../assets'

export const BackgroundImage = () => {
    return (
        <Image className='opacity-[.5]'
            $position="fixed"
            $minHeight="max-content"
            $minWidth="100vw"
            $mobileStyles={`
                min-width: auto;
                min-height: 100vh;
            `}
            $tabletStyles={`
                min-width: auto;
                min-height: 100vh;
            `}
            src={background_image}
            alt='Background Image' />
    )
}
