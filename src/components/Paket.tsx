const Paket = () => {
  return (
    <div className="flex flex-col justify-center bg-white" id="paket-section">
      <div className="bg-teal-900 gap-[60px] w-full flex flex-col items-center pt-10 text-white">
        <div className="flex flex-col items-center mb-16 w-full max-w-[1075px] max-md:my-10 max-md:max-w-full mt-10" >
          <div className="flex flex-col items-center text-center gap-3">
            <h1 className="font-bold text-6xl">
              Paket 
            </h1>
            <p className="mt-12 text-xl leading-8 text-center max-md:mt-10 max-md:max-w-full">
              Pilih paket wisata yang sesuai dengan kebutuhan Anda. Dapatkan
              akses ke berbagai fitur premium yang akan membantu Anda merencanakan
              perjalanan wisata yang lebih efisien dan menyenangkan.
            </p>
          </div>
          <div className="self-stretch mt-16 max-md:mt-10 max-md:max-w-full mb-16">
            <div className="flex gap-[60px] items-center justify-center">
              <PricingCard
                title="Biasa"
                price="250.000"
                desc={{
                  adaGuide: "Ya",
                  adaMakan: "Tidak",
                  adaKendaran: "Tidak",
                  adaFoto: "Tidak",
                }}
              />
              <PricingCard
                title="Premium"
                price="500.000"
                desc={{
                  adaGuide: "Ya",
                  adaMakan: "Ya",
                  adaKendaran: "Ya",
                  adaFoto: "Ya",
                }}
              />
            </div>
          </div>

          <p className="text-xl mx-16 text-center lg:mx-10">
            Jangan lewatkan kesempatan untuk mendapatkan akses ke berbagai fitur
            premium yang akan membantu Anda merencanakan perjalanan wisata yang
            lebih efisien dan menyenangkan. Dapatkan penawaran menarik dengan
            memilih paket wisata yang sesuai dengan kebutuhan Anda.
          </p>
        </div>
      </div>
    </div>

  );
};

export default Paket;

const PricingCard = ({
  title,
  price,
  desc,
}: {
  title: string;
  price: string;
  desc: {
    adaGuide: string;
    adaMakan: string;
    adaKendaran: string;
    adaFoto: string;
  };
}) => {
  return (
    <div className="bg-ijo border-2 border-white hover:scale-105 transition duration-500 text-center shadow-[0px_0px_50px_rgba(44,52,39,0.6)] flex flex-col p-10 text-white rounded-xl border-0 ">
      <h1 className="font-semibold text-3xl">{title}</h1>
      <p className="font-bold text-4xl mt-5">Rp{price},-</p>
      <hr className="h-px border-0 bg-ijo mt-4" />
      <div className="mx-6 my-4 flex flex-col gap-3 text-center">
        <p className="font-medium text-xl">
          Transport <span className="font-bold">{desc.adaKendaran}</span>
        </p>
        <p className="font-medium text-xl">
          Guide <span className="font-bold">{desc.adaGuide}</span>
        </p>
        <p className="font-medium text-xl">
          Makanan <span className="font-bold">{desc.adaMakan}</span>
        </p>
        <p className="font-medium text-xl">
          Foto <span className="font-bold">{desc.adaFoto}</span>
        </p>
      </div>
      <button className="text-xl border-2 text-white border-white py-2 px-4 rounded-lg hover:text-ijo hover:bg-white transition duration-300">
        Beli
      </button>
    </div>
  );
}
