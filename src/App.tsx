import { useState } from 'react'
import Maps from './components/api/Maps'
import Agents from './components/api/Agents'

function App() {
  return (
    <div className="App">
      <Maps></Maps>
      <Agents/>
    </div>
  )
}
 
export default App