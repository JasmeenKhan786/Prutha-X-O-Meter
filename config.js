import firebase from "firebase";
// require('@firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyAcHBYrzmvdGDMoz_Vaa03Mb3hSHkYrJUM",
  authDomain: "exercise-app-c0408.firebaseapp.com",
  projectId: "exercise-app-c0408",
  storageBucket: "exercise-app-c0408.appspot.com",
  messagingSenderId: "117970002899", 
  appId: "1:117970002899:web:5536bbe15c598b20358526"
};
if(!firebase.apps.length){
firebase.initializeApp(firebaseConfig)
}
export default firebase.firestore(); 