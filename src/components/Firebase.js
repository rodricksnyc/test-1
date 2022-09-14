
import Firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import "firebase/compat/database";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBKI05JE-gn_DptXTd3nyP6d6WDtRR7mK0",
  authDomain: "dev-checklist-68d84.firebaseapp.com",
  databaseURL: "https://dev-checklist-68d84-default-rtdb.firebaseio.com",
  projectId: "dev-checklist-68d84",
  storageBucket: "dev-checklist-68d84.appspot.com",
  messagingSenderId: "371448344789",
  appId: "1:371448344789:web:aac49148a6c42dfd8cb25c",
  measurementId: "G-2HR7ZMJETX"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
// db.collection('todos').getDocs();
// const todosCol = collection(db, 'todos');
// const snapshot = await getDocs(todosCol)
//

// async function getCities(db) {
//   const citiesCol = collection(db, 'cities');
//   const citySnapshot = await getDocs(citiesCol);
//   const cityList = citySnapshot.docs.map(doc => doc.data());
//   return cityList;
// }


const firebase = Firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { firebase, db };
