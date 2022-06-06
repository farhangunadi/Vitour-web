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
import Alun2 from './components/Virtual Tour/City/Bandung/Wisata/Alun2';
import KawahPutih from './components/Virtual Tour/City/Bandung/Wisata/kawahPutih';
import { ItemPage } from './components/Recommendation/ItemPage';
import KulinerBDG from './components/Virtual Tour/City/Bandung/InfoBandung/KulinerBDG';
import MerchBDG from './components/Virtual Tour/City/Bandung/InfoBandung/MerchBDG';
import KulinerJKT from './components/Virtual Tour/City/Jakarta/InfoJakarta/KulinerJKT';
import Monas from './components/Virtual Tour/City/Jakarta/Wisata/Monas';
import BudayaBDG from './components/Virtual Tour/City/Bandung/InfoBandung/BudayaBDG';
import BudayaJKT from './components/Virtual Tour/City/Jakarta/InfoJakarta/BudayaJKT';
import MerchJKT from './components/Virtual Tour/City/Jakarta/InfoJakarta/MerchJKT';
import Comingsoon from './components/ComingSoon/comingsoon';


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
             <Route path="/virtualtour/jakarta/kuliner" element={<KulinerJKT />}/>
             <Route path="/virtualtour/jakarta/budaya" element={<BudayaJKT />}/>
             <Route path="/virtualtour/jakarta/merch" element={<MerchJKT />}/>
             <Route path="/virtualtour/jakarta/monas" element={<Monas />}/>
             <Route path="/virtualtour/purwakarta" element={<Purwakarta />}/>
             <Route path="/virtualtour/bandung/alun-alun" element={<Alun2 />}/>
             <Route path="/virtualtour/bandung/kawah-putih" element={<KawahPutih />}/>
             <Route path="/virtualtour/bandung/kuliner" element={<KulinerBDG />}/>
             <Route path="/virtualtour/bandung/budaya" element={<BudayaBDG />}/>
             <Route path="/virtualtour/bandung/merchstore" element={<MerchBDG />}/>
             <Route path="/comingsoon" element={<Comingsoon />}/>
         </Routes>
         
         {/* <Beranda /> */}
    </Router>
    
    );
}

export default App;