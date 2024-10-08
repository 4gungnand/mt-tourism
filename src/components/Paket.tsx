import Image from "next/image";

const Paket = () => {
  const templateText = "Halo, saya ingin bertanya tentang paket wisata yang ada di website.";
  return (
    <div className="flex flex-col justify-center bg-white" id="paket-section">
      <div className="bg-teal-900 gap-[60px] w-full flex flex-col items-center pt-10 text-white">
        <div className="flex flex-col items-center mb-16 w-full max-w-[1200px] max-md:my-10 max-md:max-w-full mt-10">
          <div className="flex flex-col items-center text-center gap-12">
            <div className="text-5xl max-md:text-4xl font-serif">Paket <span className="text-nipis">Wisata</span></div>
            <Image
              src="/images/paket_wisata/Promosi_Paket_Wisata_Alam_Flyer.jpg"
              alt="paket_wisata"
              width={1075}
              height={1800}
            />
            <a href={`https://wa.me/6282285320904?text=${encodeURIComponent(templateText)}`} className="mx-16">
              <Image src="/WhatsAppButtonGreenSmall.svg" alt="chat on whatsapp" className="transition rounded-md border-0 hover:duration-500 hover:brightness-75" width={300} height={90} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Paket;