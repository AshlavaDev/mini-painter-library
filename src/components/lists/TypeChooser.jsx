import TypeChooseButton from "../buttons/TypeChooseButton";

function TypeChooser({fetchPaints}) {
  const types = ['Acrylic', 'Acrylic Ink', 'Air', 'Contrast', 'Special', 'Spray', 'Wash'];

  return (
    <div className="py-6 flex justify-center max-w-2xl">
      <fieldset className="flex flex-col items-center px-4 py-2">
        <h2 className="font-serif text-2xl md:text-4xl text-darkblue  text-center py-5">Choose a Type Category</h2>
        <legend  className="sr-only">Choose a Type Category</legend>
        {types && (
          <div className="flex flex-wrap justify-center gap-4 font-sans">
            {types.map(type =>(
              <TypeChooseButton fetchPaints={fetchPaints} type={type}/>
            ))}
          </div>
        )}
      </fieldset>
    </div>
  )
}

export default TypeChooser;