import PaintCard from "../layout/PaintCard";

function PaintList({paints}) {



  return (
    <div className="flex flex-wrap justify-center gap-6 p-4">    
      {paints.map(paint => (
        <PaintCard key="{paint.link_url}" {...paint}/>
      ))}
    </div>
  )

}

export default PaintList;