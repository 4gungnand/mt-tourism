import Nav from "./Nav";

export default function Landing() {
  return (
    <div className="flex overflow-hidden relative flex-col justify-center self-stretch min-h-[900px]">
      <img
        loading="lazy"
        src="/images/candi.jpeg"
        className="object-cover absolute inset-0 size-full"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#004400] to-[#002200] opacity-60"></div>
      <div className="flex relative justify-center items-center px-16 py-16 w-full shadow-sm max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col mb-32 w-full max-w-[1034px] max-md:mb-10 max-md:max-w-full">
          <Nav />
          <div className="mt-40 text-6xl font-bold font-serif text-white max-md:mt-10 max-md:max-w-full max-md:text-4xl">
            <span className="">Mari Telusuri</span>
            <br />
            <span className="">Destinasi Wisata </span>
            <span className="text-lime-200">Muara Takus</span>
          </div>
          <div className="mt-20 max-w-full w-[798px] max-md:mt-10 font-normal">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[68%] max-md:ml-0 max-md:w-full">
                <div className="text-2xl font-sans text-white max-md:mt-10 max-md:max-w-full">
                  Kami akan membantu anda untuk <br />
                  mendapatkan lokasi wisata yang indah dan
                  <br />
                  memaksimalkan pengalaman anda.
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[32%] max-md:ml-0 max-md:w-full">
                <div className="flex gap-5 self-stretch my-auto max-md:mt-10">
                  <div className="flex justify-center items-center px-4 bg-lime-200 h-[60px] rounded-[100px] w-[60px]">
                    <img
                      loading="lazy"
                      src="/Arrow.svg"
                      className=""
                    />
                  </div>
                  <div className="flex-auto my-auto text-2xl font-bold text-white">
                    <a href="#paket-section">
                      Mari Telusuri
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}