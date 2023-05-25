import { useState, useEffect } from "react";
import { Box, Grid } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MapCard from "./MapCard";
import { retrieveMaps } from "../api/MapsAPI";

const theme = createTheme({
	palette: {
		mode: "dark",
	},
	breakpoints: {
		values: { xs: 0, sm: 568, md: 600, lg: 1480, xl: 2000 }
	}
});

declare module '@mui/material/styles' {
	interface BreakpointOverrides {
		xs: true; // removes the `xs` breakpoint
		sm: true;
		md: true;
		lg: true;
		xl: true;
	}
}

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
		<ThemeProvider theme={theme}>
			<Box className="map-grid">
				<Grid container>
					{mapList.map(map => (
						<Grid item xs={12} sm={12} md={12} lg={6} xl={4} key={map.id}>
							<MapCard map={map} />
						</Grid>
					))}
				</Grid>
			</Box>
		</ThemeProvider>
	)
}

export default MapsPanel;