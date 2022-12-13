
import { useEffect, useState } from 'react'
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
          <div className="text-center text-lg">
            <h2 className="text-2xl">Paints</h2>
            {paints.map(paint => (
              <p>{paint.paint_name}</p>
            ))}
          </div>
        )}
    </div>
  )
}

export default App
