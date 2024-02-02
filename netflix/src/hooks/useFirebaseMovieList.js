import useFirebase from './useFirebaseAuth';
import { addDoc, collection, getDocs, getFirestore } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMoviesData, updateMoviesData } from '../redux/slices/userSlice';

const useFirebaseMovieList = ({ keyword }) => {
  const { app } = useFirebase();
  const firestoreDB = getFirestore(app);
  const [pending, setPending] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const list = user[keyword];

  /**
   * Retrieves the list of movies from the Firestore database and updates the state.
   * @async
   * @function
   * @returns {Promise<void>} A Promise that resolves once the movie list is updated.
   */
  const addMovieToList = async () => {
    console.log(addMovieToList)
    if (user && user?.uid && user?.name)
      try {
        setPending(true);
        const listCollection = collection(
          firestoreDB,
          `Accounts/${user?.uid}/Users/${user?.name}/${keyword}`
        );
        const listDocs = await getDocs(listCollection);
        setPending(false);
        if (listDocs.docs.length > 0) {
          dispatch(updateMoviesData({ movieList: listDocs.docs.map((e) => e.data()), keyword }));
        }
      } catch (e) {
        setPending(false);
        console.error(e);
      }
  };

  /**
   * Saves a movie to the Firestore database and updates the state.
   * @async
   * @function
   * @param {Object} videoData - The data of the movie to be saved.
   * @returns {Promise<void>} A Promise that resolves once the movie is saved and state is updated.
   */
  const saveMovieToList = async (videoData) => {
    if (user && user?.uid && user?.name && videoData)
      try {
        if (
          !(
            list.filter((e) => {
              return e.videoData.id === videoData.id;
            }).length > 0
          )
        ) {
          const listCollection = collection(
            firestoreDB,
            `Accounts/${user?.uid}/Users/${user?.name}/${keyword}`
          );
          await addDoc(listCollection, {
            videoData: videoData,
            timestamp: Date.now()
          });
          dispatch(addMoviesData({ movie: videoData, keyword }));
        }
      } catch (e) {
        console.error(e);
      }
  };

  // This will only at the start of the hook, only if the saved is empty
  useEffect(() => {
    console.log('HELLO', keyword);
    if (list?.length == 0) {
      console.log('HELLO`1', keyword);
      addMovieToList();
    }
    console.log(user)
  }, [user]);

  return { list, pending, saveMovieToList, user };
};

export default useFirebaseMovieList;
