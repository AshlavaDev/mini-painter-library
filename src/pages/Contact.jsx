import PageHeader from "../components/headers/PageHeader";
import SideNav from "../components/navigation/SideNav";

function Contact(){
  const pageInfo = {
    name: 'Contact Us',
    tagline: 'How to get in touch'
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

export default Contact;