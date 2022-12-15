import supabase from "./../../supabaseClient"
import { useEffect, useState } from "react";
import PageHeader from "../../components/PageHeader";
import PaintList from "../../components/PaintList";

function GamesWorkshop() {
  const pageInfo = {
    name: 'Games Workshop',
    tagline: 'British'
  }


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
      <PageHeader {...pageInfo} />
      <div>
        {fetchError && (<p>{fetchError}</p>)}
        {paints && (
          <PaintList paints={paints} />
        )}
      </div>
    </div>
  )
}

export default GamesWorkshop;