import React, { useEffect } from 'react'
import GoogleLoginButton from './GoogleLoginButton'
import DiplomaApp from './DiplomaApp'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBwCEgmUYet4HetErWJAmC2wtg7l-mU_34",
  authDomain: "idtech-diploma-assistant.firebaseapp.com",
  projectId: "idtech-diploma-assistant",
  storageBucket: "idtech-diploma-assistant.appspot.com",
  messagingSenderId: "802485775855",
  appId: "1:802485775855:web:f097f45f12c2e76dbe1a1a",
  measurementId: "G-1QY9TDHLBX"
};



const App = () => {
  const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

  return (
    <div>
      <h1>Login if ur cool</h1>
      <GoogleLoginButton firebase={initializeApp}/>
      <DiplomaApp/>
    </div>
  )
}

export default App