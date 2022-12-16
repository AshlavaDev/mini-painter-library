import ContactForm from "../components/ContactForm";
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
        <section className="flex-grow flex flex-col items-center">
          <p className="font-serif text-xl md:text-2xl max-w-prose text-darkblue dark:text-offwhite text-center py-5">
            There may be issues with the site, if so please use this form and be as detailed as possible. 
            Or, if you have any comments or suggestions, feel free to share them as well. Remember, this is a work in progress.
          </p>
          <ContactForm />
        </section>
      </div>
    </div>
  )
}

export default Contact;