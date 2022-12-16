import { useEffect, useState } from "react";
import supabase from "./../supabaseClient"
import PageHeader from "../components/headers/PageHeader"
import SideNav from "../components/navigation/SideNav";
import FetchError from "../components/layout/FetchError";
import NewsPosts from "../components/lists/NewsPosts";

function News() {
  const pageInfo = {
    name: 'News',
    tagline: 'Updates on the website'
  }

  const [fetchError, setError] = useState(null);
  const [news, setNews] = useState(null);

  useEffect(() => { 
    const fetchNews = async () => {

      let { data, error } = await supabase
        .from('news')
        .select()
      
      if (error) {
        setError('Could not GET news');
        setNews(null);
        console.log(error);
      }
      
      if (data) {
        setNews(data);
        setError(null);
      }
    }

  fetchNews();
  },[] )

  return (
    <div>
      <PageHeader {...pageInfo} />
      <div className="flex">
        <SideNav />
        <section className="flex-grow max-w-3/5">
          <h2 className="font-serif text-2xl md:text-4xl text-darkblue dark:text-offwhite text-center py-5">Latest News</h2>
          {fetchError && (<FetchError fetchError={fetchError} />)}
          {news && (
            <NewsPosts news={news} />
          )}
        </section>
      </div>
    </div>      
  )
}

export default News;