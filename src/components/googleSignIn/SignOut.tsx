import { auth } from "../../firebase/firebase";
import { signOut } from "firebase/auth";
import { Button } from "@mui/material";

function SignOut() {

    const logout = () => {
        signOut(auth)
            .then(() => {
                console.log("Signing out");
            }
            )
    }

    return (
        <>
            <Button onClick={logout} variant="outlined">Logout</Button>
        </>
    )
}

export default SignOut;