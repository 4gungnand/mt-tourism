import { useState } from "react";
import { handleSmoothScroll } from "styles/handleSmoothScroll";
import Image from 'next/image';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed z-50 bg-ijo opacity-70 w-full text-2xl font-bold text-white">
      <div className="my-6 mx-10 flex items-center justify-between">
        <a href="#landing-section" className="text-3xl" onClick={handleSmoothScroll}>
         <Image src="/logos/logo.svg" alt="logo" width={50} height={50} />
        </a> 
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
              className="relative transition duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-white after:transition-width after:duration-300 hover:after:w-full hover:text-gray-400"
            >
              Destinasi
            </a>
          </div>
          <div>
            <a
              href="#umkm-section"
              onClick={handleSmoothScroll}
              className="relative transition duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-white after:transition-width after:duration-300 hover:after:w-full hover:text-gray-400"
            >
              Merch
            </a>
          </div>
          <div>
            <a
              href="#paket-section"
              onClick={handleSmoothScroll}
              className="relative transition duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-white after:transition-width after:duration-300 hover:after:w-full hover:text-gray-400"
            >
              Paket
            </a>
          </div>
          <div className="flex">
            <a
              href="#footer-section"
              onClick={handleSmoothScroll}
              className="relative transition duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-white after:transition-width after:duration-300 hover:after:w-full hover:text-gray-400"
            >
              Tentang Kami
            </a>
            <svg aria-hidden="true" height="9" viewBox="0 0 6 6" width="9"><path d="M1.25215 5.54731L0.622742 4.9179L3.78169 1.75597H1.3834L1.38936 0.890915H5.27615V4.78069H4.40513L4.41109 2.38538L1.25215 5.54731Z" fill="white"></path></svg>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="bg-transparent mt-2">
          <div className="flex flex-col md:hidden font-normal text-white">
            <div className="hover:bg-teal-800 py-2">
              <a
                href="#destinasi-section"
                onClick={handleSmoothScroll}
                className="relative ml-10"
              >
                Destinasi
              </a>
            </div>
            <div  className="hover:bg-teal-800 py-2">
              <a
                href="#umkm-section"
                onClick={handleSmoothScroll}
                className="relative ml-10"
              >
                Merch
              </a>
            </div>
            <div  className="hover:bg-teal-800 py-2">
              <a
                href="#paket-section"
                onClick={handleSmoothScroll}
                className="relative ml-10"
              >
                Paket Wisata
              </a>
            </div>
            <div  className="hover:bg-teal-800 py-2">
              <a
                href="#footer-section"
                onClick={handleSmoothScroll}
                className="relative ml-10"
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
