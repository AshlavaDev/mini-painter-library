import { Link } from "react-router-dom";
import PageHeader from "../components/headers/PageHeader";
import SideNav from "../components/navigation/SideNav";

function Companies() {
  const pageInfo = {
    name: 'Companies',
    tagline: 'A list of companies that produce paints for miniatures'
  }

  return (
    <div>
      
      <PageHeader {...pageInfo} />
      <div className="flex">
       <SideNav />
       <section className="flex-grow px-3">
        <div className="flex gap-4 justify-center py-5">
          <Link to='/companies/gamesworkshop' className="font-sans text-xl md:text-3xl py-2 px-3 border border-darkblue rounded
          bg-darkblue  text-offwhite  hover:bg-offwhite  hover:text-darkblue ">Games Workshop</Link>
          <Link to='/companies/vallejo' className="font-sans text-xl md:text-3xl py-2 px-3 border border-darkblue rounded
          bg-darkblue  text-offwhite  hover:bg-offwhite  hover:text-darkblue ">Vallejo</Link>
        </div>
       </section>
      </div>

    </div>
  )

}

export default Companies;