import PaintCard from "./PaintCard";

function PaintList({paints}) {



  return (
    <div className="flex flex-wrap justify-center gap-6 p-4">    
      {paints.map(paint => (
        <PaintCard {...paint}/>
      ))}
    </div>
  )

}

export default PaintList;