import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Home from './components/home/Home';
import About from './components/about/About';
import Resume from './components/resume/Resume';


function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/projects" element={<Projects />} /> */}
        <Route path="/resume" element={<Resume/>} /> 
      </Routes>
    </Router>
  );
}

export default App;
