import './App.css';
import Navbar from './Components/Navbar';
import {Routes, Route} from 'react-router-dom'
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
function App() {
  return (
    <div className="App">
    <Navbar/>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route  exact path="/about"  element={<About />} />
      <Route exact path="/contact"  element={<Contact />} />
    </Routes>
    </div>
  );
}

export default App;
