import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCr2cV9DBkm9jdDA1RmYZBw5i-s7CJXCfM",
  authDomain: "jeanie-users.firebaseapp.com",
  projectId: "jeanie-users",
  storageBucket: "jeanie-users.appspot.com",
  messagingSenderId: "218410427582",
  appId: "1:218410427582:android:144877c3d0958fced6aaef",
};

const firebase = initializeApp(firebaseConfig);
export default firebase;
export const auth = getAuth(firebase);
