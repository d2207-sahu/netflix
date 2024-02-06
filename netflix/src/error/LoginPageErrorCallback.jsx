import React from 'react'
import Header from '../components/layouts/Header'
import { BackgroundImage } from '../components/layouts/BackgroundImage'
import { ErrorBoundary } from 'react-error-boundary'
import ErrorPageWrapper from '../components/ErrorComponents/ErrorPageWrapper'

const LoginPageErrorCallback = (props) => {
    return (<ErrorBoundary
        FallbackComponent={({ error, resetErrorBoundary }) => {
            return (
                <div className="flex flex-col justify-center items-center pt-[15%]">
                    <Header />
                    <BackgroundImage />
                    <ErrorPageWrapper preffered error={error} resetErrorBoundary={resetErrorBoundary}/>
                </div>)
        }} >
        {props.children}
    </ErrorBoundary>
    )
}

export default LoginPageErrorCallback