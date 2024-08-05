import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import About from './components/pages/About';
import Portfolio from './components/pages/Portfolio';
import Contact from './components/pages/Contact';
import Resume from './components/pages/Resume';
import Header from './components/Header';
import Footer from './components/Footer';
import NotFound from './components/pages/NotFound';

export default function App() {
  return (
    <>
      <Router>
        <div className="background"></div>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/Portfolio" element={<Portfolio />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Resume" element={<Resume />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
}
