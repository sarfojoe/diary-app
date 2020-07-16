import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDo9NHsGcWd_cSLlMqqO0KeqrW3zvVcalM",
    authDomain: "diary-app-b8e6a.firebaseapp.com",
    databaseURL: "https://diary-app-b8e6a.firebaseio.com",
    projectId: "diary-app-b8e6a",
    storageBucket: "diary-app-b8e6a.appspot.com",
    messagingSenderId: "483702737246",
    appId: "1:483702737246:web:8c0e9c2b62e703c522a7cf",
    measurementId: "G-D3J488WVT4"

});

const db = firebaseApp.firestore();

export default { db };