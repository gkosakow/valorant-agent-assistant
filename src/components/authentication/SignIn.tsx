import { auth, provider } from '../../firebase/firebase';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { Button } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';

function SignIn() {
    const handleClick = () => {
        // firebase auth Google sign in
        signInWithPopup(auth, provider)
            .then((data: any) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential: any | null = GoogleAuthProvider.credentialFromResult(data);
                const token = credential.accessToken;
                // DEBUGGING when user is signing in.
                console.log("Signing in");
                sessionStorage.setItem("authenticated", "true");
            })
            .catch((error) => {
                console.log("Error signing in");
            });
    }

    return (
        <div>
            <Button onClick={handleClick} variant="contained" startIcon={<GoogleIcon />}>Sign in with Google</Button>
        </div>
    )
}

export default SignIn