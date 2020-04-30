import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    
        apiKey: "AIzaSyAPdhmzkO6ufff3LRK7I6XO7HtlKstr42E",
        authDomain: "zhane-db.firebaseapp.com",
        databaseURL: "https://zhane-db.firebaseio.com",
        projectId: "zhane-db",
        storageBucket: "zhane-db.appspot.com",
        messagingSenderId: "215384147448",
        appId: "1:215384147448:web:8b3dcaad2a732ceb16820d",
        measurementId: "G-Z10SJS05MW"
      };

      firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

