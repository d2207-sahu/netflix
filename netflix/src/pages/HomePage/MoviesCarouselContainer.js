import React, {useState} from 'react';
import {SubHeading} from '../../components/globals';
import {useSelector} from 'react-redux';
import {translationConfig} from '../../config/translation-config';
import MovieCardComponent from '../../components/MovieCard';
import {
  LeftHandle,
  RightHandle,
  Slider,
  SliderContainer,
} from '../../components/NetflixCaraousel';
import {FiArrowLeft, FiArrowRight} from 'react-icons/fi';
const MoviesCarouselContainer = () => {
  const {nowPlayingMovies, popularMovies, topRatedMovies, upcomingMovies} =
    useSelector((store) => store.movies);

  return (
    <div className="w-screen h-max">
      <div className=" relative top-[-15vh]">
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
  const [sliderIndex, setSliderIndex] = useState(0);

  return (
    <div>
      <SubHeading
        className="pl-[3.1%] mt-8 mb-8 font-bold text-sm"
        $fontSize={'2.0rem'}
      >
        {title}
      </SubHeading>
      <SliderContainer>
        <LeftHandle
          onClick={() => {
            setSliderIndex((prev) => prev + 1);
          }}
        >
          <FiArrowLeft size={30} className="m-auto" />
        </LeftHandle>
        <Slider $sliderIndex={`${sliderIndex * 100}%`}>
          {movieCards?.map((movieDetail) => (
            <MovieCardComponent
              key={movieDetail.id}
              movieDetail={movieDetail}
            />
          ))}
        </Slider>
        <RightHandle
          onClick={() => {
            setSliderIndex((prev) => prev - 1);
          }}
        >
          <FiArrowRight size={30} className="m-auto" />
        </RightHandle>
      </SliderContainer>
    </div>
  );
};

export default MoviesCarouselContainer;
