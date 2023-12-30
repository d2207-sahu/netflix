import React from 'react';
import {NormalText} from '../../components/globals';
import {useSelector} from 'react-redux';
import {translationConfig} from '../../config/translation-config';
import MovieCardComponent from '../../components/MovieCard';
import {Slider, SliderContainer} from '../../components/NetflixCaraousel';
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
      <NormalText className="pl-[5%] mb-5 font-bold">{title}</NormalText>
      <SliderContainer>
        <Slider>
          {movieCards?.map((movieDetail) => (
            <MovieCardComponent
              key={movieDetail.id}
              movieDetail={movieDetail}
            />
          ))}
        </Slider>
      </SliderContainer>
    </div>
  );
};

export default MoviesCarouselContainer;
