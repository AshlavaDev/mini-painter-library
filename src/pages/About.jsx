import PageHeader from "../components/headers/PageHeader";
import SideNav from "../components/navigation/SideNav";

function About() {

  const pageInfo = {
    name: 'About',
    tagline: 'The Mission of The Paint Atheneum'
  }

  return (
    <div>
      <PageHeader {...pageInfo} />
      <div className="flex">
        <SideNav />
        <section className="flex-grow">
          
        </section>
      </div>
    </div>
  )
}

export default About;

