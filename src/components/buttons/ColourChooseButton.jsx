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
        for={colour}
        className="flex cursor-pointer items-center justify-center rounded-md border border-darkblue py-2 px-3
          bg-darkblue dark:bg-offwhite text-offwhite dark:text-darkblue 
          peer-checked:dark:border-golden peer-checked:dark:bg-golden peer-checked:dark:text-darkblue"
        >
          <p className="text-sm md:text-lg">{colour}</p>
        </label>
    </div>
  )
}

export default ColourChooseButton;