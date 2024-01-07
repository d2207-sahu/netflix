import React from 'react'
import styled from 'styled-components';

const ShimmerContainerLoading = styled.div`
    display: flex;
    align-items: center;
    width: '100%';
    height: 100vh;
    justify-content: center
`;

const ShimmerLoader = styled.div`
      /* Light grey */
      border-top: 16px solid #e50914;
      /* Blue */
      border-radius: 50%;
      opacity: 0.7;
      width: 120px;
      height: 120px;
      animation: spin 0.5s linear infinite;

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }

      100% {
        transform: rotate(360deg);
      }
    }`;

const ShimmerLoading = () => {
    return (
        <ShimmerContainerLoading>
            <ShimmerLoader />
        </ShimmerContainerLoading>
    )
}

export default ShimmerLoading