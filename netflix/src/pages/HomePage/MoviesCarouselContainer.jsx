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
  useEffect(() => {}, [user?.saved, user?.played, user?.searched]);

  return (
    <div className="w-screen h-min">
      <div className="relative top-0 sm:top-[-23rem]">
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
          </>
        )}
      </div>
    </div>
  );
};

export default MoviesCarouselContainer;
