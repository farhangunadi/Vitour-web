import "./App.css";
import React, { useState } from "react";
import Navbar2 from "./components/Navbar2";
import Beranda from "./components/Beranda";
import Rekomendasi from "./components/Recommendation/Recommendation";
import VirtualTour from "./components/Virtual Tour/VirtualTour";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { ItemPage } from "./components/Recommendation/ItemPage";
import Comingsoon from "./components/ComingSoon/comingsoon";
import ApiTest from "./components/API test/ApiTest";
import City from "./components/Virtual Tour/City/DetailCity";
import Detail_Item from "./components/API test/Detail_Item";
import Destination from "./components/Virtual Tour/Destination/Destination";
import Budaya from "./components/Info Pariwisata/Budaya/Budaya";
import Kuliner from "./components/Info Pariwisata/Kuliner/Kuliner";
import Login from "./components/LoginRegister/Login";
import Register from "./components/LoginRegister/Register";
import Profile from "./components/Profile/UserProfile";
import Store from "./components/Store Page/Store";
import { DetailItem } from "./components/Store Page/DetailItem";
import Protected from "./components/ProtectedRoute";

function App() {
  // const [token, setToken] = useState("");
  // const [isLoggedIn, setIsLoggedIn] = useState[false];
  // setTokenSession(token);
  if(sessionStorage.getItem('token')) {
    console.log(sessionStorage.getItem('token'));
  }
  
  return (
    <Router>
      <Navbar2 />
      <Routes>
        {/* <Route path="/" element={<Detail_Item />} /> */}
        <Route path="/profile" element={<Protected> <Profile /> </Protected>}/>
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Beranda />} />
        {/* <Route path="/Store" element={<Rekomendasi />} /> */}
        <Route path="/item" element={<ItemPage />} />
        <Route path="/store" element={<Store />} />
        <Route path="/store/item/:id" element={<DetailItem />} />
        <Route path="/!#" element={<ItemPage />} />
        <Route path="/virtualtour" element={<VirtualTour />} />
        <Route path="/about" element={<About />} />
        <Route path="/city/:id" element={<City />} />
        <Route path="/destination/:id" element={<Destination />} />
        <Route path="/culture" element={<Budaya />} />
        <Route path="/culinary" element={<Kuliner />} />
        {/* <Route path="/virtualtour/bandung" element={<Bandung />} />
        <Route path="/virtualtour/jakarta" element={<Jakarta />} />
        <Route path="/virtualtour/jakarta/kuliner" element={<KulinerJKT />} />
        <Route path="/virtualtour/jakarta/budaya" element={<BudayaJKT />} />
        <Route path="/virtualtour/jakarta/merch" element={<MerchJKT />} />
        <Route path="/virtualtour/jakarta/monas" element={<Monas />} />
        <Route path="/virtualtour/purwakarta" element={<Purwakarta />} />
        <Route path="/virtualtour/bandung/alun-alun" element={<Alun2 />} />
        <Route
          path="/virtualtour/bandung/kawah-putih"
          element={<KawahPutih />}
        />
        <Route path="/virtualtour/bandung/kuliner" element={<KulinerBDG />} />
        <Route path="/virtualtour/bandung/budaya" element={<BudayaBDG />} />
        <Route path="/virtualtour/bandung/merchstore" element={<MerchBDG />} /> */}
        <Route path="/comingsoon" element={<Comingsoon />} />
      </Routes>
      {/* <Beranda /> */}
    </Router>
  );
}

export default App;
