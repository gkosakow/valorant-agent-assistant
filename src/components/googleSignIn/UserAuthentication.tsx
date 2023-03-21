import { useState } from 'react';
import SignIn from './SignIn';
import SignOut from './SignOut';

function UserAuthentication() {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

    return (
        <div>
            {isAuthenticated || localStorage.getItem("email") ? <>Currently logged in as: {localStorage.getItem("email")} <SignOut setIsAuthenticated={setIsAuthenticated} /></> : <SignIn setIsAuthenticated={setIsAuthenticated} />}
        </div>
    )
}

export default UserAuthentication;