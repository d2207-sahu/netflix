import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLanguage } from '../../context/LanguageContext';
import ShimmerCarouselRow from '../../components/Shimmer/ShimmerCarouselRow';
import useMoviesMyList from '../../hooks/useMoviesMyList';
import useMoviesRecentlyPlayed from '../../hooks/useMoviesRecentlyPlayed';
import MoviesCarousel from '../../components/MovieComponents/MovieCarousel';

const MoviesCarouselContainer = () => {
  const { languageData } = useLanguage();
  /**
   * Reading movies data stored in the redux store
   */
  const { nowPlayingMovies, popularMovies, topRatedMovies, upcomingMovies, loadingCarousel } =
    useSelector((store) => store.movies);

  useMoviesRecentlyPlayed();

  const { user } = useMoviesMyList();

  /**
   * This useEffect is reloading the page when user.saved, user.played, or user.searched is updated.
   * Because this is needed as this is added dynamically when the user interacts.
   */
  useEffect(() => { }, [user?.saved, user?.played, user?.searched]);

  const movieCarouselsData = [
    { show: nowPlayingMovies, title: !languageData ? '' : languageData?.nowPlaying, movieData: nowPlayingMovies },
    { show: user?.played.length > 0, title: !languageData ? '' : languageData?.recentlyPlayedTitle + user?.name, movieData: user?.played.map((e) => e.videoData) },
    { show: popularMovies, title: !languageData ? '' : languageData?.Popular, movieData: popularMovies },
    { show: topRatedMovies, title: !languageData ? '' : languageData?.topRated, movieData: topRatedMovies },
    { show: upcomingMovies, title: !languageData ? '' : languageData?.upcoming, movieData: upcomingMovies },
    { show: user?.saved.length > 0, title: !languageData ? '' : languageData?.mylist, movieData: user?.saved.map((e) => e.videoData) },
  ];

  return (
    <div className="w-screen h-min">
      <div className="relative top-0 sm:top-[-23rem]">
        {loadingCarousel ? (
          <div className="mx-10">
            {movieCarouselsData.map((carouselData) => <ShimmerCarouselRow key={carouselData.title} />)}
          </div>
        ) : (
          movieCarouselsData.map((carouselData) => {
            return carouselData.show && (
              <MoviesCarousel
                title={carouselData.title}
                movieCards={carouselData.movieData}
              />
            )
          })
        )}
      </div>
    </div>
  );
};

export default MoviesCarouselContainer;
