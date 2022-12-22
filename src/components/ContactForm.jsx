function ContactForm() {

  return (
    <section className="mb-32 mt-12 text-center text-darkblue font-sans text-lg md:text-xl">
      <div className="max-w-[1/2] mx-auto px-3 lg:px-6">
        <h2 className="text-3xl font-serif mb-12">Contact us</h2>
        <form name="contact" method="POST" className="w-full">
        <input type="hidden" name="form-name" value="contact" />
          <div className="form-group mb-6 w-full">
            <label htmlFor="name" className="pb-2">Name</label>
            <input type="text" className="form-control block 
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-darkblue
              bg-white bg-clip-padding
              border border-solid border-darkblue
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-neogreen focus:outline-none"
              name="name"
              id="name"
              placeholder="Name"/>
          </div>
          <div className="form-group mb-6">
            <label htmlFor="message" className="pb-2">Message</label>
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
              border border-solid border-darkblue
              rounded
              transition
              ease-in-out
              m-0
              focus:text-darkblue focus:bg-white focus:border-neogreen focus:outline-none" 
              name="message"
              id="message"
              rows="3" placeholder="Message"></textarea>
          </div>
          <button type="submit" className="
            w-full
            px-6
            py-2.5
            bg-darkblue 
            text-offwhite
            font-medium
            text-xs
            leading-tight
            uppercase
            rounded
            shadow-md
            hover:bg-offwhite hover:shadow-lg hover:text-darkblue hover:border hover:border-darkblue focus:border focus:border-neogreen focus:text-darkblue
            focus:bg-offwhite  focus:shadow-lg focus:outline-none focus:ring-0
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