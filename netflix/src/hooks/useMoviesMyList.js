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
    if (user && user?.uid && user?.name)
      try {
        setPending(true);
        const savedCollection = collection(
          firestoreDB,
          `Accounts/${user?.uid}/Users/${user?.name}/saved`
        );
        let recenltyDocs = await getDocs(savedCollection);
        recenltyDocs = recenltyDocs.docs.map((e) => e.data());
        setPending(false);
        if (recenltyDocs.length > 0) {
          dispatch(updateSavedMovies(recenltyDocs));
        }
      } catch (e) {
        setPending(false);
        console.error(e);
      }
  };

  const saveMovieToMyList = async ({ videoData }) => {
    if (user && user?.uid && user?.name && videoData)
      try {
        setSavePending(true);
        const userSavedList = [...user.saved];
        console.log(user.saved, userSavedList);
        if (
          !(
            userSavedList.filter((e) => {
              return _.isEqual(e.videoData, videoData);
            }).length > 0
          )
        ) {
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
    if (user.saved.length == 0) getAllMoviesSavedtoMyList();
  }, [user?.uid]);

  return { saveMovieToMyList, user, savePending, pending, getAllMoviesSavedtoMyList };
};

export default useMoviesMyList;
