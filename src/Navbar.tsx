function Navbar() {
    return (
      <>
        {/* component */}
        <header className="bg-gray-800">
          <nav className="container mx-auto px-6 py-3">
            <div className="flex items-center justify-between">
              <div className="text-white font-bold text-xl">
                <a href="#">Logo</a>
              </div>
              <div className="hidden md:block">
                <ul className="flex items-center space-x-8">
                  <li><a href="#" className="text-white">Home</a></li>
                  <li><a href="#" className="text-white">About</a></li>
                  <li><a href="#" className="text-white">Services</a></li>
                  <li><a href="#" className="text-white">Contact</a></li>
                </ul>
              </div>
              <div className="md:hidden">
                <button className="outline-none mobile-menu-button">
                  <svg 
                    className="w-6 h-6 text-white" 
                    fill="none" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path d="M4 6h16M4 12h16M4 18h16"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="mobile-menu hidden md:hidden">
              <ul className="mt-4 space-y-4">
                <li><a href="#" className="block px-4 py-2 text-white bg-gray-900 rounded">Home</a></li>
                <li><a href="#" className="block px-4 py-2 text-white bg-gray-900 rounded">About</a></li>
                <li><a href="#" className="block px-4 py-2 text-white bg-gray-900 rounded">Services</a></li>
                <li><a href="#" className="block px-4 py-2 text-white bg-gray-900 rounded">Contact</a></li>
              </ul>
            </div>
          </nav>
        </header>
      </>
    );
  }
  
  export default Navbar;
  