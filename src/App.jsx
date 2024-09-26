import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Map from './screens/Map/Map'
import './App.css'
import Home from './screens/Home';
import Fight from './screens/Fight/Fight';

function App() {

  return (
     <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/map" element={<Map />} />
            {/* <Route path="/levels" element={<Level />} /> */}
            <Route path="/fight" element={<Fight />} />
          </Routes>
     </Router>
  )
}

export default App