import { useEffect, useContext } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../../firebase/firebase';
import { UserAuthContext } from '../../App';
import { isNewUser } from '../../utilities/isNewUser';
import { addUserDataToFirestore } from '../../utilities/addUserDataToFirestore';
import SignIn from './SignIn';
import SignOut from './SignOut';
import UserProfile from '../UserProfile';

export interface User {
    email: string,
    picture: string,
    firstName: string,
    lastName: string,
}

function UserAuthentication() {
    const [isAuthenticated, setIsAuthenticated] = useContext(UserAuthContext);

    // Checks to see if a user is logged in and updates the login/logout buttons.
    useEffect(() => {
        onAuthStateChanged(auth, (user: any) => {
            if (user) {
                // User is signed in
                setIsAuthenticated(true);

                // Storing logged in user info in sessionStorage
                const loggedInUser: User = {
                    email: user?.email!,
                    picture: user?.photoURL!,
                    firstName: user?.displayName!.split(' ').slice(0, -1).join(' ')!,
                    lastName: user?.displayName!.split(' ').slice(-1).join(' ')!
                }

                sessionStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));

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
        <div className='sidebar-box-centered'>
            {isAuthenticated || sessionStorage.getItem("authenticated") ?
                <UserProfile />
                :
                <div className='login-button'>
                    <SignIn />
                </div>}
        </div>
    )
}

export default UserAuthentication;