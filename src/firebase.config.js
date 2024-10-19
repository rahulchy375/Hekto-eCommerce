// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7iJobSi6-YRltipMegOhK8VPJL6Imwyo",
  authDomain: "hekto-ecommerce-c2f98.firebaseapp.com",
  projectId: "hekto-ecommerce-c2f98",
  storageBucket: "hekto-ecommerce-c2f98.appspot.com",
  messagingSenderId: "399704871849",
  appId: "1:399704871849:web:4baaab76752913a1276ab8",
  databaseURL: "https://hekto-ecommerce-c2f98-default-rtdb.asia-southeast1.firebasedatabase.app",
  
//this databaseURL is used for changing the location of this project. I have made a mistake during making this realtime database that was I set the location of database in Singapore when I set the location of project in USA. That's why I have to change the project location in Singapore. It should be remembered that both location have to same. Otherwise location have to be change like this.
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default firebaseConfig