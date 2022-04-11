import './App.css';
import Navbar2 from './components/Navbar2';
import Beranda from "./components/Beranda";
import Rekomendasi from "./components/Rekomendasi";
import VirtualTour from "./components/VirtualTour";
import About from "./components/About";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';

function App() {
    return ( 
    <Router>
        <Navbar2 />
         <Routes>
             <Route path="/beranda" element={<Beranda/>}/>
             <Route path="/Rekomendasi" element={<Rekomendasi/>}/>
             <Route path="/virtualtour" element={<VirtualTour/>}/>
             <Route path="/about" element={<About/>}/>
         </Routes>
         <Header />
    </Router>
    
    );
}

export default App;