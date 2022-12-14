import PageHeader from "../../components/PageHeader";

function Vallejo() {
  const pageInfo = {
    name: 'Vallejo',
    tagline: 'Spanish'
  }


  return (
    <PageHeader {...pageInfo} />
  )
}

export default Vallejo;