import Card from "@mui/material/Card";
import Agents from "./Agents";
import { Map } from "./Maps";

// creating a card for a specific map, uses interface Map
const MapCard = ({ map }: { map: Map }) => {
    return (
        <Card className="map-card" elevation={3} sx={{ borderRadius: 3 }} style={{
            backgroundImage: `url(${map.image})`
        }}>
            <div className="map-card-gradient" />
            <div className="map-card-contents">
                <div className="map-card-text" >
                    <h1>{map.name.toUpperCase()}</h1>
                    <p>{map.coords.split("").join(" ")}</p>
                </div>
                <div className="map-card-agents">
                    <Agents map={map} />
                </div>
            </div>
        </Card >
    )
};

export default MapCard;
