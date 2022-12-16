import PageHeader from "../components/headers/PageHeader"
import SideNav from "../components/navigation/SideNav";

function News() {
  const pageInfo = {
    name: 'News',
    tagline: 'Updates on the website'
  }

  return (
    <div>
      <PageHeader {...pageInfo} />
      <div className="flex">
        <SideNav />
        <section className="flex-grow max-w-3/5">
          
        </section>
      </div>
    </div>      
  )
}

export default News;