import PageHeader from "../components/headers/PageHeader"

function News() {
  const pageInfo = {
    name: 'News',
    tagline: 'Updates on the website'
  }

  return (
    <PageHeader {...pageInfo} />
  )
}

export default News;