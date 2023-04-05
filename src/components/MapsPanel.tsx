import { useState, useEffect } from "react";
import { Box, Grid } from "@mui/material";
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
	const [mapList, setMapList] = useState<Map[]>([]);

	// function to use maps valorant API to update dynamically with every new map
	useEffect(() => {
		retrieveMaps().then((response: any) => {
			setMapList(response);
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

export default MapsPanel;