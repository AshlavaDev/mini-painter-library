function ContactForm() {

  return (
    <section className="mb-32 mt-12 text-center text-darkblue dark:text-offwhite font-sans">
      <div className="max-w-[700px] mx-auto px-3 lg:px-6">
        <h2 className="text-3xl font-serif mb-12">Contact us</h2>
        <form name="contact" method="POST" data-netlify="true">
          <div className="form-group mb-6">
            <input type="text" className="form-control block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-darkblue
              bg-offwhite bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-neogreen focus:outline-none" id="exampleInput7"
              placeholder="Name"/>
          </div>
          <div className="form-group mb-6">
            <input type="email" className="form-control block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-darkblue
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-neogreen focus:outline-none" id="exampleInput8"
              placeholder="Email address"/>
          </div>
          <div className="form-group mb-6">
            <textarea className="
              form-control
              block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-darkblue
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-neogreen focus:outline-none
            " id="exampleFormControlTextarea13" rows="3" placeholder="Message"></textarea>
          </div>
          <button type="submit" className="
            w-full
            px-6
            py-2.5
            bg-darkblue dark:bg-offwhite
            text-offwhite dark:text-darkblue
            font-medium
            text-xs
            leading-tight
            uppercase
            rounded
            shadow-md
            hover:bg-offwhite hover:dark:bg-neogreen hover:shadow-lg
            focus:bg-offwhite focue:dark:bg-darkblue focus:shadow-lg focus:outline-none focus:ring-0
            active:bg-darkblue active:shadow-lg
            transition
            duration-150
            ease-in-out">Send</button>
        </form>
      </div>
    </section>
  )
}

export default ContactForm;