import { Box } from "@mui/material";
import Credits from "./Credits";
import UserAuthentication from "./authentication/UserAuthentication";
import PlayerWindow from "./PlayerWindow";

const Sidebar = () => {
	return (
		<Box className="sidebar">
			<Box className="logo">
				<img src="./src/assets/images/valorant-logo.png" />
			</Box>
			<UserAuthentication />
			<PlayerWindow />
			<Credits />
		</Box>
	);
}

export default Sidebar;