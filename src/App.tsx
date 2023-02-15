import { useState } from 'react'
import Players from './components/Players'
import Maps from './components/api/MapList'
import Agents from './components/api/AgentList'
import Credits from './components/Credits'
import { Box } from '@mui/system'
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
							<Players />
						</Box>
						<Box className="credits">
							<Credits />
						</Box>
					</Box>
					<Box className="app-content">
						{/* <Agents /> */}
						<Maps />
					</Box>
				</Box>
			</Box >
		</ThemeProvider>
	)
}

export default App