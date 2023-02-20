import { useState, useEffect } from "react";

// defining the Map interface to store the map name and splash image
interface Map {
	mapID: string,
	mapName: string,
	mapImage: string
}

function Maps() {
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

	const mapCards = mapList.map(map => (
		<div key={map.mapID}>
			<p>{map.mapName}</p>
		</div>
	));

	// DEBUGGINGs
	console.log("Maps array", mapList);

	return (
		<div>MAPS{mapCards}</div>
	)
}

export default Maps;