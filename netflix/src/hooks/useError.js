import { useErrorBoundary } from 'react-error-boundary';

const useError = () => {
  const { showBoundary } = useErrorBoundary();

  return showBoundary
};

export default useError;
