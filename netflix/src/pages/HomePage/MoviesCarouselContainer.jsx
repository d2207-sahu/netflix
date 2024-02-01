import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import ShimmerCarouselRow from '../../components/Shimmer/ShimmerCarouselRow';
import useMoviesMyList from '../../hooks/useMoviesMyList';
import useMoviesRecentlyPlayed from '../../hooks/useMoviesRecentlyPlayed';
import MoviesCarousel from '../../components/MovieComponents/MovieCarousel';

const MoviesCarouselContainer = () => {
  const { browse } = useSelector(state => state.movies);

  // move these two specific components
  useMoviesRecentlyPlayed();
  const { user } = useMoviesMyList();
  /**
   * This useEffect is reloading the page when user.saved, user.played, or user.searched is updated.
   * Because this is needed as this is added dynamically when the user interacts.
  */
  useEffect(() => { }, [user?.saved, user?.played, user?.searched]);

  if (!browse) return <></>;

  return (
    <div className="w-screen h-min">
      <div className="relative top-0 sm:top-[-23rem]">
        {(!browse.carousel) ? (
          <div className="mx-10">
            {Array(5).map((carouselData) => <ShimmerCarouselRow key={carouselData.title} />)}
          </div>
        ) : (
          browse.carousel.map((carouselData) => {
            if (carouselData.keyword && carouselData.firebase_data) {
              const carouseMovieData = user && user[carouselData.keyword] && user[carouselData.keyword].map((e) => e.videoData);
              return (carouseMovieData.length > 0) && <MoviesCarousel
                key={carouselData.title}
                title={carouselData.title?.replace("${user}", user?.name)}
                movieCards={carouseMovieData}
              />;
            }
            return carouselData.ui_data && (
              <MoviesCarousel
                key={carouselData.title}
                title={carouselData.title}
                movieCards={carouselData.data}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default MoviesCarouselContainer;
