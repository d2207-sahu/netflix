import React from 'react'
import MovieReleaseDate from '../../components/MovieComponents/MovieReleaseDate'
import MovieRuntimeTag from '../../components/MovieComponents/MovieRuntimeTag'
import MovieAdultTag from '../../components/MovieComponents/MovieAdultTag'
import MovieLanguageTag from '../../components/MovieComponents/MovieLanguageTag'
import RatingTag from '../../components/MovieComponents/RatingTag'
import GenreTags from '../../components/MovieComponents/GenreTags'
import MovieTitle from '../../components/MovieComponents/MovieTitle'
import MovieDescription from '../../components/MovieComponents/MovieDescription'
import { SmallText } from '../../components/globals'

const InformationSection = ({ info }) => {
    const { title, overview, tagline, original_language, adult, genre_ids, vote_count, vote_average, release_date, runtime } = info
    return <div className='flex justify-between w-[100%]'>
        <div className='flex flex-col items-start justify-start'>
            <div className='w-[68%] flex'>
                <MovieReleaseDate release_date={release_date} />
                <MovieRuntimeTag runtime={runtime} />
                <RatingTag vote_average={vote_average} vote_count={vote_count} />
                <GenreTags genreIDs={genre_ids} />
                <MovieAdultTag adult={adult} />
                <MovieLanguageTag original_language={original_language} />
            </div>
            <MovieTitle title={title} className={"hidden sm:block"} />
            <MovieDescription desc={tagline} className={"w-[60%] text-pretty italic"} />
            <SmallText className={"w-[50%]"} >{overview} </SmallText>
        </div>

    </div>;
}

export default InformationSection