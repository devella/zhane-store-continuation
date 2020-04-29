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

      export const auth = firebase.auth();
      export const firestore = firebase.firestore();

      const provider = new firebase.auth.GoogleAuthProvider();
      provider.setCustomParameters({ prompt: 'select_account' });
      export const signInWithGoogle = () => auth.signInWithPopup(provider);

      export default firebase;

