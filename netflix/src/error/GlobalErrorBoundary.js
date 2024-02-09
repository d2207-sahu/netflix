import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { RectangleButton, SmallText, SubHeading } from '../components/globals';
import Footer from '../components/layouts/Footer';

const errorConfig = {
  globalError: 'Something went wrong:',
  tryAgain: 'Try again'
};


// cannot have useLanguage here.
export const GlobalErrorBoundaryFallback = ({ error, resetErrorBoundary }) => {
  return (
    <div className="flex flex-col items-center justify-center p-5">
      <SubHeading>{errorConfig?.globalError}</SubHeading>
      <SmallText className="p-5">{error.message}</SmallText>
      <RectangleButton className="m-5" onClick={resetErrorBoundary}>
        {errorConfig?.tryAgain}
      </RectangleButton>
      <Footer />
    </div>
  );
};

function ErrorBoundaryWrapper({ children, FallbackComponent }) {
  return (
    <ErrorBoundary
      FallbackComponent={FallbackComponent ?? GlobalErrorBoundaryFallback}
      onReset={() => {
        window.location.reload();
      }}
    >
      {children}
    </ErrorBoundary>
  );
}

export default ErrorBoundaryWrapper;
