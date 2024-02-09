import React from 'react'
import { ErrorBoundary } from 'react-error-boundary';
import Header from '../components/layouts/Header';
import Footer from '../components/layouts/Footer';
import ErrorPageWrapper from '../components/ErrorComponents/ErrorPageWrapper';

const HomePageErrorCallback = (props) => {
  return <ErrorBoundary
    FallbackComponent={({ error, resetErrorBoundary }) => {
      return (
        <div className="flex flex-col justify-center items-center pt-[15%]">
          <Header />
          <ErrorPageWrapper error={error} resetErrorBoundary={resetErrorBoundary}/>
          <Footer />
        </div>
      );
    }}
  >
    {props.children}
  </ErrorBoundary>
}

export default HomePageErrorCallback