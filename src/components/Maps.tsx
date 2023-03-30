import { useState, useEffect } from "react";
import { Box, Grid } from "@mui/material";
import { auth, db } from '../firebase/firebase';
import { doc, setDoc } from "firebase/firestore";
import MapCard from "./MapCard";
import { getCurrentUser } from "./googleSignIn/UserAuthentication";

// defining the Map interface to store the map id, name, and splash image
export interface Map {
	id: string,
	name: string,
	image: string,
	coords: string
}

const setFirebaseMap = async (user: any, map: Map) => {
	await setDoc(doc(db, "Users", `${user.uid}`, "Maps", `${map.name}`), {
		agent1: "",
		agent2: "",
		agent3: "",
		agent4: "",
		agent5: ""
	});
}

const Maps = () => {
	const [mapList, setMapList] = useState<Map[]>([]);

	// function to use maps valorant API to update dynamically with every new map
	useEffect(() => {
		const mapURL = "https://valorant-api.com/v1/maps"

		fetch(mapURL)
			.then((response: any) => response.json())

			.then((data: any) => {
				const user = auth.currentUser;

				// setting mapData to the map array within the data payload
				const mapData = data.data;

				let updatedMapList: Map[] = [];

				// fills the maps array with responses from maps API besides The Range
				mapData.map((map: any) => {
					if (map.displayName !== "The Range") {
						updatedMapList.push({ id: map.uuid, name: map.displayName, image: map.splash, coords: map.coordinates });
					}
				})

				// sorts maps array alphabetically
				updatedMapList.sort((a, b) => a.name.localeCompare(b.name))

				// setting mapList to updatedMapList

				console.log(updatedMapList);
				setMapList(updatedMapList);

				return updatedMapList;

				// if(isAuthenticated){
				// 	updatedMapList.map((map: Map) => {
				// 		setFirebaseMap(auth.currentUser, map);
				// 		console.log(map.name);
				// 	})
				// }
			})

			.then((updatedMapList) => {
				updatedMapList.map((map: Map) => {
					setFirebaseMap(auth.currentUser, map);
					console.log(map.name);
				})
			})

			.catch((error: any) => {
				// error handling to console
				console.error("Map API error!", error);
			});

	}, []);

	return (
		<Box sx={{ width: '100%', flexWrap: 'wrap' }} className="map-grid">
			<Grid container>
				{mapList.map(map => (
					<Grid item xs={12} md={12} lg={6} key={map.id}>
						<MapCard map={map} />
					</Grid>
				))}
			</Grid>
		</Box>
	)
}

export default Maps;