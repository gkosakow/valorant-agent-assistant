import { useState } from 'react';
import "./assets/fonts/Tungsten-Bold/Tungsten-Bold.ttf";
import { Box } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Agents from './components/Agents';
import Maps from './components/Maps';
import Sidebar from './components/Sidebar';

const darkTheme = createTheme({
	palette: {
		mode: 'dark',
	}
});

function App() {
	return (
		<ThemeProvider theme={darkTheme}>
			<Box className="app">
				<Sidebar />
				<Box className="app-content">
					<Maps />
				</Box>
			</Box >
		</ThemeProvider>
	)
}

export default App