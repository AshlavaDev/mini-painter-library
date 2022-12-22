import { useState } from "react";
import TypeChooser from "../components/lists/TypeChooser";
import FetchError from "../components/layout/FetchError";
import PageHeader from "../components/headers/PageHeader";
import PaintList from "../components/lists/PaintList";
import supabase from "../supabaseClient";
import SideNav from "../components/navigation/SideNav";

function PaintType() {
  const pageInfo = {
    name: 'Paints by Type',
    tagline: 'Paints from all companies arranged by type'
  }

  const [fetchError, setError] = useState(null);
  const [paints, setPaints] = useState(null);

  const fetchPaints = async (type) => {

    let { data, error } = await supabase
      .from('master')
      .select()
      .eq('type', type)
    
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
          <TypeChooser brand={pageInfo.name} rangeNames={pageInfo.range} fetchPaints={fetchPaints} />
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

export default PaintType;