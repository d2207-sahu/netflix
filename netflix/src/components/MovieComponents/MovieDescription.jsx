import React from 'react'
import { NormalText } from '../globals';

const MovieDescription = ({ desc, className }) => {
    return (
      <NormalText $showShadow className={className}>
        {desc}
      </NormalText>
    );
  };
export default MovieDescription