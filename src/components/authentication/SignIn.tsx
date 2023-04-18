import { auth, provider } from '../../firebase/firebase';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { Button } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';

function SignIn() {
    const handleClick = () => {
        // firebase auth Google sign in
        signInWithPopup(auth, provider)
            .then((data: any) => {
                sessionStorage.setItem("authenticated", "true");
            })
            .catch((error) => {
                console.log("Error signing in", error);
            });
    }

    return (
        <div>
            <Button className="login-button" onClick={handleClick} variant="contained" startIcon={<GoogleIcon />}>Sign in with Google</Button>
        </div>
    )
}

export default SignIn