import { useEffect, useState } from 'react';
import { auth, provider } from '../../firebase/firebase';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { Button } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';

function SignIn({ setIsAuthenticated }: { setIsAuthenticated: any }) {
    const [loggedInEmail, setLoggedInEmail] = useState<string | null>('');

    const handleClick = () => {
        signInWithPopup(auth, provider)
            .then((data: any) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential: any | null = GoogleAuthProvider.credentialFromResult(data);
                const token = credential.accessToken;

                // The signed-in user info.
                const user = data.user;

                console.log("User data:", user);
                localStorage.setItem("email", data.user.email);
                setIsAuthenticated(true);
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // ...
            });
    }

    useEffect(() => {
        setLoggedInEmail(localStorage.getItem("email"));
    })

    return (
        <>
            <Button onClick={handleClick} variant="contained" endIcon={<GoogleIcon />}>Sign in with Google</Button>
        </>
    )
}

export default SignIn