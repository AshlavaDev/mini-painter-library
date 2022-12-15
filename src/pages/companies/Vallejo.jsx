import PageHeader from "../../components/headers/PageHeader";

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