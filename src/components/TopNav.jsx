import { Link } from "react-router-dom";

function TopNav() {

  return (
    <header className="bg-white">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <Link to="/">Miniature Paint Library</Link>
        <div class="flex flex-1 items-center justify-end md:justify-between">
        <nav aria-label="Site Nav" class="hidden md:block">
          <ul class="flex items-center gap-6 text-sm">
            <li>
              <Link class="text-gray-500 transition hover:text-gray-500/75" href="/">
                Home
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