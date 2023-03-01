import { useState } from "react";
import { Container, Stack, TextField, Divider } from "@mui/material";

interface Player {
	riotID: string;
}

const Players = () => {
	const [players, setPlayers] = useState<Player[]>([
		{ riotID: "Player 1" },
		{ riotID: "Player 2" },
		{ riotID: "Player 3" },
		{ riotID: "Player 4" },
		{ riotID: "Player 5" }
	]);

	function handleChangeUser(playerNum: number) {
		// do stuff here
	}

	return (
		<Container className="players">
			<p>ROSTER</p>
			<Divider />
			<Stack className="player-stack" spacing={2}>
				<TextField fullWidth label="Player 1" size="small" />
				<TextField fullWidth label="Player 2" size="small" />
				<TextField fullWidth label="Player 3" size="small" />
				<TextField fullWidth label="Player 4" size="small" />
				<TextField fullWidth label="Player 5" size="small" />
			</Stack>
		</Container>
	)
}

export default Players;