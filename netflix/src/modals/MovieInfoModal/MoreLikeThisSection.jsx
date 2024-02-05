import React from 'react'
import { useLanguage } from '../../context/LanguageContext';
import AddToMyListButton from '../../components/AddToMyListButton';
import MovieAdultTag from '../../components/MovieComponents/MovieAdultTag';
import { TMDB_API_IMAGE_CDN_URL } from '../../config/constants';
import { SmallText } from '../../components/globals';
import GridSectionContainer from '../../components/globals/GridSectionContainer';


const MoreLikeThisSection = ({ similars }) => {
    const { languageData } = useLanguage();
    const SimilarMovies = similars.map((movieData) => {
        const trimmedText = movieData.overview.length > 200 ? `${movieData.overview.slice(0, 200)}...` : movieData.overview;
        if (!movieData.poster_path || !movieData.overview) return;
        return <div key={movieData.id} className='aspect-square cursor-pointer h-max bg-[#2f2f2f] m-4 rounded-[0.5rem]'>
            <img className='sm:rounded-t-[1rem]  rounded-b-[0rem] rounded-[1rem] w-[100%]'
                loading="lazy"
                src={`${TMDB_API_IMAGE_CDN_URL + 'w200'}${movieData.poster_path}`} alt={`Video: ${movieData.title}`} />
            <div className='sm:flex hidden flex-col py-8 px-4 gap-4 h-[-webkit-fill-available] mb-4 overflow-clip'>
                <div className='flex items-stretch justify-between'>
                    <MovieAdultTag adult={movieData?.adult} />
                    <AddToMyListButton />
                </div>
                <SmallText $color='#d2d2d2'>{trimmedText}</SmallText>
            </div>
        </div>;
    })
    return <GridSectionContainer title={!languageData ? '' : languageData?.moreLikeThis} element={4} entities={SimilarMovies} />;

}

export default MoreLikeThisSection