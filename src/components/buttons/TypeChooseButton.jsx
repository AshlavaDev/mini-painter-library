function TypeChooseButton({fetchPaints, type}){

  return (
    <div>
      <input
        type="radio"
        name="ColourOption"
        value={type}
        id={type}
        className="peer hidden"
        onClick={() => fetchPaints(type.toLowerCase())}
      />

      <label
        htmlFor={type}
        className="flex cursor-pointer items-center justify-center rounded-md border border-darkblue py-2 px-3
          bg-darkblue  text-offwhite 
          peer-checked:bg-offwhite peer-checked:text-darkblue"
        >
          <p className="text-sm md:text-lg">{type}</p>
        </label>
    </div>
  )
}

export default TypeChooseButton;