import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Contact from './components/Contact/Contact';
import Experience from './components/Experience/Experience';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Portfolio from './components/Portfolio/Portfolio';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <div className="App">
      {/* <div className='text-9xl font-bold'>Hello</div> */}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/portfolio-web" element={<Home />} />
          <Route path="/portfolio-web/experience" element={<Experience />} />
          <Route path="/portfolio-web/contact" element={<Contact />} />
          <Route path="/portfolio-web/skills" element={<Skills />} />
          <Route path="/portfolio-web/portfolio" element={<Portfolio />} />
        </Routes>
      </BrowserRouter>
      {/* <Home /> */}
      {/* <Experience /> */}
      {/* <Skills /> */}
      {/* <Portfolio /> */}
      {/* <Contact /> */}
      <Footer />
    </div>
  );
}

export default App;
