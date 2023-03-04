import { useState } from "react";
import { Container, Stack, TextField, Divider } from "@mui/material";

interface Player {
	playerNum: number,
	riotID: string
}

const Players = () => {
	const [players, setPlayers] = useState<Player[]>([
		{ playerNum: 1, riotID: "Player 1" },
		{ playerNum: 2, riotID: "Player 2" },
		{ playerNum: 3, riotID: "Player 3" },
		{ playerNum: 4, riotID: "Player 4" },
		{ playerNum: 5, riotID: "Player 5" }
	]);

	const handleChangePlayer = (e: string, playerNumSelected: number) => {
		setPlayers(
			players.map(player =>
				player.playerNum === playerNumSelected ? { ...player, riotID: e } : player
			))
	}

	console.log(players)

	return (
		<Container className="players">
			<p>ROSTER</p>
			<Divider />
			<Stack className="player-stack" spacing={2}>
				<TextField fullWidth onChange={(e) => handleChangePlayer(e.target.value, 1)} label="Player 1" size="small" />
				<TextField fullWidth onChange={(e) => handleChangePlayer(e.target.value, 2)} label="Player 2" size="small" />
				<TextField fullWidth onChange={(e) => handleChangePlayer(e.target.value, 3)} label="Player 3" size="small" />
				<TextField fullWidth onChange={(e) => handleChangePlayer(e.target.value, 4)} label="Player 4" size="small" />
				<TextField fullWidth onChange={(e) => handleChangePlayer(e.target.value, 5)} label="Player 5" size="small" />
			</Stack>
		</Container>
	)
}

export default Players;