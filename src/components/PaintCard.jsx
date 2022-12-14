

function PaintCard(paint) {

  const colour = {
    background: paint.hex_colour
  }


  return (
    <div className="flex flex-col justify-between gap-2 max-w-xs w-1/5 h-96 border-2 border-black py-4 px-3 rounded">
      <div className="w-3/5 h-2/5 border border-black rounded self-center" style={colour}>

      </div>
      <h4 className="tmt-4 text-xl font-bold text-gray-900">{paint.paint_name}</h4>
      <div className="flex flex-col gap-1 items-start mt-2 max-w-sm text-gray-700">
        <p>Colour: {paint.colour_category}</p>
        <p>Paint Type: {paint.type}</p>
      </div>
      <a href={paint.link_url} target="_blank" className="self-center px-2 py-1 rounded block bg-slate-400 ">Find in Store</a>
    </div>
  )
}

export default PaintCard;