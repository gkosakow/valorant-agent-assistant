import { auth } from "../../firebase/firebase";
import { signOut } from "firebase/auth";
import { Button } from "@mui/material";
import Tooltip from '@mui/material/Tooltip';

function SignOut() {

    const logOut = () => {
        signOut(auth)
            .then(() => {
                // removing authentication item from sessionStorage and refreshing the page
                sessionStorage.clear();
                window.location.reload();
            }
            )
    }

    return (
        <>
            <Tooltip title="Log out">
                <Button
                    className="logout-button"
                    onClick={logOut}
                    color="error"
                    size="small"
                    variant="outlined"
                >
                    LOGOUT
                </Button>
            </Tooltip>
        </>
    )
}

export default SignOut;