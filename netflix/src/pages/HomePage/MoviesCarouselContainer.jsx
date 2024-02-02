import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import ShimmerCarouselRow from '../../components/Shimmer/ShimmerCarouselRow';
import MoviesCarousel from '../../components/MovieComponents/MovieCarousel';
import useFirebaseMovieList from '../../hooks/useFirebaseMovieList';
import Footer from '../../components/layouts/Footer';


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
                key={carouselData.keyword}
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
        <Footer />
      </div>
    </div>
  );
};

const FirebaseMovieCarousel = ({ keyword, title }) => {
  console.log(keyword)
  const { pending, user } = useFirebaseMovieList({ keyword: keyword });

  /**
   * This useMemo is recalculating the result when user.saved, user.played, or user.searched is updated.
   * Because this is needed as this is added dynamically when the user interacts.
  */
  const carouseMovieData = useMemo(() => user && user[keyword] && user[keyword].map((e) => e.videoData), [user[keyword]]);
  return pending ?
    <ShimmerCarouselRow key={title} /> :
    (carouseMovieData.length > 0) &&
    <MoviesCarousel
      key={title}
      title={title?.replace("${user}", user?.name)}
      movieCards={carouseMovieData}
    />;
}

export default MoviesCarouselContainer;
