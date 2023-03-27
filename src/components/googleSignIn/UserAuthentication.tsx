import { useState, useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from '../../firebase/firebase';
import { doc, setDoc } from "firebase/firestore";
import SignIn from './SignIn';
import SignOut from './SignOut';

function UserAuthentication() {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

    const createUser = async (user: any) => {
        await setDoc(doc(db, "users", user.uid), {
            uid: user.uid,
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL
        })
    }

    // Checks to see if a user is logged in and updates the login/logout buttons.
    useEffect(() => {
        onAuthStateChanged(auth, (user: any) => {
            // setUserData({id: user.uid, displayName: user.displayName, email: user.email, photoURL: user.photoURL});
            if (user) {
                // User is signed in
                setIsAuthenticated(true);
                if (user.metadata.creationTime === user.metadata.lastSignInTime) {
                    // This is a new user, show welcome modal.
                    console.log("NEW USER");
                    console.log(user);
                    createUser(user);
                } else {
                    // This is an existing user.
                    console.log("EXISTING USER");
                }
            } else {
                // User is signed out
                setIsAuthenticated(false);
            }
        });
    }, [])

    return (
        <div>
            {isAuthenticated ? <SignOut /> : <SignIn />}
        </div>
    )
}

export default UserAuthentication;