import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import TrendingPlants from './components/TrendingPlants';
import bgImage from './assests/Bg_image.png'
function App() {
  return (
    <div className="min-h-screen w-full text-white bg-center bg-cover bg-no-repeat overflow-x-hidden"
    style={{
      background:`url(${bgImage})`,
      backgroundSize:'cover'
    }}>
        
      <Navbar/>
      <HeroBanner/>
      <TrendingPlants/>
    </div>
  );
}

export default App;
