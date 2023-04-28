import { createContext, useState } from 'react';
import "./assets/fonts/Tungsten-Bold/Tungsten-Bold.ttf";
import { Box } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import MapsPanel from './components/MapsPanel';
import Sidebar from './components/Sidebar';
import { Analytics } from '@vercel/analytics/react';


const darkTheme = createTheme({
	palette: {
		mode: 'dark',
	}
});

export const UserAuthContext = createContext<any>(null);

function App() {
	const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

	return (
		<ThemeProvider theme={darkTheme}>
			<UserAuthContext.Provider value={[isAuthenticated, setIsAuthenticated]}>
				<Box className="app">
					<Sidebar />
					<Box className="app-content">
						<MapsPanel />
					</Box>
				</Box >
			</UserAuthContext.Provider>
			<Analytics />
		</ThemeProvider >
	)
}

export default App