import { useState, useEffect, useContext } from "react";
import { Box, Grid } from "@mui/material";
import { auth } from '../firebase/firebase';
import { UserAuthContext } from "../App";
import { isNewUser } from "../firebase/isNewUser";
import { addMapToFirestore } from "../firebase/addMapToFirestore";
import MapCard from "./MapCard";
import { retrieveMaps } from "../api/MapsAPI";

// defining the Map interface to store the map id, name, and splash image
export interface Map {
	id: string,
	name: string,
	image: string,
	coords: string
}

const MapsPanel = () => {
	const [isAuthenticated] = useContext(UserAuthContext);
	const [mapList, setMapList] = useState<Map[]>([]);

	// function to use maps valorant API to update dynamically with every new map
	useEffect(() => {
		retrieveMaps().then((response: any) => {
			setMapList(response);
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

export default MapsPanel;