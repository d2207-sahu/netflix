import React from 'react'
import { SmallText } from '../globals';

const MovieCreditsSection = ({ category, entities }) => {
    return <span className='flex'>
        <SmallText $color='#636363'>{category + ": "}</SmallText>
        <div className='flex flex-wrap'>
            {entities.map((element) => {
                console.log(element);
                const text = element
                return <>
                    <SmallText key={element} className='hover:underline w-fit'>
                        {text}</SmallText>
                    <SmallText>{" , "}</SmallText>
                </>
            })}
        </div>
    </span>
}

export default MovieCreditsSection