import { auth } from "../../firebase/firebase";
import { signOut } from "firebase/auth";
import { IconButton } from "@mui/material";
import Tooltip from '@mui/material/Tooltip';
import LogoutIcon from '@mui/icons-material/Logout';

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
                <IconButton
                    className="logout-button"
                    onClick={logOut}
                    color="error"
                    size="small"
                >
                    <LogoutIcon />
                </IconButton>
            </Tooltip>
        </>
    )
}

export default SignOut;