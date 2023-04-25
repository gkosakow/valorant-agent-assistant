import { useState, useContext, useEffect } from "react";
import { Input, IconButton } from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SyncIcon from '@mui/icons-material/Sync';
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
	const user = auth.currentUser;
	const [isAuthenticated] = useContext(UserAuthContext);
	const [enrichLoading, setEnrichLoading] = useState<boolean>(false);

	const [player, setPlayer] = useState<Player>({
		riotID: "",
		tagline: ""
	});

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

	// takes agents from Firestore DB and loads them into state variables
	const loadPlayerFromFirestore = (user: any, playerNum: number) => {
		// referencing map within Maps collection inside of the users unique storage
		const docRef = doc(db, "Users", `${user.uid}`, "Players", `player${playerNum}`);

		// allows for real time data updates when using this listener
		onSnapshot(docRef, (doc) => {
			console.log("Loading and setting player from Firestore")
			// check if agentName inside DB exists, if so, change it
			if (doc.get("riotID") && doc.get("tagline")) {
				setPlayer({
					riotID: doc.get("riotID"),
					tagline: doc.get("tagline"),
					accLevel: doc.get("accLevel"),
					bannerPhoto: doc.get("bannerPhoto"),
					rank: doc.get("rank"),
					rankIcon: doc.get("rankIcon"),
					rr: doc.get("rr")
				});
			}
		});
	}

	const enrichPlayerInfo = async () => {
		console.log("Enriching player");
		if (player.riotID && player.tagline) {
			setEnrichLoading(true);
			await retrievePlayerInfo(player)
				.then((updatedPlayer: any) => {
					setPlayer(updatedPlayer);
					setEnrichLoading(false);
					if (isAuthenticated) {
						savePlayerToFirestore(user, num, updatedPlayer);
						console.log("Saved player to Firestore");
					};
				})
		}
	}

	const loadAndEnrichPlayer = async () => {
		if (isAuthenticated) {
			await loadPlayerFromFirestore(user, num);
			await enrichPlayerInfo();
		}
	}

	// Loads in players when user signs in
	useEffect(() => {
		loadAndEnrichPlayer();
	}, [isAuthenticated]);

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
					<IconButton type="submit">{enrichLoading ? <SyncIcon className="loading" sx={{ width: 20 }} /> : <CheckCircleIcon sx={{ width: 20 }} />}</IconButton>
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