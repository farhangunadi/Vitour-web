import './App.css';
import Navbar2 from './components/Navbar2';
import Beranda from "./components/Beranda";
import Rekomendasi from "./components/Rekomendasi";
import VirtualTour from "./components/Virtual Tour/VirtualTour";
import About from "./components/About";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Bandung from './components/Virtual Tour/City/Bandung/bandung';
import Punclut from './components/Virtual Tour/City/Bandung/Wisata/Punclut';


function App() {
    return ( 
    <Router>
        <Navbar2 />
         <Routes>
             <Route path="/" element={<Beranda/>}/>
             <Route path="/Rekomendasi" element={<Rekomendasi/>}/>
             <Route path="/virtualtour" element={<VirtualTour/>}/>
             <Route path="/about" element={<About/>}/>
             <Route path="/virtualtour/bandung" element={<Bandung />}/>
             <Route path="/virtualtour/bandung/punclut" element={<Punclut />}/>
         </Routes>
         {/* <Beranda /> */}
    </Router>
    
    );
}

export default App;