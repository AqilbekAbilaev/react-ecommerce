import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCdG-EuaoBB0Ev2JkjdEcEUW5Yk-g8pgTg",
  authDomain: "crown-ecommerce-e838e.firebaseapp.com",
  projectId: "crown-ecommerce-e838e",
  storageBucket: "crown-ecommerce-e838e.appspot.com",
  messagingSenderId: "301311727703",
  appId: "1:301311727703:web:7da435b5ce5efb20e6ab12",
};

const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    
    if (!userSnapshot.exists()) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName, email, createdAt
            })
        } catch (error) {
            console.log("Error creating the user, ", error.message);
        }
    }
    return userDocRef;
}