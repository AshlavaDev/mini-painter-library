import NewsPost from "../layout/NewsPost";

function NewsPosts({news}) {

  return (
    <div className="flex flex-col-reverse gap-6 py-4 px-20">    
      {news.map(post => (
        <NewsPost key="{post.id}" {...post}/>
      ))}
    </div>
  )
}

export default NewsPosts;