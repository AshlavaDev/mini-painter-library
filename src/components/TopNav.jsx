import { Link } from "react-router-dom";

function TopNav() {

  return (
    <header className="text-darkblue dark:text-offwhite">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center justify-around gap-8 px-4 sm:px-6 lg:px-8">
        <Link to="/" className="font-display text-xl md:text-2xl">The Paint Atheneum</Link>
        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Site Nav" class="hidden md:block">
            <ul className="flex items-center gap-6 font-serif">
              <li>
                <Link className="hover:bg-darkblue hover:text-offwhite hover:dark:bg-golden hover:dark:text-darkblue transition text-lg px-2 py-1" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="hover:bg-darkblue hover:text-offwhite hover:dark:bg-golden hover:dark:text-darkblue transition text-lg px-2 py-1" to="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className="hover:bg-darkblue hover:text-offwhite hover:dark:bg-golden hover:dark:text-darkblue transition text-lg px-2 py-1" to="/companies">
                  Companies
                </Link>
              </li>
              <li>
                <Link className="hover:bg-darkblue hover:text-offwhite hover:dark:bg-golden hover:dark:text-darkblue transition text-lg px-2 py-1" to="/paintcolour">
                  Paint by Colour
                </Link>
              </li>      
              <li>
                <Link className="hover:bg-darkblue hover:text-offwhite hover:dark:bg-golden hover:dark:text-darkblue transition text-lg px-2 py-1" to="/news">
                  News
                </Link>
              </li>  
              <li>
                <Link className="hover:bg-darkblue hover:text-offwhite hover:dark:bg-golden hover:dark:text-darkblue transition text-lg px-2 py-1" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )

} 

export default TopNav;