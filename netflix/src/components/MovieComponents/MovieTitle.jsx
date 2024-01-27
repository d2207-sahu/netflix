import React from 'react'
import { Heading } from '../globals';

const MovieTitle = ({ title, className }) => {
    return (
        <Heading $showShadow className={className}>
            {title}
        </Heading>
    );
};
export default MovieTitle