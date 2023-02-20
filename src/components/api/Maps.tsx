import { useState, useEffect } from "react";
import { Box, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

// defining the Map interface to store the map ID, name, and splash image
interface Map {
	mapID: string,
	mapName: string,
	mapImage: string
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
					updatedMapList.push({ mapID: map.uuid, mapName: map.displayName, mapImage: map.splash });
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

	// DEBUGGINGs
	console.log("Maps array", mapList);

	return (
		<Box sx={{ width: '100%' }} className="map-grid">
			<Grid container rowSpacing={0} columnSpacing={0}>
				<Grid item xs={12}>
					{mapList.map(map => (
						<Card className="map-card" key={map.mapID} elevation={4} sx={{ borderRadius: 3 }}>
							<CardMedia
								sx={{ height: 180 }}
								image={map.mapImage}
								title={map.mapName}
							/>
							<CardContent sx={{}}>
								<Typography gutterBottom variant="h5" component="div">
									{map.mapName}
								</Typography>
							</CardContent>
						</Card>
					))}
				</Grid>
			</Grid>
		</Box>
	)
}

export default Maps;