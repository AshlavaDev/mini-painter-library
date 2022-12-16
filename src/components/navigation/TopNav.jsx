import { useState } from "react";
import { Link } from "react-router-dom";

function TopNav() {

  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <header className="flex items-center justify-around py-8 px-4 text-darkblue  border-b-4 border-darkblue  bg-offwhite font-serif">
      <Link to="/" className="font-display text-2xl md:text-4xl">The Paint Atheneum</Link>
      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)} 
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>

          </div>

          <div className={isNavOpen ? "showMenuNav bg-offwhite " : "hideMenuNav"}>
            <div
              className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)} 
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 bg-offwhite  ">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <div className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px] ">
              <Link className="hover:bg-darkblue hover:text-offwhite transition text-lg px-2 py-1" to="/" onClick={() => setIsNavOpen(false)}>
                Home
              </Link>
              <Link className="hover:bg-darkblue hover:text-offwhite transition text-lg px-2 py-1" to="/about" onClick={() => setIsNavOpen(false)}>
                About
              </Link>
              <Link className="hover:bg-darkblue hover:text-offwhite transition text-lg px-2 py-1" to="/companies" onClick={() => setIsNavOpen(false)}>
                Companies
              </Link>            
              <Link className="hover:bg-darkblue hover:text-offwhite transition text-lg px-2 py-1" to="/paintcolour" onClick={() => setIsNavOpen(false)}>
                Colours
              </Link>
              <Link className="hover:bg-darkblue hover:text-offwhite transition text-lg px-2 py-1" to="/news" onClick={() => setIsNavOpen(false)}>
                News
              </Link>
              <Link className="hover:bg-darkblue hover:text-offwhite transition text-lg px-2 py-1" to="/contact" onClick={() => setIsNavOpen(false)}>
                Contact
              </Link>
            </div>
          </div>
        </section>

        <div className="DESKTOP-MENU hidden space-x-8 lg:flex">
          <Link className="hover:bg-darkblue hover:text-offwhite transition text-xl px-2 py-1" to="/">
            Home
          </Link>
          <Link className="hover:bg-darkblue hover:text-offwhite transition text-xl px-2 py-1" to="/about">
            About
          </Link>
          <Link className="hover:bg-darkblue hover:text-offwhite transition text-xl px-2 py-1" to="/companies">
            Companies
          </Link>            
          <Link className="hover:bg-darkblue hover:text-offwhite transition text-xl px-2 py-1" to="/paintcolour">
            Colours
          </Link>
          <Link className="hover:bg-darkblue hover:text-offwhite transition text-xl px-2 py-1" to="/news">
            News
          </Link>
          <Link className="hover:bg-darkblue hover:text-offwhite transition text-xl px-2 py-1" to="/contact">
            Contact
          </Link>
        </div>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </header>
  )

} 

export default TopNav;