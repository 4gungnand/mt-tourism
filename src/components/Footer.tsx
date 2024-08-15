export default function Footer() {
  return (
    <div className="flex flex-col items-center px-16 pt-20 pb-6 bg-white max-md:px-5" id="footer-section">
      <div className="flex flex-col w-full max-w-[1087px] max-md:max-w-full">
        <div className="flex gap-5 px-0.5 w-full max-md:flex-wrap max-md:max-w-full">
          <div className="flex flex-col">
            <div className="text-4xl font-bold text-teal-900">MuaraTakus</div>
            <div className="mt-6 text-xl text-teal-900">
              Nikmati desa Muara Takus <br />
              bersama kami
            </div>
            <div className="flex gap-3 mt-8 max-md:pr-5">
              <a href="https://www.tiktok.com/@kampar_memancar" target="_blank" rel="noopener noreferrer">
                <img
                  loading="lazy"
                  srcSet="TikTok.svg"
                  className="shrink-0 w-6 aspect-square"
                />
              </a>
              <a href="https://www.instagram.com/kamparmemancar" target="_blank" rel="noopener noreferrer">
                <img
                  loading="lazy"
                  srcSet="/Instagram.svg"
                  className="shrink-0 w-6 aspect-square"
                />
              </a>
              <a href="https://twitter.com/kamparmemancar" target="_blank" rel="noopener noreferrer">
                <img
                  loading="lazy"
                  srcSet="/Twitter.svg"
                  className="shrink-0 w-6 aspect-square"
                />
              </a>
              <a href="https://www.youtube.com/kamparmemancar" target="_blank" rel="noopener noreferrer">
                <img
                  loading="lazy"
                  srcSet="YouTube.svg"
                  className="shrink-0 w-6 aspect-square"
                />
              </a>
              <a href="https://www.facebook.com/kamparmemancar" target="_blank" rel="noopener noreferrer">
                <img
                  loading="lazy"
                  srcSet="/Facebook.svg"
                  className="shrink-0 w-6 aspect-square"
                />
              </a>
            </div>
          </div>
          <div className="flex-auto my-auto max-md:max-w-full ml-40">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[20%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow text-xl text-teal-900 max-md:mt-10">
                  <div className="text-2xl font-bold">Menu</div>
                  <div className="mt-7">Home</div>
                  <div className="mt-5">Destinasi</div>
                  <a href="/articles" className="mt-5">Artikel</a>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[29%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col text-xl text-teal-900 max-md:mt-10">
                  <div className="text-2xl font-bold">Pemesanan</div>
                  <div className="mt-6">Perjalanan Personal</div>
                  <div className="mt-3.5">Perjalanan Grup</div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[32%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col text-xl text-teal-900 max-md:mt-10">
                  <div className="text-2xl font-bold">Informasi Lanjutan</div>
                  <div className="mt-4">Terms & Condition</div>
                  <div className="mt-5">Privacy Policy</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shrink-0 mt-16 bg-teal-900 h-[3px] max-md:mt-10 max-md:max-w-full" />
        <div className="self-center mt-5 text-sm text-teal-900">
          Copyright @2024 Kamparmemancar
        </div>
      </div>
    </div>
  );
}