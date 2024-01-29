import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Header from '../../components/layouts/Header'
import MainVideoContainerBackground from './HomeContainers/MainVideoContainerBackground'
import MoviesCarouselContainer from './MoviesCarouselContainer'
import BottomNavBar from '../../components/layouts/BottomNavBar'
import Footer from '../../components/layouts/Footer'
import MovieInfoModal from '../../modals/MovieInfoModal'
import MovieModal from '../../modals/MovieModal'
import { browseJSON } from '../../constants/browse'
import { addBrowseData } from '../../redux/slices/movieSlice'

const HomePage = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    setTimeout(() => dispatch(addBrowseData(browseJSON.data)), 1000)
  }, [])
  return (<>
    <MovieModal />
    <MovieInfoModal />
    <Header />
    <MainVideoContainerBackground />
    <MoviesCarouselContainer />
    <BottomNavBar />
    <Footer />
  </>
  )
}
export default HomePage