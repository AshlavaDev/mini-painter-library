import supabase from "./../../supabaseClient"
import { useEffect, useState } from "react";
import PageHeader from "../../components/headers/PageHeader";
import PaintList from "../../components/lists/PaintList";
import ChooseRange from "../../components/lists/ChooseRange";
import SideNav from "../../components/navigation/SideNav";

function GamesWorkshop() {
  const pageInfo = {
    name: 'Citadel - Games Workshop',
    tagline: 'The Biggest Company in Miniatures',
    range: ['Air', 'Base', 'Dry', 'Layer', 'Spray', 'Contrast', 'Shade']
  }
 
  const [fetchError, setError] = useState(null);
  const [paints, setPaints] = useState(null);

  const fetchPaints = async (range) => {
    console.log(range);
    let { data, error } = await supabase
      .from('citadel')
      .select()
      .eq('range', range)
    
    if (error) {
      setError('Could not GET paints');
      setPaints(null);
      console.log(error);
    }
    
    if (data) {
      setPaints(data);
      setError(null);
    }
  }
    
  return (
    <div>
      <PageHeader {...pageInfo} />
      <div className="flex">
        <SideNav />
        <section className="flex-grow flex flex-col items-center">
          <h2 className="font-serif text-3xl md:text-6xl text-darkblue text-center py-3">Games Workshop</h2>
          <img src="/assets/logos/gwlogo.png" width="150px" height="85" alt="Games Workshop Logo"/>
          <ChooseRange brand={pageInfo.name} rangeNames={pageInfo.range} fetchPaints={fetchPaints} />
          <div>
            {fetchError && (<FetchError fetchError={fetchError} />)}
            {paints && (
              <PaintList paints={paints} />
            )}
          </div>
        </section>
      </div>
    </div>
  )
}

export default GamesWorkshop;