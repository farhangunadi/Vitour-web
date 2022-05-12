import './App.css';
import Navbar2 from './components/Navbar2';
import Beranda from "./components/Beranda";
import Rekomendasi from "./components/Recommendation/Recommendation";
import VirtualTour from "./components/Virtual Tour/VirtualTour";
import About from "./components/About";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Bandung from './components/Virtual Tour/City/Bandung/bandung';
import Jakarta from './components/Virtual Tour/City/Jakarta/jakarta';
import Purwakarta from './components/Virtual Tour/City/Purwakarta/purwakarta';
import Punclut from './components/Virtual Tour/City/Bandung/Wisata/Punclut';
import { Kuliner } from './components/Info Pariwisata/Kuliner/Kuliner';
import Budaya from './components/Info Pariwisata/Budaya/Budaya';
import { Merch } from './components/Info Pariwisata/Toko Merch/Merch';
import { ItemPage } from './components/Recommendation/ItemPage';


function App() {
    return ( 
    <Router>
        <Navbar2 />
         <Routes>
             <Route path="/" element={<Beranda/>}/>
             <Route path="/Store" element={<Rekomendasi/>}/>
             <Route path="/item" element={<ItemPage />}/>
             <Route path="/!#" element={<ItemPage />}/>
             <Route path="/virtualtour" element={<VirtualTour/>}/>
             <Route path="/about" element={<About/>}/>
             <Route path="/virtualtour/bandung" element={<Bandung />}/>
             <Route path="/virtualtour/jakarta" element={<Jakarta />}/>
             <Route path="/virtualtour/purwakarta" element={<Purwakarta />}/>
             <Route path="/virtualtour/bandung/punclut" element={<Punclut />}/>
             <Route path="/virtualtour/bandung/kuliner" element={<Kuliner />}/>
             <Route path="/virtualtour/bandung/budaya" element={<Budaya />}/>
             <Route path="/virtualtour/bandung/merchstore" element={<Merch />}/>
         </Routes>
         
         {/* <Beranda /> */}
    </Router>
    
    );
}

export default App;