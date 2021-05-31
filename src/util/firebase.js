import firebase from 'firebase';

const firebaseApp = firebase.initializeApp(
    {
        apiKey: "AIzaSyD9mBvYFhZ4pCmbgYJK4mrVougcmwqgGaw",
        authDomain: "mycode-b4ff1.firebaseapp.com",
        projectId: "mycode-b4ff1",
        storageBucket: "mycode-b4ff1.appspot.com",
        messagingSenderId: "928656508355",
        appId: "1:928656508355:web:019e119adeaf6b3d3d6976",
        measurementId: "G-VFBY725SKZ"
    }
);
  // Initialize Firebase
  const db = firebaseApp.firestore();

  export default db;