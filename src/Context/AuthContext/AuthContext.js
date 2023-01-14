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
  const [loading, setLoading] = useState(true);
  const [updateWishList, setUpdateWishList] = useState(false);

  // sign up new user
  const signUpNewUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //log in user
  const logInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // update user name
  const updateName = (name) => {
    setLoading(true);
    return updateProfile(auth.currentUser, { displayName: name });
  };

  // reset user Password
  const userPasswordReset = (email) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email);
  };

  // google login
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // github Login
  const gitbutLogIn = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setLoading(false);
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  // sign out user
  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        toast.success("Successfully Log Out");
        localStorage.removeItem("fancy-nomad");
        fetch(`https://fancy-nomad-server.vercel.app/users${user?.email}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {});
      })
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
    loading,
    updateWishList,
    setUpdateWishList,
  };

  return (
    <UserAuthContext.Provider value={userInfo}>
      {children}
    </UserAuthContext.Provider>
  );
};

export default AuthContext;
