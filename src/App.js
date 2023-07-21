import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Sidebar from './components/Sidebar';
import HeatExchanger from './products/HeatExchanger';
import HeatingCoil from './products/HeatingCoil';
import IndustrialAgitator from './products/IndustrialAgitator';
import JacketedReactor from './products/JacketedReactor';
import PressureVessel from './products/PressureVessel';
import ReactionVessel from './products/ReactionVessel';
import StorageTank from './products/StorageTank';
import VaccumOven from './products/VaccumOven';
import AboutUs from './pages/AboutUs';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/about' element={<AboutUs/>}/>
        </Routes>
      
      <Routes>
      <Route
            path="/service/*"
            element={
              <div className="pcontainer">
                <Sidebar>
                  <Routes>
                    <Route path="/he" element={<HeatExchanger />} />
                    <Route path="/hc" element={<HeatingCoil />} />
                    <Route path="/ia" element={<IndustrialAgitator />} />
                    <Route path="/jr" element={<JacketedReactor />} />
                    <Route path="/pv" element={<PressureVessel />} />
                    <Route path="/rv" element={<ReactionVessel />} />
                    <Route path="/st" element={<StorageTank />} />
                    <Route path="/vo" element={<VaccumOven />} />
                  </Routes>
                </Sidebar>
              </div>
            }
          />
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
