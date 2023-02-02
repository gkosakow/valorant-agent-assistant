
interface Map {
    mapName: string,
    mapImage: string
}

export default function Maps() {
    const maps: Map[] = [];

    async function retrieveMaps() {
        const mapURL = "https://valorant-api.com/v1/maps"
        const response = await fetch(mapURL);
        const data = await response.json();
        
        // fills the maps array with responses from maps API besides The Range
        data.data.forEach((mapData:any) => {
            if(mapData.displayName !== "The Range"){
                maps.push({mapName: mapData.displayName, mapImage: mapData.splash})
            }
        })
        
        // sorts maps alphabetically
        maps.sort((a, b) => a.mapName.localeCompare(b.mapName))
    };

    retrieveMaps();
    console.log(maps);
    return(
        <div>
            <div>Maps</div>
        </div>
    )
}