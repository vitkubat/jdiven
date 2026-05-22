import { useState } from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import { Sun, Moon } from 'lucide-react'
import 'leaflet/dist/leaflet.css'
import './App.css'

const TILES = {
  dark: 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
  light: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
}

const ATTRIBUTION = '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attributions">CARTO</a>'

function App() {
  const [darkMode, setDarkMode] = useState(true)

  return (
    <>
      <MapContainer
        center={[50.0755, 14.4378]}
        zoom={12}
        className="map"
      >
        <TileLayer
          key={darkMode ? 'dark' : 'light'}
          attribution={ATTRIBUTION}
          url={TILES[darkMode ? 'dark' : 'light']}
          subdomains="abcd"
          maxZoom={20}
        />
      </MapContainer>

      <div className={`theme-toggle ${darkMode ? 'dark' : 'light'}`} onClick={() => setDarkMode(!darkMode)}>
        <div className="toggle-thumb" />
        <span className={`toggle-icon ${!darkMode ? 'active' : ''}`}><Sun size={16} /></span>
        <span className={`toggle-icon ${darkMode ? 'active' : ''}`}><Moon size={16} /></span>
      </div>
    </>
  )
}

export default App