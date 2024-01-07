import React from 'react'
import ShimmerMovieCard from './ShimmerMovieCard'

const ShimmerCarouselRow = () => {
    return (
        <div className='flex min-w-[94%] overflow-x-clip overflow-y-visible mb-20'>
            {(Array(10).fill(0)).map((e, i) => <ShimmerMovieCard key={`${e + i}`} />)}
        </div>
    )
}

export default ShimmerCarouselRow