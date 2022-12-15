import { Link } from "react-router-dom";
import PageHeader from "../components/headers/PageHeader";

function Companies() {
  const pageInfo = {
    name: 'Companies',
    tagline: 'A list of companies that produce paints for miniatures'
  }

  return (
    <div>
      <PageHeader {...pageInfo} />
      
      <div className="flex gap-4 justify-center py-5">
        <Link to='/companies/gamesworkshop' className="font-sans text-xl md:text-3xl py-2 px-3 border border-darkblue dark:border-offwhite rounded
        bg-darkblue dark:bg-offwhite text-offwhite dark:text-darkblue hover:bg-offwhite hover:dark:bg-darkblue hover:text-darkblue hover:dark:text-offwhite ">Games Workshop</Link>
        <Link to='/companies/vallejo' className="font-sans text-xl md:text-3xl py-2 px-3 border border-darkblue dark:border-offwhite rounded
        bg-darkblue dark:bg-offwhite text-offwhite dark:text-darkblue hover:bg-offwhite hover:dark:bg-darkblue hover:text-darkblue hover:dark:text-offwhite ">Vallejo</Link>
      </div>
    </div>
  )

}

export default Companies;