import { addDoc, collection, getDocs, getFirestore } from 'firebase/firestore';
import { useDispatch, useSelector } from 'react-redux';
import useFirebase from './useFirebaseAuth';
import { addToPlayedMovies, updatePlayedMovies } from '../redux/slices/userSlice';
import { useEffect, useState } from 'react';
const _ = require('lodash');

const useMoviesRecentlyPlayed = () => {
  const played = useSelector((store) => store.user?.played);
  const [pending, setPending] = useState(false);
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const { app } = useFirebase();
  const firestoreDB = getFirestore(app);

  const getAllMoviesSavedtoRecenltyPlayed = async () => {
    if (user)
      try {
        setPending(true);
        const playedCollection = collection(
          firestoreDB,
          `Accounts/${user?.uid}/Users/${user?.name}/played`
        );
        const recenltyDocs = await getDocs(playedCollection);
        setPending(false);
        if (recenltyDocs.docs.length > 0) {
          dispatch(updatePlayedMovies(recenltyDocs.docs.map((e) => e.data())));
        }
      } catch (e) {
        setPending(false);
        console.error(e);
      }
  };

  const saveMovieToRecentlyPlayed = async (videoData) => {
    if (user && videoData)
      try {
        if (
          !(
            played.filter((e) => {
              return _.isEqual(e.videoData, videoData);
            }).length > 0
          )
        ) {
          const playedCollection = collection(
            firestoreDB,
            `Accounts/${user?.uid}/Users/${user?.name}/played`
          );
          await addDoc(playedCollection, {
            videoData: videoData,
            timestamp: Date.now()
          });
          dispatch(addToPlayedMovies(videoData));
        }
      } catch (e) {
        console.error(e);
      }
  };

  // This will only at the start of the hook, only if the saved is empty
  useEffect(() => {
    if (played) getAllMoviesSavedtoRecenltyPlayed();
  }, []);

  return { played, pending, getAllMoviesSavedtoRecenltyPlayed, saveMovieToRecentlyPlayed };
};

export default useMoviesRecentlyPlayed;
