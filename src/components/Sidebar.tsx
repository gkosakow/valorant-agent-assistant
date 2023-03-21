import { Box } from "@mui/material";
import Players from "./Players";
import Credits from "./Credits";
import UserAuthentication from "./googleSignIn/userAuthentication";

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
				<UserAuthentication />
				<Credits />
			</Box>
		</Box>
	);
}

export default Sidebar;