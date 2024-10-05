export default function Header() {
    return (
      <>
        <nav
          className="flex items-center justify-between flex-wrap bg-stone-300 p-6"
          dir="rtl"
        >
          <div className="flex items-center flex-shrink-0 text-slate-800 mr-6">
            <span className="font-semibold text-xl tracking-tight">
              Macrame Jewelry
            </span>
          </div>
  
          {/* Mobile menu button */}
          <div className="block lg:hidden">
            <button
              className="flex items-center px-3 py-2 border rounded text-slate-700 border-stone-400 hover:text-white hover:border-white"
              onClick={() => {
                const menu = document.getElementById("mobile-menu");
                menu.classList.toggle("hidden");
              }}
            >
              <svg
                className="fill-current h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
  
          {/* Links for both large and mobile */}
          <div
            id="mobile-menu"
            className="w-full block flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block"
          >
            <div className="text-sm lg:flex lg:flex-row lg:items-center text-right lg:space-x-4 space-x-reverse lg:space-x-reverse">
              <a
                href="#collections"
                className="block mt-4 lg:inline-block lg:mt-0 text-slate-700 hover:text-white mr-4"
              >
                קולקציה
              </a>
              <a
                href="#information"
                className="block mt-4 lg:inline-block lg:mt-0 text-slate-700 hover:text-white mr-4"
              >
                מידע נוסף
              </a>
              <a
                href="#contact"
                className="block mt-4 lg:inline-block lg:mt-0 text-slate-700 hover:text-white"
              >
                צרו קשר
              </a>
            </div>
          </div>
        </nav>
      </>
    );
  }
  