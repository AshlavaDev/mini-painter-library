import PageHeader from "../../components/PageHeader";

function GamesWorkshop() {
  const pageInfo = {
    name: 'Games Workshop',
    tagline: 'British'
  }


  return (
    <PageHeader {...pageInfo} />
  )
}

export default GamesWorkshop;