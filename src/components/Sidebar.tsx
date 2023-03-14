import { Box } from "@mui/material";
import Players from "./Players";
import Credits from "./Credits";
import SignIn from "./googleSignIn/SignIn";
import SignOut from "./googleSignIn/SignOut";

const Sidebar = () => {
	return (
		<Box className="sidebar">
			<Box className="logo">
				<img src="./src/assets/images/valorant-logo.png" />
			</Box>
			<Box className="sidebar-content">
				<Players />
			</Box>
			<Box className="credits">
				{localStorage.getItem("email") ?
					<SignOut /> : <SignIn />}
				<Credits />
			</Box>
		</Box>
	);
}

export default Sidebar;