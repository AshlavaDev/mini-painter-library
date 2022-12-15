import RangeChooseButton from "../buttons/RangeChooseButton";

function ChooseRange({brand, rangeNames, fetchPaints}) {
  const ranges = rangeNames;

  return (
    <div className="py-6 flex justify-center">
      <fieldset className="flex flex-col items-center px-4 py-2">
        <h2 className="font-serif text-2xl md:text-4xl text-darkblue dark:text-offwhite text-center py-5">Choose a {brand} Range</h2>
        <legend  className="sr-only">Choose a {brand} Range</legend>
        {ranges && (
          <div className="flex flex-wrap justify-center gap-4 font-sans">
            {ranges.map(range =>(
              <RangeChooseButton range={range} fetchPaints={fetchPaints}/>
            ))}
          </div>
        )}
      </fieldset>
  </div>
  )
}

export default ChooseRange;