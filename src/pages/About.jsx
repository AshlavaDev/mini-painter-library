import PageHeader from "../components/headers/PageHeader";
import SideNav from "../components/navigation/SideNav";

function About() {

  const pageInfo = {
    name: 'About',
    tagline: 'The Mission of The Paint Atheneum'
  }

  return (
    <div>
      <PageHeader {...pageInfo} />
      <div className="flex">
        <SideNav />
          <section className="flex-grow flex flex-col items-center gap-4 py-6 px-10 ">
            <div className="max-w-prose flex flex-col gap-3">
              <h4 className="font-serif text-2xl md:text-4xl text-darkblue dark:text-golden py-2">All Your Paints, In One Place</h4>
              <p className="font-sans text-ls md:text-xl text-darkblue dark:text-offwhite">
                The Paint Antheneum was born from the desire to have a single place where all miniature paints could be found. Having to
                switch between different stores can be a pain, especially when you just want some basic information. The Paint Antheneum 
                was created to solve this. There are 1000s of paints out there and if you don't know what you are looking for, you can get 
                lost very easily. 
              </p>
            </div>
            <div className="max-w-prose flex flex-col gap-3">
              <h4 className="font-serif text-2xl md:text-4xl text-darkblue dark:text-golden py-2">Origins</h4>
              <p className="font-sans text-ls md:text-xl text-darkblue dark:text-offwhite">
                This website was created as part of a certificate the creator (that's me, Ashley) took on web development. Unsure of what to make
                a website about, Ashley looked around their desk and saw the bottles of paint and unpainted miniatures. Which is strange, given that 
                the hobby desk with the pile of grey is in an entirely different room. From there it made logical sense to create a database, from scratch,
                with every paint in it. Admittedly, a bit of a Herculean task.
              </p>
            </div>
            <div className="max-w-prose flex flex-col gap-3">
              <h4 className="font-serif text-2xl md:text-4xl text-darkblue dark:text-golden py-2">Support</h4>
              <p className="font-sans text-ls md:text-xl text-darkblue dark:text-offwhite">
                Unfortunately web things cost money. Although this started using free resources, in order to grow it requires things like domain names,
                places to host stuff securely (GitHub is great but has limitations) and the ability to have secure connections for the API that grows as
                this website hopefully does. This website will always be free to use as long as I am in charge, and hopefully I can find ways for people 
                to support the costs of the website without spending any money. For now, here is my <a href="https://ko-fi.com/ashleymorganwbdv" target="_blank"
        className="text-neogreen hover:text-golden">Kofi link</a>.
              </p>
            </div>
          </section>
      </div>
    </div>
  )
}

export default About;

