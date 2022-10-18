import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsnUCCSkL7SuCmjzVa87prSnAmG-C9S4c",
  authDomain: "crwn-clothin-db-95946.firebaseapp.com",
  projectId: "crwn-clothin-db-95946",
  storageBucket: "crwn-clothin-db-95946.appspot.com",
  messagingSenderId: "160550322904",
  appId: "1:160550322904:web:0f73b7e1b1df0668d50dad"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  console.log(userAuth);
};

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
