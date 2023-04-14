import { useState } from "react";
import { Card, Stack, Input, Divider } from "@mui/material";
import InputAdornment from '@mui/material/InputAdornment';
interface Player {
	playerNum: number,
	riotID: string,
	tagline: string
}

const Players = () => {
	const [players, setPlayers] = useState<Player[]>([
		{ playerNum: 1, riotID: "Player 1", tagline: "" },
		{ playerNum: 2, riotID: "Player 2", tagline: "" },
		{ playerNum: 3, riotID: "Player 3", tagline: "" },
		{ playerNum: 4, riotID: "Player 4", tagline: "" },
		{ playerNum: 5, riotID: "Player 5", tagline: "" }
	]);

	const handleChangePlayerName = (e: string, playerNumSelected: number) => {
		setPlayers(
			players.map(player =>
				player.playerNum === playerNumSelected ? { ...player, riotID: e } : player)
		)
	}

	const handleChangePlayerTagline = (e: string, playerNumSelected: number) => {
		setPlayers(
			players.map(player =>
				player.playerNum === playerNumSelected ? { ...player, tagline: e } : player)
		)
	}

	return (
		<Card className="players" sx={{ borderRadius: 3 }} elevation={2} style={{ backgroundColor: "#1e2036" }}>
			<Stack className="player-stack" spacing={2}>
				{players.map(player => (
					<div className="player-row" key={player.playerNum}>
						<Input
							className="player-name"
							onChange={(e) => handleChangePlayerName(e.target.value, player.playerNum)}
							disableUnderline
							placeholder={`PLAYER ${player.playerNum}`}
							size="small"
							autoComplete='off'
							inputProps={{ maxLength: 16, style: { padding: 0 } }}
						/>
						<Input
							className="player-tagline"
							onChange={(e) => handleChangePlayerTagline(e.target.value, player.playerNum)}
							disableUnderline
							placeholder={`TAG`}
							size="small"
							autoComplete='off'
							inputProps={{ maxLength: 5, style: { padding: 0 } }}
							startAdornment={<InputAdornment position="start">#</InputAdornment>}
						/>
					</div>
				))}
			</Stack>
		</Card>
	)
}

export default Players;