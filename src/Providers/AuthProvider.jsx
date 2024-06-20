import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import { onAuthStateChanged } from "firebase/auth/cordova";


export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    // useState declared for holding userData
    const [user, setUser] = useState(null);

    // ANOTHER STATE FOR PREVENTING REDIRECT PAGE
    const [loading, setLoading] = useState(true)

    // / create user in firebase
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);

    }
    // log in?sign in user in firebase
    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    // signOut user
    const signOutUser = () => {
        setLoading(true);
        return signOut(auth)
    }

    // observe Auth state change.. observe user whether logged in or signOut
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('current value of the current user', currentUser);
            setUser(currentUser);
            setLoading(false);
            return () => {
                unSubscribe();
            }
        })
    }, [])

    
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