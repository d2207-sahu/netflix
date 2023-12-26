import React from 'react'
import Header from '../../components/layouts/Header'
import useNowPlayingMovies from '../../hooks/useNowPlayingMovies'
import MainVideoContainerBackground from './MainVideoContainerBackground'

export const HomePage = () => {
  // useNowPlayingMovies();

  // Main COntainer
  // - movie background
  // - movie data
  // secondary conmtainer
  // contains all the cars and all the movie list

  const moviewDetail = {
    adult
      :
      false,
    backdrop_path
      :
      "/5a4JdoFwll5DRtKMe7JLuGQ9yJm.jpg",
    genre_ids
      :
      [18, 878, 28],
    id
      :
      695721,
    original_language
      :
      "en",
    original_title
      :
      "The Hunger Games: The Ballad of Songbirds & Snakes"
    , overview
      :
      "64 years before he becomes the tyrannical president of Panem, Coriolanus Snow sees a chance for a change in fortunes when he mentors Lucy Gray Baird, the female tribute from District 12."
    , popularity
      :
      3233.513
    , poster_path
      :
      "/mBaXZ95R2OxueZhvQbcEWy2DqyO.jpg"
    , release_date
      :
      "2023-11-15"
    , title
      :
      "The Hunger Games: The Ballad of Songbirds & Snakes"
    , video
      :
      false
    , vote_average
      :
      7.222
    , vote_count
      :
      1023
  }
  return (
    <div className='bg-black flex flex-col justify-center align-middle items-center h-[100vh] w-screen'>
      <Header />
      <MainVideoContainerBackground props={moviewDetail} />
    </div>
  )
}
