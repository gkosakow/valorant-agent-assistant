import { auth, provider } from '../../firebase/firebase';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { Button } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';

function SignIn() {

    const handleClick = () => {
        signInWithPopup(auth, provider)
            .then((data: any) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential: any | null = GoogleAuthProvider.credentialFromResult(data);
                const token = credential.accessToken;

                // DEBUGGING when user is signing in.
                console.log("Signing in");

            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // ...
            });
    }

    return (
        <div>
            <Button onClick={handleClick} variant="contained" endIcon={<GoogleIcon />}>Sign in with Google</Button>
        </div>
    )
}

export default SignIn