import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import ShimmerCarouselRow from '../../components/Shimmer/ShimmerCarouselRow';
import MoviesCarousel from '../../components/MovieComponents/MovieCarousel';
import useFirebaseMovieList from '../../hooks/useFirebaseMovieList';

const MoviesCarouselContainer = () => {
  const { browse } = useSelector(state => state.movies);

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
              if (carouselData.keyword === 'searched') return <div key={carouselData.title}></div>
              return <FirebaseMovieCarousel
                key={carouselData.title}
                keyword={carouselData.keyword}
                title={carouselData.title} />
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

const FirebaseMovieCarousel = ({ keyword, title }) => {
  console.log(keyword)
  const { list, pending, user } = useFirebaseMovieList({ keyword: keyword});

  /**
   * This useEffect is reloading the page when user.saved, user.played, or user.searched is updated.
   * Because this is needed as this is added dynamically when the user interacts.
  */
  useEffect(() => { }, [list]);
  const carouseMovieData = user && user[keyword] && user[keyword].map((e) => e.videoData);
  return pending ? <ShimmerCarouselRow key={title} /> : (carouseMovieData.length > 0) && <MoviesCarousel
    key={title}
    title={title?.replace("${user}", user?.name)}
    movieCards={carouseMovieData}
  />;
}

export default MoviesCarouselContainer;
