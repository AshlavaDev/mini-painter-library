import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TopNav from './components/navigation/TopNav';
import TheFooter from './components/navigation/TheFooter';
import About from './pages/About';
import Companies from './pages/Companies';
import GamesWorkshop from './pages/companies/GamesWorkshop';
import Vallejo from './pages/companies/Vallejo';
import Contact from './pages/Contact';
import Home from './pages/Home';
import News from './pages/News';
import PaintColour from './pages/PaintColour';

function App() {
  
  return (
    <div className="bg-offwhite dark:bg-darkblue flex flex-col justify-between min-h-screen">
      <TopNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/companies" element={<Companies />} />
          <Route path="/paintcolour" element={<PaintColour />} />
          <Route path="/about" element={<About />} />
          <Route path='/news' element={<News />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/companies/gamesworkshop" element={<GamesWorkshop />} />
          <Route path="/companies/vallejo" element={<Vallejo />} />
        </Routes>
      <TheFooter />
    </div>
  )
}

export default App;
