import { useState } from "react";
import firebaseAuthentication from "../firebase/Firebase.init";
import { signInWithPopup, getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
firebaseAuthentication()
const useFirebase = () => {
    const auth = getAuth();
    const [user, setUser] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const googleSignIn = () => {
        return signInWithPopup();
    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
            setIsLoading(false)
        });
    }, []);

    const logOut = () => {
        return signOut();
    }
    return {
        user,
        setUser,
        googleSignIn,
        logOut,
        isLoading,
        setIsLoading
    }
};

export default useFirebase;