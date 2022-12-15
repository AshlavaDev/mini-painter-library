import PageHeader from "../components/PageHeader";

function PaintColour() {
  const pageInfo = {
    name: 'Paints by Colour',
    tagline: 'Paints from all companies arranged by colour'
  }

  return (
    <div>
      <PageHeader {...pageInfo} />
    </div>
  )
}

export default PaintColour;