function SiteHeader() {

  return (
    <section className="bg-dark-hero bg-no-repeat bg-center bg-cover text-darkblue opacity-80">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-3xl text-center bg-golden py-8 px-5 rounded-3xl ">
          <h1 className="text-4xl font-display sm:text-6xl">
            The Paint Atheneum
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg sm:text-2xl sm:leading-relaxed font-serif">
            A Library of Paints for Miniatures
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto" href="/get-started">
              Get Started
            </a>

            <a className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
              href="/about">
              Learn More
            </a>
          </div>
        </div>
      </div>
  </section>
  )
  
}

export default SiteHeader;