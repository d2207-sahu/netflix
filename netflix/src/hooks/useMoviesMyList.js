import { addDoc, collection, getDocs, getFirestore } from 'firebase/firestore';
import { useDispatch, useSelector } from 'react-redux';
import useFirebase from './useFirebaseAuth';
import { addToSavedMovies, updateSavedMovies } from '../redux/slices/userSlice';
import { useEffect, useState } from 'react';
const _ = require('lodash');

const useMoviesMyList = () => {
  const user = useSelector((store) => store.user);
  const [pending, setPending] = useState(false);
  const [savePending, setSavePending] = useState(false);
  const dispatch = useDispatch();
  const { app } = useFirebase();
  const firestoreDB = getFirestore(app);

  const getAllMoviesSavedtoMyList = async () => {
    if (user)
      try {
        setPending(true);
        const savedCollection = collection(
          firestoreDB,
          `Accounts/${user?.uid}/Users/${user?.name}/saved`
        );
        const recenltyDocs = await getDocs(savedCollection);
        setPending(false);
        if (recenltyDocs.docs.length > 0) {
          dispatch(updateSavedMovies(recenltyDocs.docs.map((e) => e.data())));
        }
      } catch (e) {
        setPending(false);
        console.error(e);
      }
  };

  const saveMovieToMyList = async ({ videoData }) => {
    if (user)
      try {
        setSavePending(true);
        const userSavedList = [...(user.saved)];
        console.log(user.saved,userSavedList);
        if (!(userSavedList.filter((e)=>{ return _.isEqual(e.videoData, videoData)}).length > 0)) {
          setSavePending(true);
          const savedCollection = collection(
            firestoreDB,
            `Accounts/${user?.uid}/Users/${user?.name}/saved`
          );
          await addDoc(savedCollection, {
            videoData: videoData,
            timestamp: Date.now()
          });
          dispatch(addToSavedMovies(videoData));
        }
        setSavePending(false);
      } catch (e) {
        setSavePending(false);
        console.error(e);
      }
  };

  // This will only at the start of the hook, only if the saved is empty
  useEffect(() => {
    if (user.saved) getAllMoviesSavedtoMyList();
  }, []);
  
  return { saveMovieToMyList, user, savePending, pending, getAllMoviesSavedtoMyList };
};

export default useMoviesMyList;
