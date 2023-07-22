// GoogleLoginButton.js
import React from 'react'
import 'firebase/auth'

const GoogleLoginButton = ({firebase}) => {
  const handleGoogleLogin = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    try {
      await firebase.auth().signInWithPopup(provider);
      // The user is now logged in. You can perform further actions here if needed.
    } catch (error) {
      console.error('Google login error:', error);
    }
  };
  return (
     <button onClick={handleGoogleLogin}>Login with Google</button>
  )
}

export default GoogleLoginButton
