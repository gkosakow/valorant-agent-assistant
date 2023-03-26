import { useState } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../../firebase/firebase'
import SignIn from './SignIn';
import SignOut from './SignOut';

function UserAuthentication() {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

    // Checks to see if a user is logged in and updates the login/logout buttons.
    onAuthStateChanged(auth, (user: any) => {
        if (user) {
            // User is signed in
            setIsAuthenticated(true);
            if (user.metadata.creationTime === user.metadata.lastSignInTime) {
                // This is a new user, show welcome modal.
                console.log("NEW USER");
            } else {
                // This is an existing user.
                console.log("EXISTING USER");
            }
            console.log("Signed in as:", user);
        } else {
            // User is signed out
            setIsAuthenticated(false);
        }
    });

    return (
        <div>
            {isAuthenticated ? <SignOut /> : <SignIn />}
        </div>
    )
}

export default UserAuthentication;