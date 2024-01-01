import React from 'react'
import { useSelector } from 'react-redux';
import { SmallText } from '../globals';
import { textLowColor } from '../../styles/colors';

const GenreTags = ({ genreIDs }) => {
    const { addMovieGenres } =
        useSelector((store) => store.movies);
    const textColor = textLowColor;
    return <SmallText className={`text-[${textColor}]`}>
        {genreIDs?.map((genreId) => {
            const genre = addMovieGenres.find((genre) => genre.id === genreId);
            if (genre)
                return genre.name;
        }).join(" • ")}
    </SmallText>;
}

export default GenreTags