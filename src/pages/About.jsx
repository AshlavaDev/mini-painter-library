import PageHeader from "../components/headers/PageHeader";

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

