import {initializeApp} from "firebase/app"
import {getFirestore} from "firebase/firestore"
import {getAuth} from "firebase/auth"


const firebaseConfig = {
    apiKey: "AIzaSyBA7DJ9DPTxv4Yel_4eUCwplXKkU4e36UM",
    authDomain: "clone-270ae.firebaseapp.com",
    projectId: "clone-270ae",
    storageBucket: "clone-270ae.appspot.com",
    messagingSenderId: "507028767631",
    appId: "1:507028767631:web:109e3cca89ae5e73a101fa",
  };

  const app = initializeApp(firebaseConfig);
  
  const db = getFirestore(app);
  const auth = getAuth();


  export {db,auth} ;