import { useState, useEffect } from "react";
import { Box, Grid } from "@mui/material";
import { auth, db } from '../firebase/firebase';
import { doc, setDoc } from "firebase/firestore";
import MapCard from "./MapCard";

// defining the Map interface to store the map id, name, and splash image
export interface Map {
	id: string,
	name: string,
	image: string,
	coords: string
}

const setFirebaseMaps = async (user: any, map: string) => {
	await setDoc(doc(db, "Users", `${user.uid}`, "Maps", `${map}`), {
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
		async function retrieveMaps() {
			const mapURL = "https://valorant-api.com/v1/maps"
			const response = await fetch(mapURL);
			const mapData = await response.json();

			let updatedMapList: Map[] = []

			// fills the maps array with responses from maps API besides The Range
			mapData.data.map((map: any) => {
				if (map.displayName !== "The Range") {
					updatedMapList.push({ id: map.uuid, name: map.displayName, image: map.splash, coords: map.coordinates });
				}
			})

			// sorts maps array alphabetically
			updatedMapList.sort((a, b) => a.name.localeCompare(b.name))

			// setting mapList to updatedMapList
			setMapList(updatedMapList);
		};

		// error handling to console
		retrieveMaps().catch(error => {
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