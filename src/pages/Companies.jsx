import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";

function Companies() {
  const pageInfo = {
    name: 'Companies',
    tagline: 'A list of companies that produce paints for miniatures'
  }

  return (
    <div>
      <PageHeader {...pageInfo} />
      
      <Link to='/companies/gamesworkshop'>Games Workshop</Link>
      <Link to='/companies/vallejo'>Vallejo</Link>
    </div>
  )

}

export default Companies;