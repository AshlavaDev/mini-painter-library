import SiteHeader from "../components/headers/SiteHeader";
import SideNav from "../components/navigation/SideNav";

function Home () {
  

  return (
    <div>
      <SiteHeader />
      <div className="flex">
       <SideNav />
       <section className="flex-grow">
        <h2>The Paint Library</h2>
       </section>
      </div>
    </div>

  )
}

export default Home;