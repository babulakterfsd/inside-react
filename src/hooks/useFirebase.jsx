/* eslint-disable prettier/prettier */
import {
    getAuth,
    GoogleAuthProvider, onAuthStateChanged, signInWithPopup,
    signOut
} from 'firebase/auth';
import { useEffect, useState } from 'react';
import initializeAuthentication from '../firebase/firebase.init';

initializeAuthentication();

const auth = getAuth();

const useFirebase = () => {
    const [user, setUser] = useState(null);

    const googleProvider = new GoogleAuthProvider();

    // sign in with popup provided by google
    const signInUsingGoogle = () => signInWithPopup(auth, googleProvider);

    // logsout the user
    const logOut = () => {
        signOut(auth).then(() => {
            setUser(null);
        });
    };

      const handleGoogleLogin =  () => {
        signInUsingGoogle()
            .then((result) => {
                setUser(result?.user?.email);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    // firebase observer if user is logged in or not, checking user state
    useEffect(() => {
        const unSubscribed = onAuthStateChanged(auth, (myUser) => {
            if (myUser) {
                setUser(myUser?.email);
            } else {
                setUser(null);
            }
        });

        return () => unSubscribed;
    }, []);

    return {
        handleGoogleLogin,
        user,
        logOut,
    };
};

export default useFirebase;
