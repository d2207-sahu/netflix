import React from 'react'
import { IconButton, SmallText } from '../globals'

const MovieAdultTag = ({ adult }) => {
    // false U/A
    // true A 18+
    // borderContainer
    return <IconButton>
        <SmallText $color='#d2d2d2'>{adult ? "A" : "U/A"}</SmallText>
    </IconButton>
}

export default MovieAdultTag