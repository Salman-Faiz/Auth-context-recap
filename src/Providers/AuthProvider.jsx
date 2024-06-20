import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react";
import auth from "../firebase/firebase.config";


 export const AuthContext = createContext(null);
 const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
// / create user in firebase
    const createUser = (email,password)=>{
         return createUserWithEmailAndPassword(auth,email,password);

    }
    // log in?sign in user in firebase
    const signInUser = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const authInfo = { 
        user,
        createUser,
        signInUser


    };
    return ( <AuthContext.Provider value={authInfo}>

            {children}

        </AuthContext.Provider>
    );
};

export default AuthProvider;