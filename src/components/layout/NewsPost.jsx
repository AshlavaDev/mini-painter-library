function NewsPost(post) {

  return (
    <div className="block rounded-md border border-darkblue bg-darkblue  p-8 shadow-xl text-offwhite ">
        <h3 className="mt-3 text-xl md:text-2xl font-bold ">{post.title}</h3>

        <p className="mt-4 md:text-lg ">
          {post.content}
        </p>
        <p className="mt-4 md:text-lg ">Date Posted: {post.date}</p>
    </div>
  )
}

export default NewsPost;