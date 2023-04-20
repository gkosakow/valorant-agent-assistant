import { useState, useContext } from "react";
import { Card, Stack, Input, IconButton } from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import InputAdornment from '@mui/material/InputAdornment';
import { retrievePlayerInfo } from "../api/PlayersAPI";
import { UserAuthContext } from "../App";
import { savePlayerToFirestore } from "../utilities/savePlayerToFirestore";
import { auth } from "../firebase/firebase";

export interface Player {
	riotID: string,
	tagline: string,
	accLevel?: number,
	bannerPhoto?: string,
	rank?: string,
	rankIcon?: string,
	rr?: number
}

const Player = ({ num }: { num: number }) => {
	const [isAuthenticated] = useContext(UserAuthContext);
	const [player, setPlayer] = useState<Player>({
		riotID: "",
		tagline: "",
		bannerPhoto: ""
	});
	const user = auth.currentUser;

	const handleChangePlayerName = (e: string) => {
		setPlayer({ ...player, riotID: e })
	}

	const handleChangePlayerTagline = (e: string) => {
		setPlayer({ ...player, tagline: e })
	}

	const handleSubmit = (e: any) => {
		e.preventDefault();
		console.log("SUBMITTED");

		// function to use agents valorant API to update dynamically with every new agent
		if (player.riotID && player.tagline) {
			retrievePlayerInfo(player.riotID, player.tagline)
				.then((response: any) => {
					setPlayer({ ...player, ...response });
					if (isAuthenticated) {
						savePlayerToFirestore(user, num, player);
					}
				})
		}
	}

	return (
		<div className="player">
			<div className="player-input" style={{ backgroundColor: "#1e2036", backgroundImage: `url(${player.bannerPhoto})` }}>
				<form className="player-input-row" onSubmit={handleSubmit}>
					<Input
						className="player-name"
						onChange={(e) => handleChangePlayerName(e.target.value)}
						disableUnderline
						placeholder={`PLAYER NAME`}
						value={player.riotID}
						size="small"
						autoComplete='off'
						inputProps={{ maxLength: 16, style: { padding: 0 } }}
					/>
					<Input
						className="player-tagline"
						onChange={(e) => handleChangePlayerTagline(e.target.value)}
						disableUnderline
						placeholder={`TAG`}
						value={player.tagline}
						size="small"
						autoComplete='off'
						inputProps={{ maxLength: 5, style: { padding: 0 } }}
						startAdornment={<InputAdornment position="start">#</InputAdornment>}
					/>
					<IconButton type="submit"><CheckCircleIcon sx={{ width: 20 }} /></IconButton>
				</form>
				<div className="player-stats">
					{player.rank} {player.rr}RR
					<img className="player-rank-icon" src={player.rankIcon} />
				</div>
			</div>
		</div>
	)
}

export default Player;