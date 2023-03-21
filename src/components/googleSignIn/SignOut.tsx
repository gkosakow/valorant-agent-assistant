import { auth } from "../../firebase/firebase";
import { signOut } from "firebase/auth";
import { Button } from "@mui/material";

function SignOut({ setIsAuthenticated }: { setIsAuthenticated: any }) {
    const logout = () => {
        signOut(auth)
            .then(() => {
                localStorage.clear();
                setIsAuthenticated(false);
                window.location.reload();
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