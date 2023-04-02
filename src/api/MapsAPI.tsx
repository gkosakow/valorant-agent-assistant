import { Map } from "../components/MapsPanel";

export const retrieveMaps = async () => {
    const mapURL = "https://valorant-api.com/v1/maps"

    const mapList = await fetch(mapURL)
        .then((response: any) => response.json())
        .then((data: any) => {
            const updatedMapList: Map[] = [];

            // setting mapData to the map array within the data payload
            const rawData = data.data;

            // fills the maps array with responses from maps API besides "The Range"
            rawData.map((map: any) => {
                if (map.displayName !== "The Range") {
                    updatedMapList.push({ id: map.uuid, name: map.displayName, image: map.splash, coords: map.coordinates });
                }
            })

            // sorts maps array alphabetically
            updatedMapList.sort((a, b) => a.name.localeCompare(b.name))

            return updatedMapList;
        })
        .catch((error: any) => {
            // error handling to console
            console.error("Map API error!", error);
        });

    return mapList;
}