import { useDispatch, useSelector } from 'react-redux';
import { basePublicFetchAPI } from '../service/api.service';
import { useEffect, useState } from 'react';
import { updateSearchResultData } from '../redux/slices/searchSlice';
import useFirestoreDB from './useFirestoreDB';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { addToSearchedMovies } from '../redux/slices/userSlice';

const useSearch = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const { addSearchedTag, app } = useFirestoreDB();
  const firestoreDB = getFirestore(app);
  const { searchReduxText, searchResultData } = useSelector((store) => store.search);
  const [pending, setPending] = useState(false);

  const callSearchAPI = async (page) => {
    return await basePublicFetchAPI(
      'GET',
      `/search?query=${searchReduxText}&page=${page}`,
      null,
      (data) => {
        return data.searchResults;
      },
      (searchError) => {
        //TODO Handle this correctly
        console.error(searchError);
        return [];
      }
    );
  };

  const saveSearchTextToSearchedFirestoreDB = async (searchedText) => {
    if (user && user?.uid && user?.name && searchedText)
      try {
        if (
          !(
            user?.searched.filter((e) => {
              return searchedText === e;
            }).length > 0
          )
        ) {
          const playedCollection = collection(
            firestoreDB,
            `Accounts/${user?.uid}/Users/${user?.name}/searched`
          );
          await addDoc(playedCollection, {
            searchedText: searchedText,
            timestamp: Date.now()
          });
          dispatch(addToSearchedMovies(searchedText));
        }
      } catch (e) {
        console.error(e);
      }
  };

  // Asynchronous function, i.e kept outside
  const searchAPI = async () => {
    let searchResults = await Promise.allSettled([await callSearchAPI(1), await callSearchAPI(2),await callSearchAPI(3)]);
    const combinedResult = searchResults.reduce((accumulator, currentResult) => {
      if (currentResult.status === 'fulfilled') {
        accumulator = [...accumulator, ...currentResult.value];
      }
      return accumulator;
    }, []);
    dispatch(updateSearchResultData([...combinedResult]));
    saveSearchTextToSearchedFirestoreDB(searchReduxText);
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
