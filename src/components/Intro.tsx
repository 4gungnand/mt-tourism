import Image from 'next/image';

export default function Intro() {
  return (
    <div className="flex flex-col justify-center bg-white">
      <div className="flex justify-center items-center px-16 py-20 w-full bg-white max-md:px-5 max-md:max-w-full">
        <div className="mt-24 mb-16 max-w-full w-[969px] max-md:my-10">
          <div className="flex gap-10 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[57%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow items-end px-10 pt-20 h-[800px] pb-px w-full text-md font-bold leading-9 text-black rounded-3xl max-md:mt-10 max-md:max-w-full relative overflow-hidden">
                <Image
                  src="/images/intro.jpg"
                  alt="intro"
                  fill
                  style={{objectFit: 'cover'}}
                />
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[43%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col self-stretch my-auto font-bold text-teal-900 max-md:mt-10">
                <div className="text-5xl max-md:text-4xl">
                  Muara Takus
                  <br />
                  untuk Penjelajah
                </div>
                <div className="mt-8 text-xl leading-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
                <div className="justify-center self-start px-14 py-2.5 mt-7 text-2xl whitespace-nowrap bg-lime-200 rounded-[30px] max-md:px-5">
                  Mulai
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}