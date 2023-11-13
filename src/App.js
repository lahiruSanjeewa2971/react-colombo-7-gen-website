import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './Navbar/NavBar';

function App() {
  return (
    <Router>
      <NavBar />
      {/* <div style={{background: 'red'}}>
        <h3>hi</h3>
      </div> */}
    </Router>
  );
}

export default App;
