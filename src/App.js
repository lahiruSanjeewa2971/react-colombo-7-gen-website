import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar2 from './Navbar2/NavBar2';
import Slider from './Slider/Slider';
import { LeftSliderData } from './Slider/LeftSliderData';
import { RightSliderData } from './Slider/RightSliderData';


function App() {
  return (
    <Router>
      <NavBar2/>
      <Slider leftSlides={LeftSliderData} rightSlides={RightSliderData}/>
      {/* <NavBar /> */}
      {/* <div style={{background: 'red'}}>
        <h3>hi</h3>
      </div> */}
    </Router>
  );
}

export default App;
