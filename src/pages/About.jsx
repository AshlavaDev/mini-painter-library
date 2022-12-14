import PageHeader from "../components/PageHeader";

function About() {

  const pageInfo = {
    name: 'About',
    tagline: 'The Mission of The Paint Atheneum'
  }

  return (
    <PageHeader {...pageInfo} />
  )
}

export default About;

