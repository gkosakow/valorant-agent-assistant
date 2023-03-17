import Card from "@mui/material/Card";
import Agents from "./Agents";
import { Map } from "./Maps";

// creating a card for a specific map, uses interface Map
const MapCard = ({ map }: { map: Map }) => {
    return (
        <Card className="map-card" elevation={3} sx={{ borderRadius: 3 }} style={{
            backgroundImage: `url(${map.mapImage})`
        }}>
            <div className="map-card-text" >
                <h1>{map.mapName.toUpperCase()}</h1>
                <p>{map.mapCoords.split("").join(" ")}</p>
            </div>
            <div className="map-card-agents">
                <Agents map={map} />
            </div>
        </Card>
    )
};

export default MapCard;
