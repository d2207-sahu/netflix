import React from 'react'
import { Heading, PrefferedRectangleButton, RectangleButton, SmallText } from '../globals'

const ErrorPageWrapper = ({ heading = "Error Happened!", preffered, error, resetErrorBoundary, cta = 'Try Again' }) => {
    return (
        <div className="absolute flex flex-col items-center justify-center">
            <Heading>{heading}</Heading>
            <SmallText className="p-5">{`${error}`}</SmallText>
            {preffered ?
                <PrefferedRectangleButton className="m-5" onClick={resetErrorBoundary}>
                    {cta}
                </PrefferedRectangleButton>
                : <RectangleButton className="m-5" onClick={resetErrorBoundary}>
                    {cta}
                </RectangleButton>}
        </div>
    )
}

export default ErrorPageWrapper