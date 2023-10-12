import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/Firebase.config'
import {  GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth";


const auth = getAuth(app)
export const AuthContext = createContext(null);
const provider = new GoogleAuthProvider();
const gitprovider = new GithubAuthProvider();

const ContextProvider = ({children}) => {

    const [user,setUser] = useState('');
    const [loading,setloading] = useState(true);

    //createUser
    const createUser = (email,password) =>{
        setloading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //Sign In
    const userSignIn = (email,password) =>{
        setloading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

     //google Login

   const google = () =>{
    setloading(true);
    return signInWithPopup(auth, provider)
  }
     //google Login

   const github= () =>{
    setloading(true);
    return signInWithPopup(auth, gitprovider)
  }

  //Profile update

//   const upProfile = () =>{
//        return updateProfile(auth.user)
//   }

  

    //sign Out

    const userSignOut = () =>{
        setloading(true);
        return signOut(auth);
    }

    //observer

    useEffect(()=>{
        const unsubscribe =  onAuthStateChanged(auth,currentUser=>{
            
                console.log('user in the auth state change',currentUser);
                setUser(currentUser);
                setloading(false);
            
        });
        return () =>{
            unsubscribe();
        }
    },[])



    const authInfo = {user,createUser,userSignIn,google,github,userSignOut,loading};
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default ContextProvider;