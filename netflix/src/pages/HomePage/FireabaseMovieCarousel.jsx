import React, { useMemo } from "react";
import MoviesCarousel from "../../components/MovieComponents/MovieCarousel";
import ShimmerCarouselRow from "../../components/Shimmer/ShimmerCarouselRow";
import useFirebaseMovieList from "../../hooks/useFirebaseMovieList";

const FirebaseMovieCarousel = ({ keyword, title }) => {
  // console.log(keyword)
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

export default FirebaseMovieCarousel