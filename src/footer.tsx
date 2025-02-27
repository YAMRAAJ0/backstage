function Footer() {
    return (
      <>
        {/* component */}
        <footer className="relative py-20 flex flex-col items-center bg-cyan-900 overflow-hidden md:py-40">
          <div className="relative z-[1] container m-auto px-6 md:px-12">
            <div className="m-auto md:w-10/12 lg:w-8/12 xl:w-6/12">
              <div className="flex flex-wrap items-center justify-between md:flex-nowrap">
                <div className="w-full space-x-12 flex justify-center text-gray-300 sm:w-7/12 md:justify-start">
                  <ul className="list-disc list-inside space-y-8">
                    <li><a href="#" className="hover:text-sky-400 transition">Home</a></li>
                    <li><a href="#" className="hover:text-sky-400 transition">About</a></li>
                    <li><a href="#" className="hover:text-sky-400 transition">Guide</a></li>
                    <li><a href="#" className="hover:text-sky-400 transition">Blocks</a></li>
                    <li><a href="#" className="hover:text-sky-400 transition">Contact</a></li>
                    <li><a href="#" className="hover:text-sky-400 transition">Terms of Use</a></li>
                  </ul>
  
                  <ul role="list" className="space-y-8">
                    <li>
                      <a href="#" className="flex items-center space-x-3 hover:text-sky-400 transition">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5" viewBox="0 0 16 16">
                          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                        </svg>
                        <span>Github</span>
                      </a>
                    </li>
                    {/* Additional social links go here */}
                    <li>
                      <a href="#" className="flex items-center space-x-3 hover:text-sky-400 transition">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5" viewBox="0 0 16 16">
                          <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                        </svg>
                        <span>Twitter</span>
                      </a>
                    </li>
                    {/* More social media links */}
                    <li>
                      <a href="#" className="flex items-center space-x-3 hover:text-sky-400 transition">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5" viewBox="0 0 16 16">
                          <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
                        </svg>
                        <span>YouTube</span>
                      </a>
                    </li>
                    {/* Add remaining links as needed */}
                    <li>
                      <a href="#" className="flex items-center space-x-3 hover:text-sky-400 transition">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5" viewBox="0 0 16 16">
                          <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.395 6.75 7.944v-5.617H4.733V8.05h2.016V6.163c0-1.943 1.14-3.007 2.877-3.007.835 0 1.68.146 1.68.146v1.845h-.945c-.932 0-1.222.577-1.222 1.165v1.353h2.083l-.333 2.327H8.66v5.617C13.074 15.445 16 12.067 16 8.049z"/>
                        </svg>
                        <span>Facebook</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-20 text-center text-gray-300">
            <p>&copy; {new Date().getFullYear()} Your Company. All Rights Reserved.</p>
          </div>
        </footer>
      </>
    );
  }
  
  export default Footer;
  