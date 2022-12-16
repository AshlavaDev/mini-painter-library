import SiteHeader from "../components/headers/SiteHeader";
import SideNav from "../components/navigation/SideNav";

function Home () {
  

  return (
    <div>
      <SiteHeader />
      <div className="flex">
       <SideNav />
       <section className="flex-grow">
        <h2 className="font-serif text-2xl md:text-4xl text-darkblue dark:text-offwhite text-center py-5">The Paint Library</h2>
       </section>
      </div>
    </div>

  )
}

export default Home;