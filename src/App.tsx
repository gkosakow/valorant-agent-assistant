import { useState } from 'react'
import Maps from './components/api/Maps'
import Agents from './components/api/Agents'
import Credits from './components/Credits'
import { Box, Image } from '@chakra-ui/react'
import Players from './components/Players'

function App() {
	return (
		<Box className="app">
			<Box className="container">
				<Box className="sidebar">
					<Box className="logo">
						<Image src="/assets/valorant-logo.png" />
					</Box>
					<Box className="sidebar-content">
						<Agents />
						<Maps />
						<Players />
					</Box>
					<Credits />
				</Box>
				<Box className="app-content"></Box>
			</Box>
		</Box >
	)
}

export default App