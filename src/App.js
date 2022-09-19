import './App.css';
import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/project/Projects'

function App() {
  let width = window.innerWidth
  // console.log(width);
  useEffect(() => {
    document.title = "Portofolio Nuha"
  }, [])
  return (
    <div style={{ backgroundColor:'#282c34' }}>
      <div className="App">
        {
          width > 500 &&
          <Navbar></Navbar>
        }
        {/* {width} */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="about" element={<About />} />
        </Routes>
        {
          width < 500 &&
          <Navbar></Navbar>
        }
      </div>
    </div>
  );
}

export default App;
