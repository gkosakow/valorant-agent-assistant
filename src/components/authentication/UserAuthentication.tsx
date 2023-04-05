import { useEffect, useContext } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../../firebase/firebase';
import { UserAuthContext } from '../../App';
import { isNewUser } from '../../utilities/isNewUser';
import { addUserDataToFirestore } from '../../utilities/addUserDataToFirestore';
import SignIn from './SignIn';
import SignOut from './SignOut';

function UserAuthentication() {
    const [isAuthenticated, setIsAuthenticated] = useContext(UserAuthContext);

    // Checks to see if a user is logged in and updates the login/logout buttons.
    useEffect(() => {
        onAuthStateChanged(auth, (user: any) => {
            if (user) {
                // User is signed in
                setIsAuthenticated(true);
                sessionStorage.setItem("authenticated", "true");
                console.log("SIGNED IN:", user);

                // Initializes Firestore db with user information if first time login
                if (isNewUser(user)) {
                    addUserDataToFirestore(user);
                }
            } else {
                // User is signed out
                console.log("SIGNED OUT");
                sessionStorage.removeItem("authenticated");
                setIsAuthenticated(false);
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