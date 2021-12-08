
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBCfHQaE-jPtnn8GgRks-DHI_szlrJOUXw",
  authDomain: "booksapp-66a49.firebaseapp.com",
  projectId: "booksapp-66a49",
  storageBucket: "booksapp-66a49.appspot.com",
  messagingSenderId: "559885771441",
  appId: "1:559885771441:web:0d024d1fe1e672f806b890",
  measurementId: "${config.measurementId}"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);