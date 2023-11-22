import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar2 from './Navbar2/NavBar2';
import Slider from './Slider/Slider';
import { LeftSliderData } from './Slider/LeftSliderData';
import { RightSliderData } from './Slider/RightSliderData';
import Ingredients from './Story/Ingredients'


function App() {
  return (
    <>
      <Router>
          <NavBar2/>
            <Routes>
              <Route path='/' element={<Slider leftSlides={LeftSliderData} rightSlides={RightSliderData} />} />
              <Route path='/ingredients' element={<Ingredients />} />
             
            </Routes>
      </Router>
    </>
    
  );
}

export default App;
