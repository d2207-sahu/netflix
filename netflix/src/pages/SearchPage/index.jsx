import React from 'react';
import Header from '../../components/layouts/Header';
import useSearch from '../../hooks/useSearch';
import { Heading, NormalText, SubHeading } from '../../components/globals';
import MovieCard from '../../components/MovieCard';
import GridContainer from '../../components/GridContainer';
import { useLanguage } from '../../context/LanguageContext';
import { SliderContainer } from '../../components/globals/SliderContainer';
import { Slider } from '../../components/globals/Slider';
import MovieCardComponent from '../../components/MovieCard';
import { useSelector } from 'react-redux';
import Footer from '../../components/layouts/Footer';

const SearchPage = () => {
  const { languageData } = useLanguage();
  const [pending, searchResultData, searchReduxText] = useSearch();
  const { user } = useSelector(store => store.user)
  const noResultComponent = <div>
    <NormalText>
      {!languageData ? '' : languageData?.emptySearchText.replace("{}", `"${searchReduxText}"`)}
    </NormalText>
  </div>;
  return (
    <div className='flex flex-col items-start justify-center bg-black'>
      <Header />
      {/*TODO change the Loading handle UI. */}
      {pending ? (
        <div
          className='w-screen px-32 pt-16 '>
          <Heading>
            Loading..
          </Heading>
        </div>) : searchResultData ?
        <div>
          <SliderContainer className='mx-[4%] mt-[10rem] mb-[2rem] hidden sm:flex'>
            <Slider >
              {user?.searched?.map((movieDetail) => (
                <MovieCardComponent key={movieDetail?.videoData.id} movieDetail={movieDetail.videoData} />
              ))}
            </Slider>
          </SliderContainer>
          <div className='mx-[4%] items-start mt-[10rem] mb-[2rem] flex justify-start'>
            <SubHeading>{`Search Results for ${searchReduxText}`}
            </SubHeading>
          </div>
          <GridContainer>
            {searchResultData
              .filter((data) => data.backdrop_path !== null).
              map((movieData) =>
                <MovieCard
                  search={true}
                  key={movieData.id}
                  movieDetail={movieData} />)}
          </GridContainer>
        </div>
        : noResultComponent}
        <Footer />
    </div>
  );
};

export default SearchPage;
