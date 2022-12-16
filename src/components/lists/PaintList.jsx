import PaintCard from "../layout/PaintCard";

function PaintList({paints}) {



  return (
    <div className="flex flex-wrap justify-center gap-6 py-4 px-8">    
      {paints.map(paint => (
        <PaintCard key="{paint.link_url}" {...paint}/>
      ))}
    </div>
  )

}

export default PaintList;