function ColourChooseButton({fetchPaints, colour}){

  return (
    <div>
      <input
        type="radio"
        name="ColourOption"
        value={colour}
        id={colour}
        className="peer hidden"
        onClick={() => fetchPaints(colour.toLowerCase())}
      />

      <label
        htmlFor={colour}
        className="flex cursor-pointer items-center justify-center rounded-md border border-darkblue py-2 px-3
          bg-darkblue  text-offwhite 
          peer-checked:bg-offwhite peer-checked:text-darkblue"
        >
          <p className="text-sm md:text-lg">{colour}</p>
        </label>
    </div>
  )
}

export default ColourChooseButton;