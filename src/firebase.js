import firebase from "firebase";

import "firebase/auth"; //auth
import "firebase/database"; //database can like sql , mongodb //firebase is no sql type
import "firebase/storage"; //storage ///images , videos , photos , pdf , fonts

const firebaseConfig = {
  apiKey: "AIzaSyAu1Ud8z_CeJe4Rpi7IfedjCEVuWU8vYuk",
  authDomain: "hotstar-27567.firebaseapp.com",
  databaseURL: "https://hotstar-27567.firebaseio.com",
  projectId: "hotstar-27567",
  storageBucket: "hotstar-27567.appspot.com",
  messagingSenderId: "922639432369",
  appId: "1:922639432369:web:fffc49f582f7bb79ddc090"
};

//initialize firebase and react application
firebase.initializeApp(firebaseConfig);

export default firebase;