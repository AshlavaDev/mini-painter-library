import PaintCard from "../layout/PaintCard";
import { v4 as uuidv4 } from 'uuid';

function PaintList({paints}) {

  return (
    <div className="grid grid-cols-1 grid-flow-row lg:grid-cols-3 gap-6 py-4 px-8 min-w-full">    
      {paints.map(paint => (
        <PaintCard key={uuidv4()} {...paint}/>
      ))}
    </div>
  )

}

export default PaintList;