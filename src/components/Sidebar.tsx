import { Box, Button, Popover } from "@mui/material";
import Players from "./Players";
import Credits from "./Credits";
import UserAuthentication from "./authentication/UserAuthentication";
import TeamPopover from "./TeamPopover";

const Sidebar = () => {
	return (
		<Box className="sidebar">
			<Box className="logo">
				<img src="./src/assets/images/valorant-logo.png" />
			</Box>
			<div className="user-auth">
				<TeamPopover />
				<UserAuthentication />
			</div>
			<Box className="credits">
				<Credits />
			</Box>
		</Box>
	);
}

export default Sidebar;