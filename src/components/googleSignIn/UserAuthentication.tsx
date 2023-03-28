import { useState, useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from '../../firebase/firebase';
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import SignIn from './SignIn';
import SignOut from './SignOut';

function UserAuthentication() {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

    const checkIfNewUser = (user: any) => {
        if (user.metadata.creationTime === user.metadata.lastSignInTime) {
            // This is a new user, show welcome modal.
            console.log("NEW USER");
            console.log(user);

            // Initializes firestore db with user information
            createUser(user);
        } else {
            // This is an existing user.
            console.log("EXISTING USER");
        }
    }

    const createUser = async (user: any) => {
        const docRef = doc(db, "Users", user.uid);

        await setDoc(docRef, {
            uid: user.uid,
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL
        })

        await setDoc(doc(db, "Users", `${user.uid}`, "Maps", 'Map 1'), { test: "test" });
    }

    // Checks to see if a user is logged in and updates the login/logout buttons.
    let authFlag = true;
    useEffect(() => {
        onAuthStateChanged(auth, (user: any) => {
            if (authFlag) {
                authFlag = false;
                // setUserData({id: user.uid, displayName: user.displayName, email: user.email, photoURL: user.photoURL});
                if (user) {
                    // User is signed in
                    setIsAuthenticated(true);
                    sessionStorage.setItem("authenticated", "true");
                    console.log("authenticated");
                    checkIfNewUser(user);
                } else {
                    // User is signed out
                    console.log("de-authenticated");
                    sessionStorage.removeItem("authenticated");
                    setIsAuthenticated(false);
                }
            }
        });
    }, [])

    return (
        <div>
            {isAuthenticated || sessionStorage.getItem("authenticated") ? <SignOut /> : <SignIn />}
        </div>
    )
}

export default UserAuthentication;