import { Link } from "react-router-dom";

function TheFooter() {

  return (
    <footer aria-label="Site Footer" className="mt-auto border-t-4 border-darkblue ">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between text-darkblue ">
          <Link to="/" className="font-display text-xl md:text-3xl ">The Paint Atheneum</Link>
          <p className="mt-4 text-center text lg:mt-0 lg:text-right font-serif">
          Copyright &copy; 2022. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default TheFooter;