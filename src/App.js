import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './Navbar/NavBar';
import NavBar2 from './Navbar2/NavBar2';

function App() {
  return (
    <Router>
      <NavBar2 />
      {/* <NavBar /> */}
      {/* <div style={{background: 'red'}}>
        <h3>hi</h3>
      </div> */}
    </Router>
  );
}

export default App;
