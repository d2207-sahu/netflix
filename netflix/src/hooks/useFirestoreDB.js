import {useDispatch, useSelector} from 'react-redux';
import {
  getFirestore,
  collection,
  getDocsFromServer,
  doc,
  setDoc,
  addDoc,
  serverTimestamp,
  getDocs,
} from 'firebase/firestore';
import {useEffect} from 'react';
import useFirebase from './useFirebaseAuth';
import {updateName, updateUsers} from '../redux/slices/userSlice';
import {useNavigate} from 'react-router-dom';
import {routingConfig} from '../router/routing-config';

const useFirestoreDB = () => {
  const {uid, users, name} = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const {app} = useFirebase();
  const firestoreDB = getFirestore(app);
  const navigate = useNavigate();

  // Shift this to a a hook, which will be called in headeer, and be present in every thing
  const getUsers = async () => {
    try {
      let AccountRef = collection(firestoreDB, `Accounts/${uid}/Users`);
      const usersSnapshot = await getDocsFromServer(AccountRef);
      const users = [];
      usersSnapshot.forEach((e) => users.push(e.data()));
      dispatch(updateUsers(users));
      return users;
    } catch (e) {
      console.error(e);
      return [];
    }
  };

  const selectNameAndNavigate = (userName) => {
    dispatch(updateName(userName));
    navigate(routingConfig.home);
    localStorage.setItem('name', userName);
  };

  const updateNameAtStart = () => {
    const name = localStorage.getItem('name');
    dispatch(updateName(name));
  };

  const addProfile = async (userName) => {
    try {
      let AccountRef = doc(firestoreDB, `Accounts/${uid}/Users`, userName);
      const users = await getUsers();
      const shouldNotAdd = users.find((e) => {
        return e['name'] === userName;
      });
      if (shouldNotAdd) return;
      await setDoc(AccountRef, {name: userName});
      selectNameAndNavigate(userName);
    } catch (e) {
      console.error(e);
    }
  };

  const addRecentlyPlayed = async (videoData) => {
    try {
      let AccountRef = collection(
        firestoreDB,
        `Accounts/${uid}/Users/${name}/played`,
      );
      await addDoc(AccountRef, {
        videoData: {
          id: videoData.id,
          backdrop_path: videoData.backdrop_path,
          original_title: videoData.original_title,
        },
        timestamp: serverTimestamp(),
      });
    } catch (e) {
      console.error(e);
    }
  };

  const addToSaved = async (videoData) => {
    try {
      let AccountRef = collection(
        firestoreDB,
        `Accounts/${uid}/Users/${name}/saved`,
      );
      await addDoc(AccountRef, {
        videoData: {
          id: videoData.id,
          backdrop_path: videoData.backdrop_path,
          original_title: videoData.original_title,
        },
        timestamp: serverTimestamp(),
      });
    } catch (e) {
      console.error(e);
    }
  };

  const addSearchedTag = async (searchTag) => {
    try {
      let AccountRef = collection(
        firestoreDB,
        `Accounts/${uid}/Users/${name}/searched`,
      );
      await addDoc(AccountRef, {
        searchTag: searchTag,
        timestamp: serverTimestamp(),
      });
    } catch (e) {
      console.error(e);
    }
  };

  const getRecentlyPlayed = async () => {
    try {
      let AccountRef = collection(
        firestoreDB,
        `Accounts/${uid}/Users/${name}/played`,
      );
      const recenltyDocs = await getDocs(AccountRef);
      recenltyDocs.forEach((e) => console.log(e.data()));
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    if (uid && !users) {
      getUsers();
      updateNameAtStart();
    }
  }, [uid]);

  return {
    addProfile,
    selectNameAndNavigate,
    addRecentlyPlayed,
    getRecentlyPlayed,
    addSearchedTag,
    addToSaved
  };
};

export default useFirestoreDB;
