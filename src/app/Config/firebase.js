import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAh9ATGEvl6iIGMtPSpt58G08_e9jXYdLo",
  authDomain: "crm-feb8e.firebaseapp.com",
  projectId: "crm-feb8e",
  storageBucket: "crm-feb8e.appspot.com",
  messagingSenderId: "160392836731",
  appId: "1:160392836731:web:ec1e497e09942d016614de"
  };

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);