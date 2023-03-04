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

	return (
		<Container className="players">
			<p>ROSTER</p>
			<Divider />
			<Stack className="player-stack" spacing={2}>
				{players.map(player => (
					<TextField key={player.playerNum} fullWidth onChange={(e) => handleChangePlayer(e.target.value, player.playerNum)} label={`Player ${player.playerNum}`} size="small" autoComplete='off' />
				))}
			</Stack>
		</Container>
	)
}

export default Players;