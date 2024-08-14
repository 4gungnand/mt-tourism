import Image from 'next/image';

export default function Intro() {
  return (
    <div className="flex flex-col justify-center bg-white">
      <div className="flex justify-center items-center px-16 py-20 w-full bg-white max-md:px-5 max-md:max-w-full">
        <div className="mt-24 mb-16 max-w-full w-[1200px] max-md:my-10">
          <div className="flex gap-10 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[57%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow items-end w-full text-md font-bold leading-9 text-black max-md:mt-10 max-md:max-w-full relative overflow-hidden">
                <Image
                  src="/images/roadtrip_rasyied/roadtrip.png"
                  alt="intro"
                  width={800}
                  height={600}
                  className='rounded-3xl'
                />
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[43%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col self-stretch font-bold text-teal-900 max-md:pt-10">
                <div className="text-3xl max-md:text-2xl font-serif">
                  Surga Alam dan Harta Budaya Kampar
                </div>
                <div className="mt-8 text-sm leading-8 font-normal">
                 Setiap sudut Kampar menyimpan keindahan alam yang luar biasa, dari hutan hijau yang rimbun hingga air terjun yang mempesona. Di balik setiap pemandangan alam yang menakjubkan, tersembunyi pula harta budaya yang tak ternilai, berupa tradisi, seni, dan sejarah yang mendalam. Bersiaplah untuk merasakan pengalaman tak terlupakan yang akan menggetarkan jiwa dan memperkaya wawasan, dalam sebuah perjalanan yang merangkai keajaiban alam dan kebudayaan menjadi satu kesatuan yang utuh dan magis.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}