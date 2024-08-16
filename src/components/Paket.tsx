import Image from "next/image";

const Paket = () => {
  return (
    <div className="flex flex-col justify-center bg-white" id="paket-section">
      <div className="bg-teal-900 gap-[60px] w-full flex flex-col items-center pt-10 text-white">
        <div className="flex flex-col items-center mb-16 w-full max-w-[1075px] max-md:my-10 max-md:max-w-full mt-10">
          <div className="flex flex-col items-center text-center gap-10">
            <h1 className="text-5xl max-md:text-4xl font-serif">Paket <span className="text-nipis">Wisata</span></h1>
            <a href="https://wa.me/6282285320904" className="mb-10 mx-16">
              <Image
                src="/images/paket_wisata/Promosi_Paket_Wisata_Alam_Flyer.jpg"
                alt="paket_wisata"
                width={1075}
                height={2150} 
                className="rounded-md"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Paket;