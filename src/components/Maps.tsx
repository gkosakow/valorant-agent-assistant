import { useState, useEffect, useContext } from "react";
import { Box, Grid } from "@mui/material";
import { auth } from '../firebase/firebase';
import { UserAuthContext } from "../App";
import { isNewUser } from "../firebase/isNewUser";
import { addMapToFirestore } from "../firebase/addMapToFirestore";
import MapCard from "./MapCard";

// defining the Map interface to store the map id, name, and splash image
export interface Map {
	id: string,
	name: string,
	image: string,
	coords: string
}

const Maps = () => {
	const [mapList, setMapList] = useState<Map[]>([]);
	const [isAuthenticated] = useContext(UserAuthContext);

	// function to use maps valorant API to update dynamically with every new map
	useEffect(() => {
		const mapURL = "https://valorant-api.com/v1/maps"

		fetch(mapURL)
			.then((response: any) => response.json())

			.then((data: any) => {
				let updatedMapList: Map[] = [];

				// setting mapData to the map array within the data payload
				const mapData = data.data;

				// fills the maps array with responses from maps API besides "The Range"
				mapData.map((map: any) => {
					if (map.displayName !== "The Range") {
						updatedMapList.push({ id: map.uuid, name: map.displayName, image: map.splash, coords: map.coordinates });
					}
				})

				// sorts maps array alphabetically
				updatedMapList.sort((a, b) => a.name.localeCompare(b.name))

				// setting mapList to updatedMapList
				setMapList(updatedMapList);
			})

			.catch((error: any) => {
				// error handling to console
				console.error("Map API error!", error);
			});
	}, []);

	useEffect(() => {
		if (isAuthenticated && isNewUser(auth.currentUser)) {
			console.log("Adding maps for the first time");
			mapList.map((map: Map) => {
				addMapToFirestore(auth.currentUser, map);
			})
		}
	}, [isAuthenticated]);

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