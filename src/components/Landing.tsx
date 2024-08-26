import Image from "next/image";
import { handleSmoothScroll } from "styles/handleSmoothScroll";
import { useTypewriter, Cursor } from "react-simple-typewriter";

export default function Landing() {
  const [text] = useTypewriter({
    words: ["Destinasi Wisata", "Merchandise", "Paket Wisata"],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 50,
    delaySpeed: 2000,
  });

  return (
    <div className="flex flex-col justify-center relative overflow-hidden min-h-[1100px] max-md:min-h-[900px]" id="landing-section">
      <Image
        priority
        src="/images/candi.jpeg"
        alt="Candi Muara Takus"
        className="object-cover absolute inset-0 w-full h-full"
        width={1536}
        height={2048}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ijo to-transparent opacity-70"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-ijo to-transparent opacity-70"></div>
      <div className="relative flex justify-center items-center w-full px-16 max-md:px-5 max-md:py-16">
        <div className="flex flex-col w-full max-w-[1200px] my-32 max-md:mb-10">
          <div className="text-6xl font-bold font-serif text-white mt-24 max-md:text-4xl max-md:mt-10">
            Telusuri {text} <br />
            <span className="text-lime-200">Muara Takus</span>
          </div>
          <div className="mt-20 w-[798px] max-md:mt-10">
            <div className="flex gap-5 max-lg:flex-col">
              <div className="w-[68%] max-md:w-full">
                <div className="text-2xl font-sans text-white max-md:mt-10">
                  Kami akan membantu anda untuk <br />
                  mendapatkan lokasi wisata yang indah dan
                  <br />
                  memaksimalkan pengalaman anda.
                </div>
              </div>
              <a href="#paket-section" className="flex flex-col ml-5 max-lg:ml-0 w-[32%] max-md:ml-0 max-md:w-full h" onClick={handleSmoothScroll}>
                <div className="flex gap-5 self-stretch my-auto max-md:mt-10 transition duration-300 hover:scale-105">
                  <div className="flex justify-center items-center bg-lime-200 h-[50px] rounded-[100px] w-[50px]">
                    <Image
                      src="/Arrow.svg"
                      width={25}
                      height={25}
                      alt="Arrow"
                    />
                  </div>
                  <div className="flex-auto my-auto text-2xl font-bold text-white">
                    Mari Telusuri
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}