import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import ShimmerCarouselRow from '../../components/Shimmer/ShimmerCarouselRow';
import useMoviesMyList from '../../hooks/useMoviesMyList';
import useMoviesRecentlyPlayed from '../../hooks/useMoviesRecentlyPlayed';
import MoviesCarousel from '../../components/MovieComponents/MovieCarousel';

const MoviesCarouselContainer = () => {
  const { carousel } = useSelector(state => state.movies?.browse);

  // move these two specific components
  useMoviesRecentlyPlayed();
  const { user } = useMoviesMyList();
  /**
   * This useEffect is reloading the page when user.saved, user.played, or user.searched is updated.
   * Because this is needed as this is added dynamically when the user interacts.
  */
  useEffect(() => { }, [user?.saved, user?.played, user?.searched]);

  // const movieCarouselsData = [
  //   { show: nowPlayingMovies, title: !languageData ? '' : languageData?.nowPlaying, movieData: nowPlayingMovies },
  //   { show: user?.played.length > 0, title: !languageData ? '' : languageData?.recentlyPlayedTitle + user?.name, movieData: user?.played.map((e) => e.videoData) },
  //   { show: popularMovies, title: !languageData ? '' : languageData?.Popular, movieData: popularMovies },
  //   { show: topRatedMovies, title: !languageData ? '' : languageData?.topRated, movieData: topRatedMovies },
  //   { show: upcomingMovies, title: !languageData ? '' : languageData?.upcoming, movieData: upcomingMovies },
  //   { show: user?.saved.length > 0, title: !languageData ? '' : languageData?.mylist, movieData: user?.saved.map((e) => e.videoData) },
  // ];
  
  return (
    <div className="w-screen h-min">
      <div className="relative top-0 sm:top-[-23rem]">
        {(!carousel) ? (
          <div className="mx-10">
            {Array(5).map((carouselData) => <ShimmerCarouselRow key={carouselData.title} />)}
          </div>
        ) : (
          carousel.map((carouselData) => {
            return carouselData.ui_data && (
              <MoviesCarousel
                title={carouselData.title}
                movieCards={carouselData.data.results}
              />
            )
          })
        )}
      </div>
    </div>
  );
};

export default MoviesCarouselContainer;
