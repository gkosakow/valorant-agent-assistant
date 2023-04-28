import { Box } from "@mui/material";
import logo from '../public/static/images/valorant-logo.png'
import Credits from "./Credits";
import UserAuthentication from "./authentication/UserAuthentication";
import PlayerWindow from "./PlayerWindow";

const Sidebar = () => {
	return (
		<Box className="sidebar">
			<Box className="logo">
				<img src={logo} />
			</Box>
			<UserAuthentication />
			<PlayerWindow />
			<div>
				<Credits />
			</div>
		</Box>
	);
}

export default Sidebar;