import './App.css';
import React, {useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar2 from './Navbar2/NavBar2';
import Slider from './Slider/Slider';
import { LeftSliderData } from './Slider/LeftSliderData';
import { RightSliderData } from './Slider/RightSliderData';
import Ingredients from './Components/Story/Ingredients';
import Contacts from './Components/Contacts/Contacts';
import Symbol from './Components/Symbol/Symbol';
import Watch from './Components/Watch/Watch';


function App() {


  return (
    <>
      <Router>
          <NavBar2/>
            <Routes>
              <Route path='/' element={<Slider leftSlides={LeftSliderData} rightSlides={RightSliderData} />} />
              <Route path='/ingredients' element={<Ingredients />} />
              <Route path='/contacts' element={<Contacts />} />
              <Route path='/symbol' element={<Symbol />} />
              <Route path='/watch' element={<Watch />} />
            </Routes>
      </Router>
    </>
    
  );
}

export default App;
