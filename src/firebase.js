import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDJN90d1_5G02ZZ3_c9zRPfu5Odnt7RdM8",
    authDomain: "netflix-clone-e5f91.firebaseapp.com",
    projectId: "netflix-clone-e5f91",
    storageBucket: "netflix-clone-e5f91.appspot.com",
    messagingSenderId: "281037596385",
    appId: "1:281037596385:web:1c6ab2bc5507c5888df9a0"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;