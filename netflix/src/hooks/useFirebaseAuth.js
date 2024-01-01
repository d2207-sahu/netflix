import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';
import {initializeApp} from 'firebase/app';
import {firebaseConfig} from '../config/firebase-config';

let app;

const useFirebase = () => {
  if (!app) {
    app = initializeApp(firebaseConfig);
  }
  const auth = getAuth();

  return {
    app,
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    updateProfile,
    signOut,
  };
};

export default useFirebase;
