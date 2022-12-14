import PageHeader from "../components/PageHeader";

function Contact(){
  const pageInfo = {
    name: 'Contact Us',
    tagline: 'How to get in touch'
  }


  return (
    <PageHeader {...pageInfo} />
  )
}

export default Contact;