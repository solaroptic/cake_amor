import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
} from "@firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBUDVfyudfvrHX6wP-gYAGab4UdffquLP0",
  authDomain: "cakeamor17.firebaseapp.com",
  projectId: "cakeamor17",
  storageBucket: "cakeamor17.appspot.com",
  messagingSenderId: "283677575604",
  appId: "1:283677575604:web:6dfe447c3f187d2b6f8ae1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

// new sign up
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};
// new sign up
export const signInAuthWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

// sign out out out//////////////////////////////////////////
export const signOutUser = async () => await signOut(auth);

// auth Listener listener listener listener
// this runs function when auth state changes
export const authChangeListener = (callback) =>
  onAuthStateChanged(auth, callback);

// create doc from auth
export const createDocFromAuth = async (userAuth, additionalInfo) => {
  // to protect
  if (!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);
  // this is a var for a reference to a specific user (userAuth passed in/userAuth.id readable)
  // args = database, collection and some kind of identifier for each user, like Greg
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    // special method returned with getDoc obj, ( here, userSnapshot)
    const { displayName, email } = userAuth;
    // displayName and email are fields that came with user obj, like uid
    const timeStamp = new Date();
    // June 5, 2023 at 4:37:13PM UTC-5

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        timeStamp,
        ...additionalInfo,
        // display name if new user created with password because display will show null in fb, if not
      });
    } catch (error) {
      console.log("error creating user", error.message);
      alert("Sorry, error creating user, try again or contact us by email.");
    }
  }
  return userDocRef;
  // This will return us the user to work with ; they must already exist
};
// /////////////////////////////////////////////////////
// /////////////////////////////////////////////////////
// /////////////////////////////////////////////////////
// function for sending bulk SHOPDATA to the fb database
export const addCollectionFunction = async (collectionKey, dataToAdd) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);
  dataToAdd.forEach((obj) => {
    const docRef = doc(collectionRef, obj.title);
    // above obj.title always needs to be in lowercase
    batch.set(docRef, obj);
  });
  await batch.commit();
};
