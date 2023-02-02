import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Maps from './components/api/Maps'
import Agents from './components/api/Agents'

function App() {
  return (
    <div className="App">
      <Maps></Maps>
      <Agents></Agents>
    </div>
  )
}
 
export default App