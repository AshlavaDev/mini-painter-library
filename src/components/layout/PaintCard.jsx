

function PaintCard(paint) {

  const colour = {
    background: paint.hex_colour
  }


  return (
    <div className="flex flex-col justify-between gap-2 w-1/4 min-w-full md:min-w-0 h-96 border-2 border-black py-4 px-3 rounded-lg bg-offwhite hover:shadow-2xl hover:shadow-neogreen/80 font-sans text-sm md:text-base">
      <div className="w-2/5 h-2/5 border border-black rounded self-center" style={colour}>

      </div>
      <h4 className="tmt-4 text-lg md:text-xl">{paint.paint_name}</h4>
      <div className="flex flex-col gap-1 items-start mt-2 max-w-sm">
        <p>{paint.company}</p>
        <p>{paint.range}</p>
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