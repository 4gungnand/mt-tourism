import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex flex-col items-center px-6 pt-20 pb-6 bg-white max-md:px-5" id="footer-section">
      <div className="flex flex-col w-full max-w-[1087px]">
        <div className="flex flex-wrap gap-8 w-full">
          <div className="flex flex-col w-full max-w-md">
            <div className="text-4xl font-bold text-teal-900">MuaraTakus</div>
            <div className="mt-6 text-xl text-teal-900">
              Nikmati desa Muara Takus <br />
              bersama kami
            </div>
            <div className="flex gap-3 mt-8">
              {/* Sosial media tim KKN-PPM UGM 2024 */}
              <a href="https://www.instagram.com/kamparmemancar" target="_blank" rel="noopener noreferrer">
                <img
                  loading="lazy"
                  srcSet="/Instagram.svg"
                  className="shrink-0 w-12 aspect-square"
                />
              </a>
              <a href="https://www.tiktok.com/@kampar_memancar" target="_blank" rel="noopener noreferrer">
                <img
                  loading="lazy"
                  srcSet="TikTok.svg"
                  className="shrink-0 w-12 aspect-square"
                />
              </a>
            </div>
          </div>
          <div className="flex flex-wrap flex-auto my-auto max-w-full gap-2">
            <div className="flex flex-col w-full sm:w-[calc(33%-10px)]">
              <div className="text-2xl font-bold text-teal-900">Menu</div>
              <div className="mt-7 text-xl text-teal-900">Home</div>
              <div className="mt-5 text-xl text-teal-900">Destinasi</div>
            </div>
            <div className="flex flex-col w-full sm:w-[calc(33%-10px)] mt-10 sm:mt-0">
              <div className="text-2xl font-bold text-teal-900">Pemesanan</div>
              <div className="mt-6 text-xl text-teal-900">Perjalanan Personal</div>
              <div className="mt-3.5 text-xl text-teal-900">Perjalanan Grup</div>
            </div>
            <div className="flex flex-col w-full sm:w-[calc(33%-10px)] mt-10 sm:mt-0">
              <div className="text-2xl font-bold text-teal-900">Informasi Lanjutan</div>
              <div className="mt-4 text-xl text-teal-900">Terms & Condition</div>
              <div className="mt-5 text-xl text-teal-900">Privacy Policy</div>
            </div>
          </div>
        </div>
        <div className="mt-16 bg-teal-900 h-[3px] w-full" />
        <div className="self-center mt-5 text-sm text-teal-900">
          Copyright @2024 Kamparmemancar
        </div>
      </div>
    </div>
  );
}
