/* eslint-disable react-refresh/only-export-components */
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.init";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider()

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);


  const createUser = (email, password) => {
    setLoading(true); // Set loading to true when starting the user creation process
    // This will help to show a loading state in the UI if needed
    // Logic to create a new user
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    setLoading(true); // Set loading to true when starting the sign-in process
    // Logic to sign in an existing user
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
  }

  const updateUser = (name, photoURL) => {
    setLoading(true); // Set loading to true when starting the user update process
    // Logic to update the user's profile information
    return updateProfile(auth.currentUser, { displayName: name, photoURL });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("User is signed in:", currentUser);
      setUser(currentUser); // Update the user state with the current user
        setLoading(false); // Set loading to false after checking the authentication state
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  // Monitor authentication state changes
  // This will log the user object if a user is signed in, or null if no user is signed in
  // onAuthStateChanged(auth, (currentUser) => {
  //     if (currentUser) {
  //         console.log('User is signed in:', currentUser);
  //         setUser(currentUser); // Update the user state with the current user
  //     } else {
  //         console.log('No user is signed in');
  //         setUser(null); // Set user state to null if no user is signed in
  //     }
  // });

  const signOutUser = () => {
    return signOut(auth);
  };

  const authInfo = {
    createUser,
    signInUser,
    user,
    signOutUser,
    updateUser,
    loading,
    signInWithGoogle,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}
