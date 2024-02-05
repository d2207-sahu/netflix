import React from 'react';
import { useSelector } from 'react-redux';
import ShimmerCarouselRow from '../../components/Shimmer/ShimmerCarouselRow';
import MoviesCarousel from '../../components/MovieComponents/MovieCarousel';
import Footer from '../../components/layouts/Footer';
import FirebaseMovieCarousel from './FireabaseMovieCarousel';


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

export default MoviesCarouselContainer;
