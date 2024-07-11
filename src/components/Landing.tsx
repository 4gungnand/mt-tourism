import Nav from './Nav';

const Landing = () => {
  return (
    <div className="flex overflow-hidden relative flex-col justify-center items-center px-16 py-16 border border-black border-solid min-h-[900px] max-md:px-5">
      <img
        loading="lazy"
        src="/images/ (2).jpeg"
        className="object-cover absolute inset-0 size-full"
        alt='Muara Takus'
      />
      <div className="flex relative flex-col w-full max-w-[1034px] max-md:max-w-full">
        <Nav />
        <div className="mt-40 text-6xl font-bold text-lime-200 max-md:mt-10 max-md:max-w-full max-md:text-4xl">
          <span className="">Mari Telusuri</span>
          <br />
          <span className="">Destinasi Wisata </span>
          <span className="text-lime-200">Muara Takus</span>
        </div>
        <div className="mt-20 max-w-full w-[698px] max-md:mt-10">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[68%] max-md:ml-0 max-md:w-full">
              <div className="text-2xl font-bold text-white max-md:mt-10 max-md:max-w-full">
                Kami akan membantu anda untuk <br />
                mendapatkan lokasi wisata yang indah dan
                <br />
                memaksimalkan pengalaman anda.
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[32%] max-md:ml-0 max-md:w-full">
              <div className="flex gap-5 self-stretch my-auto max-md:mt-10">
                <div className="flex justify-center items-center px-4 bg-lime-200 h-[60px] rounded-[100px] w-[60px]">
                  {/* Create a right arrow */} 
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>               
                </div>
                <div className="flex-auto my-auto text-2xl font-bold text-white">
                  Mari Telusuri
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;