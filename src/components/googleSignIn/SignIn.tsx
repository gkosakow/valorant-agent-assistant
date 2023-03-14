import { useEffect, useState } from 'react';
import { auth, provider } from '../../firebase/firebase';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

function SignIn() {
    const [value, setValue] = useState<any>('');

    const handleClick = () => {
        signInWithPopup(auth, provider)
            .then((data: any) => {
                console.log(data);
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential: any | null = GoogleAuthProvider.credentialFromResult(data);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = data.user;
                // IdP data available using getAdditionalUserInfo(result)
                // ...
                setValue(data.user.email);
                localStorage.setItem("email", data.user.email);
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
        setValue(localStorage.getItem("email"));
    })

    return (
        <>
            <button onClick={handleClick}>Sign in with Google</button>
        </>
    )
}

export default SignIn