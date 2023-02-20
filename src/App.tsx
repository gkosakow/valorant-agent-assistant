import { useState } from 'react'
import Players from './components/Players'
import Credits from './components/Credits'
import { Box } from '@mui/system'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Maps from './components/api/Maps';
import Agents from './components/api/Agents';

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
						<Maps />
					</Box>
				</Box>
			</Box >
		</ThemeProvider>
	)
}

export default App