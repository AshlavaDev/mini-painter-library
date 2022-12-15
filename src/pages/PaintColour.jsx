import { useState } from "react";
import ColourChooser from "../components/ColourChooser";
import PageHeader from "../components/headers/PageHeader";

function PaintColour() {
  const pageInfo = {
    name: 'Paints by Colour',
    tagline: 'Paints from all companies arranged by colour'
  }

  const [colour, setColour] = useState(null);

  const getColourChoice = () => {

  }

  return (
    <div>
      <PageHeader {...pageInfo} />
      <ColourChooser />
    </div>
  )
}

export default PaintColour;