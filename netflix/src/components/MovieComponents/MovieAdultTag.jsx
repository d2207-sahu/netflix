import React from 'react'
import { SmallText } from '../globals'

const MovieAdultTag = ({ adult }) => {
    // false U/A
    // true A 18+
    // borderContainer
    return <SmallText>{adult}</SmallText>
}

export default MovieAdultTag