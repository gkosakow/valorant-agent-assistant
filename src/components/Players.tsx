import { useState } from "react";
import { Button, Card, Stack, OutlinedInput, Divider } from "@mui/material";
import InputAdornment from '@mui/material/InputAdornment';
import { width } from "@mui/system";
import TagIcon from '@mui/icons-material/Tag';
interface Player {
	playerNum: number,
	riotID: string,
	tagline: string
}

const Players = () => {
	const [editing, setEditing] = useState<boolean>(false);
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
				player.playerNum === playerNumSelected ? { ...player, riotID: e } : player
			))
	}

	const handleChangePlayerTag = (e: string, playerNumSelected: number) => {
		setPlayers(
			players.map(player =>
				player.playerNum === playerNumSelected ? { ...player, tagline: e } : player
			))
	}

	return (
		<Card className="players" sx={{ borderRadius: 3 }} elevation={2} style={{ backgroundColor: "#1e2036" }}>
			TEAM ROSTER
			<Divider sx={{ marginTop: .75, marginBottom: 1 }} />
			<Stack className="player-stack" spacing={2}>
				{players.map(player => (
					<div className="player-row" key={player.playerNum}>
						<OutlinedInput
							className="player-name"
							onChange={(e) => handleChangePlayerName(e.target.value, player.playerNum)}
							placeholder={`PLAYER ${player.playerNum}`}
							size="small"
							autoComplete='off'
							inputProps={{ maxLength: 16 }}
						/>
						<OutlinedInput
							className="player-tagline"
							onChange={(e) => handleChangePlayerTag(e.target.value, player.playerNum)}
							placeholder={`TAG`}
							size="small"
							autoComplete='off'
							inputProps={{ maxLength: 5 }}
							startAdornment={<InputAdornment sx={{ padding: 0 }} position="start">#</InputAdornment>}
						/>
					</div>
				))}
			</Stack>
		</Card>
	)
}

export default Players;