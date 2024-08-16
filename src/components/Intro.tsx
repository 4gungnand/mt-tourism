import Image from 'next/image';

export default function Intro() {
  return (
    <div className="flex flex-col justify-center items-center bg-white py-20">
      <div className="flex flex-col justify-center items-center w-full max-w-[1200px] px-5">
        <div className="flex flex-col items-center gap-10">
          <div className="flex flex-col items-center w-full">
            <Image
              src="/images/roadtrip_rasyied/roadtrip.png"
              alt="roadtrip"
              width={1200}
              height={1000}
              className="rounded-3xl"
            />
          </div>
          <div className="flex flex-col items-center text-center w-full">
            <div className="text-5xl max-md:text-4xl font-serif text-teal-900 font-bold">
              Surga Alam dan Harta Budaya Kampar
            </div>
            <div className="mt-8 text-md leading-8 font-normal text-black">
              Setiap sudut Kampar menyimpan keindahan alam yang luar biasa, dari hutan hijau yang rimbun hingga air terjun yang mempesona. Di balik setiap pemandangan alam yang menakjubkan, tersembunyi pula harta budaya yang tak ternilai, berupa tradisi, seni, dan sejarah yang mendalam. Bersiaplah untuk merasakan pengalaman tak terlupakan yang akan menggetarkan jiwa dan memperkaya wawasan, dalam sebuah perjalanan yang merangkai keajaiban alam dan kebudayaan menjadi satu kesatuan yang utuh dan magis.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}