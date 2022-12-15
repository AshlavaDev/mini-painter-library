import ColourChooseButton from "./ColourChooseButton";

function ColourChooser() {
  const colours = ['White', 'Black', 'Blue', 'Bone', 'Brass', 'Bronze', 'Brown', 'Copper', 'Flesh',
    'Gold', 'Green', 'Grey', 'Orange', 'Pink', 'Purple', 'Red', 'Silver', 'Turquoise', 'Yellow']

  return (
    <div className="py-6 flex justify-center">
      <fieldset className="flex flex-col items-center px-4 py-2">
        <h2 className="font-serif text-2xl md:text-4xl text-darkblue dark:text-offwhite text-center py-5">Choose a Colour Category</h2>
        <legend  className="sr-only">Choose a Colour Category</legend>
        {colours && (
          <div className="flex flex-wrap justify-center gap-4 font-sans">
            {colours.map(colour =>(
              <ColourChooseButton colour={colour} />
            ))}
          </div>
        )}
      </fieldset>
    </div>
  )
}

export default ColourChooser;