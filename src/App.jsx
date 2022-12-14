import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TopNav from './components/TopNav';
import Home from './pages/Home';
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
    <div>
      <TopNav />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App;
