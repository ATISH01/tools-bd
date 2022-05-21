import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';



const firebaseConfig = {
  apiKey:process.env.REACT_APP_API_KEY,
  authDomain:process.env.REACT_APP_API_AUTH,
  projectId:process.env.REACT_APP_API_ID,
  storageBucket:process.env.REACT_APP_API_STORAGE,
  messagingSenderId:process.env.REACT_APP_API_SENDER_ID,
  appId:process.env.REACT_APP_API_APP_ID
};

console.log(firebaseConfig);

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;