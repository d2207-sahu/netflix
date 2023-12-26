import React from 'react';
import {
  Image,
  InvisibleScrollContainer,
  NormalText,
} from '../../components/globals';
import {useSelector} from 'react-redux';
import {translationConfig} from '../../config/translation-config';
import {TMDB_API_IMAGE_CDN_URL} from '../../config/constants';

const MoviesCarouselContainer = () => {
  const {nowPlayingMovies, popularMovies, topRatedMovies, upcomingMovies} =
    useSelector((store) => store.movies);

  return (
    <div className="bg-black w-screen h-max">
      <div className="relative top-[-15vh]">
        <MoviesCarousel
          title={translationConfig.nowPlaying}
          movieCards={nowPlayingMovies}
        />
        <MoviesCarousel
          title={translationConfig.Popular}
          movieCards={popularMovies}
        />
        <MoviesCarousel
          title={translationConfig.topRated}
          movieCards={topRatedMovies}
        />
        <MoviesCarousel
          title={translationConfig.upcoming}
          movieCards={upcomingMovies}
        />
      </div>
    </div>
  );
};

const MoviesCarousel = ({title, movieCards}) => {
  return (
    <div>
      <NormalText className="pl-[5%] mb-5 font-bold">{title}</NormalText>]
      <InvisibleScrollContainer className="flex flex-row">
        <div className="pl-[5%]"></div>
        {movieCards?.map((movieDetail) => (
          <MovieCard key={movieDetail.id} movieDetail={movieDetail} />
        ))}
      </InvisibleScrollContainer>
    </div>
  );
};

const MovieCard = ({movieDetail}) => {
  return (
    <Image
      alt={movieDetail.original_title}
      src={TMDB_API_IMAGE_CDN_URL + 'w500' + movieDetail.backdrop_path}
      className="w-[25vw] h-auto pr-[0.4vw]"
      $borderRadius={'0.4vw'}
    ></Image>
  );
};

export default MoviesCarouselContainer;
