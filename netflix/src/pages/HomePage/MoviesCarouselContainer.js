import React, { useEffect, useState } from 'react';
import { ExploreMoreText, SubHeading } from '../../components/globals';
import { useSelector } from 'react-redux';
import MovieCardComponent from '../../components/MovieCard';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { useLanguage } from '../../context/LanguageContext';
import ShimmerCarouselRow from '../../components/Shimmer/ShimmerCarouselRow';
import useMoviesMyList from '../../hooks/useMoviesMyList';
import useMoviesRecentlyPlayed from '../../hooks/useMoviesRecentlyPlayed';
import { SliderContainer } from '../../components/globals/SliderContainer';
import { LeftHandle, RightHandle } from '../../components/globals/SliderHandlers';
import { Slider } from '../../components/globals/Slider';

const MoviesCarouselContainer = () => {
  const { languageData } = useLanguage();
  const { nowPlayingMovies, popularMovies, topRatedMovies, upcomingMovies, loadingCarousel } =
    useSelector((store) => store.movies);
  useMoviesRecentlyPlayed();
  const { user } = useMoviesMyList();
  useEffect(() => {}, [user?.saved, user?.played, user?.searched]);
  return (
    <div className="w-screen h-max">
      <div className="relative ">
        {loadingCarousel ? (
          <div className="mx-10">
            <ShimmerCarouselRow />
            <ShimmerCarouselRow />
            <ShimmerCarouselRow />
            <ShimmerCarouselRow />
          </div>
        ) : (
          <>
            {nowPlayingMovies && (
              <MoviesCarousel
                title={!languageData ? '' : languageData?.nowPlaying}
                movieCards={nowPlayingMovies}
              />
            )}
            {user?.played.length > 0 && (
              <MoviesCarousel
                title={!languageData ? '' : languageData?.recentlyPlayedTitle + user?.name}
                movieCards={user?.played.map((e) => e.videoData)}
              />
            )}
            {popularMovies && (
              <MoviesCarousel
                title={!languageData ? '' : languageData?.Popular}
                movieCards={popularMovies}
              />
            )}

            {topRatedMovies && (
              <MoviesCarousel
                title={!languageData ? '' : languageData?.topRated}
                movieCards={topRatedMovies}
              />
            )}

            {user?.saved.length > 0 && (
              <MoviesCarousel
                title={!languageData ? '' : languageData?.mylist}
                movieCards={user?.saved.map((e) => e.videoData)}
              />
            )}
            {upcomingMovies && (
              <MoviesCarousel
                title={!languageData ? '' : languageData?.upcoming}
                movieCards={upcomingMovies}
              />
            )}
            <div className="m-10"></div>
          </>
        )}
      </div>
    </div>
  );
};

const MoviesCarousel = ({ title, movieCards }) => {
  const [sliderIndex, setSliderIndex] = useState(0);
  const [onMouseHover, setMouseHover] = useState(false);
  return (
    <div
      onMouseOver={() => {
        setMouseHover(true);
      }}
      onMouseLeave={() => {
        setMouseHover(false);
      }}
    >
      <div className="flex gap-5">
        <SubHeading className="pl-[3.1%] mt-12 pt-12 mb-8 font-bold text-sm" $fontSize={'2.0rem'}>
          {title}
        </SubHeading>
        {onMouseHover && <ExploreMoreText>Explore More</ExploreMoreText>}
      </div>
      <SliderContainer>
        {onMouseHover && (
          <LeftHandle
            onClick={() => {
              setSliderIndex((prev) => prev + 1);
            }}
          >
            <FiArrowLeft size={30} className="m-auto" />
          </LeftHandle>
        )}
        <Slider $sliderIndex={`${sliderIndex * 100}%`}>
          {movieCards?.map((movieDetail) => (
            <MovieCardComponent key={movieDetail?.id} movieDetail={movieDetail} />
          ))}
        </Slider>
        {onMouseHover && (
          <RightHandle
            onClick={() => {
              setSliderIndex((prev) => prev - 1);
            }}
            $marginRight="16px"
          >
            <FiArrowRight size={30} className="m-auto" />
          </RightHandle>
        )}
      </SliderContainer>
    </div>
  );
};

export default MoviesCarouselContainer;
