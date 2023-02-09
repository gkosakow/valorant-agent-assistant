import { useState } from 'react'
import Maps from './components/api/Maps'
import Agents from './components/api/Agents'
import Credits from './components/Credits'
import { Box } from '@mui/system'
import Players from './components/Players'
import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
	palette: {
		mode: 'dark',
	}
});

function App() {
	return (
		<ThemeProvider theme={darkTheme}>
			<Box className="app">
				<Box className="container">
					<Box className="sidebar">
						<Box className="logo">
							<img src="/assets/valorant-logo.png" />
						</Box>
						<Box className="sidebar-content">
							<Agents />
							<Maps />
							<Players />
						</Box>
						<Box className="credits">
							<Credits />
						</Box>
					</Box>
					<Box className="app-content"></Box>
				</Box>
			</Box >
		</ThemeProvider>
	)
}

export default App