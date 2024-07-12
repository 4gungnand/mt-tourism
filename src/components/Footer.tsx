import * as React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col items-center px-16 pt-20 pb-6 bg-white max-md:px-5">
      <div className="flex flex-col w-full max-w-[1087px] max-md:max-w-full">
        <div className="flex gap-5 px-0.5 w-full max-md:flex-wrap max-md:max-w-full">
          <div className="flex flex-col">
            <div className="text-4xl font-bold text-teal-900">MuaraTakus</div>
            <div className="mt-6 text-xl text-teal-900">
              Nikmati desa Muara Takus <br />
              bersama kami
            </div>
            <div className="flex gap-3 mt-8 max-md:pr-5">
              <img
                loading="lazy"
                srcSet="..."
                className="shrink-0 w-6 aspect-square"
              />
              <img
                loading="lazy"
                srcSet="..."
                className="shrink-0 w-6 aspect-square"
              />
              <img
                loading="lazy"
                srcSet="..."
                className="shrink-0 w-6 aspect-square"
              />
              <img
                loading="lazy"
                srcSet="..."
                className="shrink-0 w-6 aspect-square"
              />
              <img
                loading="lazy"
                srcSet="..."
                className="shrink-0 w-6 aspect-square"
              />
            </div>
          </div>
          <div className="flex-auto my-auto max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[24%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow text-xl text-teal-900 max-md:mt-10">
                  <div className="text-2xl font-bold">Menu</div>
                  <div className="mt-7">Home</div>
                  <div className="mt-5">Destinesi</div>
                  <div className="mt-5">Tentang Kami</div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[34%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col text-xl text-teal-900 max-md:mt-10">
                  <div className="text-2xl font-bold">Pemesanan</div>
                  <div className="mt-6">Perjalanan Personal</div>
                  <div className="mt-3.5">Perjalanan Grup</div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[42%] max-md:ml-0 max-md:w-full">
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

export default Footer;