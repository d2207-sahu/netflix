import React from 'react'
import GridContainer from '../GridContainer'
import ShimmerMovieCard from './ShimmerMovieCard'

const ShimmerCarouselGrid = () => {
    return (
        <GridContainer>{
            (Array(10).fill(0)).map((e, i) => <ShimmerMovieCard key={`${e + i}`} />)}
        </GridContainer>
    )
}

export default ShimmerCarouselGrid