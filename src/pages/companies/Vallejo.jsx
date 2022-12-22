import { useState } from "react";
import PageHeader from "../../components/headers/PageHeader";
import ChooseRange from "../../components/lists/ChooseRange";
import PaintList from "../../components/lists/PaintList";
import supabase from "../../supabaseClient";
import SideNav from "../../components/navigation/SideNav";

function Vallejo() {
  const pageInfo = {
    name: 'Vallejo',
    tagline: 'A big paint company',
    range: ['Model Color', 'Game Color']
  }

  const [fetchError, setError] = useState(null);
  const [paints, setPaints] = useState(null);

  const fetchPaints = async (range) => {
    console.log(range);
    let { data, error } = await supabase
      .from('vallejo')
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
          <h2 className="font-serif text-3xl md:text-6xl text-darkblue text-center py-5">Vallejo</h2>
          <img src="/assets/logos/logovallejo.jpg" width="150px" height="85" alt="Vallejo Logo"/>
          <ChooseRange brand={pageInfo.name} rangeNames={pageInfo.range} fetchPaints={fetchPaints} />
          <div className="w-[80%]">
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

export default Vallejo;