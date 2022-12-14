
import { useEffect, useState } from 'react'
import PaintCard from './components/PaintCard';
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
      <h1 className='text-center text-4xl'>React App Paint Library</h1>
      {fetchError && (<h4 className="text-center text-2xl text-green-800">{fetchError}</h4>)}
        {paints && (
          <div>
            <h2 className="text-2xl text-center ">Paints</h2>
            <div className='flex gap-4 flex-wrap justify-center'>
            {paints.map(paint => (
              <PaintCard {...paint} />
            ))}
            </div>
          </div>
        )}
    </div>
  )
}

export default App;
