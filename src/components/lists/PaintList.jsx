import PaintCard from "../layout/PaintCard";

function PaintList({paints}) {

//flex flex-wrap justify-center

  return (
    <div className="grid grid-cols-1 grid-flow-row lg:grid-cols-3 gap-6 py-4 px-8 min-w-full">    
      {paints.map(paint => (
        <PaintCard key="{paint.link_url}" {...paint}/>
      ))}
    </div>
  )

}

export default PaintList;