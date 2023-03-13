import { useState } from 'react';
import "./assets/fonts/Tungsten-Bold/Tungsten-Bold.ttf";
import { Box } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Maps from './components/Maps';
import Sidebar from './components/Sidebar';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Loading firebaseConfig with env variables
const firebaseConfig = {
	apiKey: import.meta.env.VITE_API_KEY,
	authDomain: import.meta.env.VITE_AUTH_DOMAIN,
	projectId: import.meta.env.VITE_PROJECT_ID,
	storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
	messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
	appId: import.meta.env.VITE_APP_ID,
	measurementId: import.meta.env.VITE_MEASUREMENT_ID,
};

const darkTheme = createTheme({
	palette: {
		mode: 'dark',
	}
});

function App() {

	// Initializing the firebase app and analytics
	const app = initializeApp(firebaseConfig);
	const analytics = getAnalytics(app);

	// Initializing the firestore from the app config
	const db = getFirestore(app);

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