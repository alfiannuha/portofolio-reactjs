import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/project/Projects'

function App() {
  let width = window.innerWidth
  // console.log(width);
  return (
    <div style={{ backgroundColor:'#282c34' }}>
      {
        width > 500 &&
        <Navbar></Navbar>
      }
      <div className="App">
        {width > 850 ? "true" : "false"} <br/>
        {width}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="about" element={<About />} />
        </Routes>
      </div>
      {
        width < 500 &&
        <Navbar></Navbar>
      }
    </div>
  );
}

export default App;
