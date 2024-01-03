import React from 'react';
import Header from '../../components/layouts/Header';
import useSearch from '../../hooks/useSearch';
import { Heading, NormalText, SubHeading } from '../../components/globals';
import MovieCard from '../../components/MovieCard';
import SearchGridContainer from '../../components/SearchGridContainer';
import { useLanguage } from '../../context/LanguageContext';

const SearchPage = () => {
  const { languageData } = useLanguage();
  const [pending, searchResultData, searchReduxText] = useSearch();

  const noResultComponent = <div>
    <NormalText>
      {!languageData ? '' : languageData?.emptySearchText.replace("{}", `"${searchReduxText}"`)}
    </NormalText>
  </div>;

  return (
    <div className='bg-black flex flex-col justify-center items-center'>
      <Header />
      {/*TODO change the Loading handle UI. */}
      {pending ? (
        <div
          className=''>
          <Heading>
            Loading..
          </Heading>
        </div>) : searchResultData ?
        <div>
          <div className='mx-[4%] mb-4 flex justify-start pt-[10%]'>
            <SubHeading>Search Results for {searchReduxText}
            </SubHeading>
          </div>
          <SearchGridContainer>
            {searchResultData
              .filter((data) => data.backdrop_path !== null).
              map((movieData) =>
                <MovieCard
                  search={true}
                  key={movieData.id}
                  movieDetail={movieData} />)}
          </SearchGridContainer>
        </div>
        : noResultComponent}
    </div>
  );
};

export default SearchPage;
