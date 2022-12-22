

function PaintCard(paint) {

  const colour = {
    background: paint.hex_colour
  }


  return (
    <div className="flex flex-col justify-between gap-2 min-w-full h-96 border-2 border-black py-4 px-3 rounded-lg bg-red-100 hover:shadow-2xl hover:shadow-slate-800 font-sans text-sm md:text-base">
      <div className="w-2/5 h-2/5 border border-black rounded self-center" style={colour}>
        {/* This div is a box for paint colours */}
      </div>
      <h4 className="tmt-4 text-lg md:text-xl">{paint.paint_name}</h4>
      <div className="flex flex-col gap-1 items-start mt-2">
        <p>Company: {paint.company}</p>
        <p>Range: {paint.range}</p>
        <p>Colour: {paint.colour_category}</p>
        <p>Metallic: {paint.is_metallic && <span>Yes</span>} {!paint.is_metallic && <span>No</span>}</p>
        <p>Paint Type: {paint.type}</p>
        <p>Currently Made: {paint.is_current && <span>Yes</span>} {!paint.is_current && <span>No</span>}</p>
      </div>
      <a href={paint.link_url} target="_blank" className="self-center px-2 py-1 rounded-md block bg-darkblue border border-darkblue text-offwhite hover:bg-offwhite hover:text-darkblue ">Find in Store</a>
    </div>
  )
}

export default PaintCard;