import React, { createContext, useEffect, useState } from "react";
import app from "../../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import toast from "react-hot-toast";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

export const UserAuthContext = createContext();

const AuthContext = ({ children }) => {
  const [user, setUser] = useState(null);

  // sign up new user
  const signUpNewUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //log in user
  const logInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // update user name
  const updateName = (name) => {
    return updateProfile(auth.currentUser, { displayName: name });
  };

  // reset user Password
  const userPasswordReset = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  // google login
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // github Login
  const gitbutLogIn = () => {
    return signInWithPopup(auth, githubProvider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  // sign out user
  const userSignOut = () => {
    signOut(auth)
      .then(() => toast.success("Successfully Log Out"))
      .catch((error) => console.log(error.messages));
  };

  const userInfo = {
    user,
    signUpNewUser,
    logInUser,
    userSignOut,
    updateName,
    userPasswordReset,
    googleLogin,
    gitbutLogIn,
  };

  return (
    <UserAuthContext.Provider value={userInfo}>
      {children}
    </UserAuthContext.Provider>
  );
};

export default AuthContext;
