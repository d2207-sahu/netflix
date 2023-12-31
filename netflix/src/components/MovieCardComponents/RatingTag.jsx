import React from 'react'
import { SmallText } from '../globals'
import { formatReviewCount } from '../../utils/formatCount'
import BorderedContainer from '../globals/BorderedContainer'

const RatingTag = ({vote_average, vote_count}) => {
    {/* TODO Remove this section if number of revierws is 0 */ }
    return (
        <div className='flex gap-2'>
            <BorderedContainer >
                <SmallText className='text-green-600 font-bold '>
                    {`${vote_average?.toFixed(1)}`}
                </SmallText>
            </BorderedContainer>
            <SmallText className='text-[#6a6a6a] '>
                {`${formatReviewCount(vote_count)}`}
            </SmallText>
        </div>

    )
}

export default RatingTag