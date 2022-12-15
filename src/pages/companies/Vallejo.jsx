import { useState } from "react";
import PageHeader from "../../components/headers/PageHeader";
import ChooseRange from "../../components/lists/ChooseRange";
import PaintList from "../../components/lists/PaintList";
import supabase from "../../supabaseClient";

function Vallejo() {
  const pageInfo = {
    name: 'Vallejo',
    tagline: 'Spanish',
    range: ['Model Color']
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
      <ChooseRange brand={pageInfo.name} rangeNames={pageInfo.range} fetchPaints={fetchPaints} />
      <div>
        {fetchError && (<FetchError fetchError={fetchError} />)}
        {paints && (
          <PaintList paints={paints} />
        )}
        </div>
  </div>
  )
}

export default Vallejo;