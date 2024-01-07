import React, { useState } from 'react';
import { ExploreMoreText, SubHeading } from '../../components/globals';
import { useSelector } from 'react-redux';
import MovieCardComponent from '../../components/MovieCard';
import {
  LeftHandle,
  RightHandle,
  Slider,
  SliderContainer
} from '../../components/NetflixCaraousel';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { useLanguage } from '../../context/LanguageContext';
import ShimmerCarouselRow from '../../components/Shimmer/ShimmerCarouselRow';
import useMoviesMyList from '../../hooks/useMoviesMyList';
import useMoviesRecentlyPlayed from '../../hooks/useMoviesRecentlyPlayed';

const MoviesCarouselContainer = () => {
  const { languageData } = useLanguage();

  const { nowPlayingMovies, popularMovies, topRatedMovies, upcomingMovies, loadingCarousel } =
    useSelector((store) => store.movies);
  useMoviesRecentlyPlayed();
  const { user } = useMoviesMyList();

  return (
    <div className="w-screen h-max">
      <div className=" relative top-[-15vh]">
        {loadingCarousel ? (
          <div className="mx-10">
            <ShimmerCarouselRow />
            <ShimmerCarouselRow />
            <ShimmerCarouselRow />
            <ShimmerCarouselRow />
          </div>
        ) : (
          <>
            <MoviesCarousel
              title={!languageData ? '' : languageData?.nowPlaying}
              movieCards={nowPlayingMovies}
            />
            <MoviesCarousel
              title={!languageData ? '' : languageData?.Popular}
              movieCards={popularMovies}
            />
            <MoviesCarousel
              title={!languageData ? '' : languageData?.topRated}
              movieCards={topRatedMovies}
            />
            <MoviesCarousel
              title={!languageData ? '' : languageData?.upcoming}
              movieCards={upcomingMovies}
            />
            {user?.saved.length > 0 && (
              <MoviesCarousel
                title={!languageData ? '' : languageData?.mylist}
                movieCards={user?.saved.map((e) => e.videoData)}
              />
            )}
            {user?.played.length > 0 && (
              <MoviesCarousel
                title={!languageData ? '' : languageData?.recenltyPlayed}
                movieCards={user?.played.map((e) => e.videoData)}
              />
            )}
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
        <SubHeading className="pl-[3.1%] mt-24 mb-8 font-bold text-sm" $fontSize={'2.0rem'}>
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
