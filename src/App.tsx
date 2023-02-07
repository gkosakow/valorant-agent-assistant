import { useState } from 'react'
import Maps from './components/api/Maps'
import Agents from './components/api/Agents'

function App() {
	return (
		<div className="app">
			<div className="app-header">HEADER</div>
			<div className="app-content">
				<div className="app-sidebar">SIDEBAR</div>
				<div className="app-stuff">STUFF
					<Agents />
					<Maps />
				</div>
			</div>
		</div>
	)
}

export default App