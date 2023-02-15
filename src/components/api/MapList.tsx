import { Padding } from "@mui/icons-material";
import { Box } from "@mui/material";
import { useState } from "react";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

// defining the Map interface to store the map name and splash image
interface Map {
    mapName: string,
    mapImage: string
}

export default function Maps() {
    const mapList: Map[] = [];
    // function to use maps valorant API to update dynamically with every new map
    async function retrieveMaps() {
        const mapURL = "https://valorant-api.com/v1/maps"
        const response = await fetch(mapURL);
        const data = await response.json();

        // fills the maps array with responses from maps API besides The Range
        data.data.forEach((mapData: any) => {
            if (mapData.displayName !== "The Range") {
                mapList.push({ mapName: mapData.displayName, mapImage: mapData.splash })
            }
        })

        // sorts maps array alphabetically
        mapList.sort((a, b) => a.mapName.localeCompare(b.mapName))
    };

    // error handling to console
    retrieveMaps().catch(error => {
        console.log("Map API error!");
        console.error(error);
    });

    // DEBUGGING
    console.log("Maps array:", mapList);

    function renderCards(map: Map) {
        console.log(map.mapImage);
        console.log(map.mapName);

        return (
            <Card sx={{ maxWidth: 345 }} key={map.mapName}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={map.mapImage}
                    title={map.mapName}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {map.mapName}
                    </Typography>
                </CardContent>
            </Card>
        );
    }

    return (
        <div className="app">
            TEST
            {mapList.map(map => renderCards(map))}
        </div>
    )
}