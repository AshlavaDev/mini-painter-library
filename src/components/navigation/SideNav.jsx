import { Link } from "react-router-dom";

function SideNav() {

  return (
    <div className="max-w-1/5 h-screen sticky top-0 border-r-4  border-darkblue hidden md:block">
      <div className="px-2 py-6 flex flex-col justify-between text-darkblue font-sans">
        <span className="block w-32 h-10 rounded-lg"></span>
        <h4 className="text-lg md:text-xl">Menu</h4>
        <nav className="flex flex-col mt-6 space-y-1">
            <Link to="/" className="ml-2 pl-1 text-sm md:text-lg hover:bg-darkblue  hover:text-offwhite ">Home</Link>
            <Link to="/about" className="ml-2 pl-1 text-sm md:text-lg hover:bg-darkblue  hover:text-offwhite ">About</Link>
            <details className="group [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center rounded-md cursor-pointer hover:bg-darkblue  hover:text-offwhite ">
                <span className="ml-2 text-sm md:text-lg py-2" >Paints</span>
                <span className="ml-auto transition duration-300 shrink-0 group-open:-rotate-180">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
                  </svg>
                </span>
              </summary>
              <nav className="my-1 ml-6 flex flex-col gap-1">
                <Link to="/companies" className="text-sm hover:bg-darkblue  hover:text-offwhite ">By Company</Link>
                <Link to="/paintcolour" className="text-sm hover:bg-darkblue  hover:text-offwhite ">By Colour</Link>
                <Link to="/painttype" className="text-sm hover:bg-darkblue  hover:text-offwhite ">By Type</Link>
              </nav>
            </details>
            <Link to="/news" className="ml-2 pl-1 text-sm md:text-lg hover:bg-darkblue  hover:text-offwhite " >News</Link>
            <Link to="/contact" className="ml-2 pl-1 text-sm md:text-lg hover:bg-darkblue  hover:text-offwhite ">Contact</Link>
        </nav>
      </div>
    </div>
  )
}

export default SideNav;