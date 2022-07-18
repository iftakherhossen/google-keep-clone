import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
	apiKey: "AIzaSyBqe6WddCMcSe6OAm6s5lpZuqX-3I9orgQ",
     authDomain: "keep-clone-by-iftakher.firebaseapp.com",
     databaseURL: "https://keep-clone-by-iftakher-default-rtdb.asia-southeast1.firebasedatabase.app",
     projectId: "keep-clone-by-iftakher",
     storageBucket: "keep-clone-by-iftakher.appspot.com",
     messagingSenderId: "853416489126",
     appId: "1:853416489126:web:d63486a0dcbb29ca5ec467",
     measurementId: "G-T75PNFHNYP"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Realtime Database and get a reference to the service
const realtimeDB = getDatabase(app);

export default realtimeDB;