import { useState } from "react";
import ColourChooser from "../components/lists/ColourChooser";
import FetchError from "../components/layout/FetchError";
import PageHeader from "../components/headers/PageHeader";
import PaintList from "../components/lists/PaintList";
import supabase from "../supabaseClient";
import SideNav from "../components/navigation/SideNav";

function PaintColour() {
  const pageInfo = {
    name: 'Paints by Colour',
    tagline: 'Paints from all companies arranged by colour'
  }

  const [fetchError, setError] = useState(null);
  const [paints, setPaints] = useState(null);

  const fetchPaints = async (colour) => {

    let { data, error } = await supabase
      .from('master')
      .select()
      .eq('colour_category', colour)
    
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
        <section className="flex-grow flex flex-col items-center px-3">
          <ColourChooser brand={pageInfo.name} rangeNames={pageInfo.range} fetchPaints={fetchPaints} />
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

export default PaintColour;