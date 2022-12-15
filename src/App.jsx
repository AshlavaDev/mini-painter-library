import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TopNav from './components/TopNav';
import About from './pages/About';
import Companies from './pages/Companies';
import GamesWorkshop from './pages/companies/GamesWorkshop';
import Vallejo from './pages/companies/Vallejo';
import Contact from './pages/Contact';
import Home from './pages/Home';
import News from './pages/News';
import supabase from './supabaseClient';

function App() {

  const[fetchError, setError] = useState(null);
  const [paints, setPaints] = useState(null);

  useEffect(() => {
    const fetchPaints = async () => {
      let { data: citadel_air, error } = await supabase
        .from('citadel_air')
        .select()
  
      if (error) {
        setError('Could not GET paints');
        setPaints(null);
        console.log(error);
      }
  
      if (citadel_air) {
        setPaints(citadel_air);
        setError(null);
      }
    }
  
    fetchPaints();
  }, [])
  
  return (
    <div class="bg-offwhite dark:bg-darkblue">
      <TopNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/about" element={<About />} />
        <Route path='/news' element={<News />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/companies/gamesworkshop" element={<GamesWorkshop />} />
        <Route path="/companies/vallejo" element={<Vallejo />} />
      </Routes>
    </div>
  )
}

export default App;
