import {useDispatch, useSelector} from 'react-redux';
import {baseFetchAPI} from '../service/api.service';
import {useEffect, useState} from 'react';
import {SEARCH_API_URL} from '../config/constants';
import {updateSearchResultData} from '../redux/slices/searchSlice';
import useFirestoreDB from './useFirestoreDB';

const useSearch = () => {
  const dispatch = useDispatch();
  const {addSearchedTag} = useFirestoreDB();
  const {searchReduxText, searchResultData} = useSelector(
    (store) => store.search,
  );
  const [pending, setPending] = useState(false);

  const callSearchAPI = async (page) =>
    await baseFetchAPI(
      'GET',
      SEARCH_API_URL + `?query=${searchReduxText}&page=${page}`,
      null,
      (data) => {
        console.log(data.results)
        return data.results;
      },
      (searchError) => {
        //TODO Handle this correctly
        console.error(searchError);
        return [];
      },
    );

  // Asynchronous function, i.e kept outside
  const searchAPI = async () => {
    const result1 = await callSearchAPI(1);
    const result2 = await callSearchAPI(2);
    dispatch(updateSearchResultData([...result1, ...result2]));
    setPending(false);
  };

  useEffect(() => {
    if (searchReduxText && searchReduxText.length >= 3) {
      setPending(true);
      searchAPI();
      addSearchedTag(searchReduxText);
    }
  }, [searchReduxText]);

  return [pending, searchResultData, searchReduxText];
};

export default useSearch;
