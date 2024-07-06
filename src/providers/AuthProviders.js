import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider, GithubAuthProvider } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.init';


export const AuthContext = createContext(null);
const auth = getAuth(app)
const googleProviders = new GoogleAuthProvider();
const githubProviders = new GithubAuthProvider();

const AuthProviders = ({children}) => {
   const [user,setUser]=useState(null)
   const[loading,setLoading]=useState(true)


   const signIn =(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
   }
   const signInwithGithub=()=>{
    return signInWithPopup(auth,githubProviders)
   }

   const signInWithGoogle =()=>{
    return signInWithPopup(auth,googleProviders)
   }
   const createUser=(email,password) =>{
    return createUserWithEmailAndPassword(auth,email,password);
   }

   useEffect (()=>{
    const unsubscribe = onAuthStateChanged(auth,currentUser =>{
        setUser(currentUser)
        setLoading(false)
    });
    return ()=>{
        unsubscribe();
    }
   })
   const handleSignOut =()=>{
    signOut(auth)
    .then(result =>{
        setUser(null)
    })
    .catch(error =>{
        console.log(error)
    })
}

   const authInfo={
    user,
    signInwithGithub,
    createUser,
    loading,
    signInWithGoogle,
    signIn,
    handleSignOut
   }
    return (
       <AuthContext.Provider value={authInfo}>
        {children}
       </AuthContext.Provider>
    );
};


export default AuthProviders;