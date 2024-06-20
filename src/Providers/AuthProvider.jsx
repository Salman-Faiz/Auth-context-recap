import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import { onAuthStateChanged } from "firebase/auth/cordova";


export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    // / create user in firebase
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);

    }
    // log in?sign in user in firebase
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    // signOut user
    const signOutUser = () => {
        return signOut(auth)
    }

    // observe Auth state change.. observe user whether logged in or signOut
    useEffect(()=>{
        onAuthStateChanged(auth, currentUser =>{
            if(currentUser){
              console.log('current user value :',currentUser);
            setUser(currentUser);  
            }
            else {
                console.log(' User is signed out')
                
              }
        })
    },[])
    const authInfo = {
        user,
        createUser,
        signInUser,
        signOut


    };
    return (<AuthContext.Provider value={authInfo}>

        {children}

    </AuthContext.Provider>
    );
};

export default AuthProvider;