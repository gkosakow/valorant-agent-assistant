import { useState, useContext, useEffect } from "react";
import { Input, IconButton } from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CircularProgress from '@mui/material/CircularProgress';
import InputAdornment from '@mui/material/InputAdornment';
import { retrievePlayerInfo } from "../api/PlayersAPI";
import { UserAuthContext } from "../App";
import { savePlayerToFirestore } from "../utilities/savePlayerToFirestore";
import { db, auth } from "../firebase/firebase";
import { doc, onSnapshot } from "firebase/firestore";

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
	const [playerLoading, setPlayerLoading] = useState<boolean>(false);
	const [enrichLoading, setEnrichLoading] = useState<boolean>(false);
	const [player, setPlayer] = useState<Player>({
		riotID: "",
		tagline: ""
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
		enrichPlayerInfo();
	}

	const enrichPlayerInfo = (): void => {
		setEnrichLoading(true);
		// function to use agents valorant API to update dynamically with every new agent
		if (player.riotID && player.tagline) {
			retrievePlayerInfo(player)
				.then((response: any) => {
					setPlayer({ ...player, ...response });
					if (isAuthenticated) { savePlayerToFirestore(user, num, player); }
				})
		}
		setEnrichLoading(false);
	}

	// takes agents from Firestore DB and loads them into state variables
	const loadPlayerFromFirestore = (user: any, playerNum: number) => {
		console.log("Loading players from firestore");
		setPlayerLoading(true);
		// referencing map within Maps collection inside of the users unique storage
		const docRef = doc(db, "Users", `${user.uid}`, "Players", `player${playerNum}`);

		// allows for real time data updates when using this listener
		onSnapshot(docRef, (doc) => {
			// check if agentName inside DB exists, if so, change it
			let loadedPlayerRiotID = doc.get(`riotID`);
			let loadedPlayerTagline = doc.get(`tagline`);

			if (loadedPlayerRiotID && loadedPlayerTagline) {
				setPlayerLoading(true);
				setPlayer({ ...player, riotID: loadedPlayerRiotID, tagline: loadedPlayerTagline });
				console.log(player);
			}
			setPlayerLoading(false);
		});
	}

	useEffect(() => {
		if (isAuthenticated) {
			loadPlayerFromFirestore(user, num);
		}
	}, [isAuthenticated])

	useEffect(() => {
		console.log("TESTING");
		if (playerLoading === false) {
			enrichPlayerInfo();
		}
	}, [playerLoading])


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
					<IconButton type="submit"><CheckCircleIcon sx={{ width: 15 }} /></IconButton>
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