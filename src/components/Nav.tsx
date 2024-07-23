import { useState } from "react";
import { handleSmoothScroll } from "styles/handleSmoothScroll";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed z-50 bg-teal-900 w-full text-2xl font-bold text-white">
      <div className="my-3 mx-10 flex justify-between items-center">
        <div className="text-3xl">
          MuaraTakus
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
        <div className="hidden md:flex gap-5 font-normal">
          <div>
            <a
              href="#destinasi-section"
              onClick={handleSmoothScroll}
              className="relative transition duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-white after:transition-width after:duration-300 hover:after:w-full"
            >
              Destinasi
            </a>
          </div>
          <div>
            <a
              href="#umkm-section"
              onClick={handleSmoothScroll}
              className="relative transition duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-white after:transition-width after:duration-300 hover:after:w-full"
            >
              Merch
            </a>
          </div>
          <div>
            <a
              href="#footer-section"
              onClick={handleSmoothScroll}
              className="relative transition duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-white after:transition-width after:duration-300 hover:after:w-full"
            >
              Tentang Kami
            </a>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="bg-white mt-2">
          <div className="flex flex-col md:hidden font-normal text-black">
            <div className="hover:bg-teal-100 py-2">
              <a
                href="#destinasi-section"
                onClick={handleSmoothScroll}
                className="relative ml-10 transition duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-black after:transition-width after:duration-300 hover:after:w-full"
              >
                Destinasi
              </a>
            </div>
            <div  className="hover:bg-teal-100 py-2">
              <a
                href="#umkm-section"
                onClick={handleSmoothScroll}
                className="relative ml-10 transition duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-black after:transition-width after:duration-300 hover:after:w-full"
              >
                Merch
              </a>
            </div>
            <div  className="hover:bg-teal-100 py-2">
              <a
                href="#footer-section"
                onClick={handleSmoothScroll}
                className="relative ml-10 transition duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-black after:transition-width after:duration-300 hover:after:w-full"
              >
                Tentang Kami
              </a>
            </div>
          </div>
        </div>

      )}
    </nav>
  );
};

export default Nav;
