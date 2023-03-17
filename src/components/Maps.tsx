import { useState, useEffect } from "react";
import { Box, Grid } from "@mui/material";
import MapCard from "./MapCard";

// defining the Map interface to store the map ID, name, and splash image
export interface Map {
	mapID: string,
	mapName: string,
	mapImage: string,
	mapCoords: string
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
					updatedMapList.push({ mapID: map.uuid, mapName: map.displayName, mapImage: map.splash, mapCoords: map.coordinates });
				}
			})

			// sorts maps array alphabetically
			updatedMapList.sort((a, b) => a.mapName.localeCompare(b.mapName))

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
					<Grid item xs={12} md={12} lg={6} key={map.mapID}>
						<MapCard map={map} />
					</Grid>
				))}
			</Grid>
		</Box>
	)
}

export default Maps;