function RangeChooseButton({range, fetchPaints}) {
  
  return (
    <div>
      <input
        type="radio"
        name="ColourOption"
        value={range}
        id={range}
        className="peer hidden"
        onClick={() => fetchPaints(range)}
      />

      <label
        htmlFor={range}
        className="flex cursor-pointer items-center justify-center rounded-md border border-darkblue py-2 px-3
          bg-darkblue text-offwhite 
          peer-checked:bg-offwhite peer-checked:text-darkblue"
        >
          <p className="text-sm md:text-lg">{range}</p>
        </label>
    </div>
  )
}

export default RangeChooseButton;