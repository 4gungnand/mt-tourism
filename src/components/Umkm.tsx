export default function Umkm() {
  return (
    <div className="flex flex-col justify-center bg-white" id="umkm-section" >
      <div className="flex justify-center items-center px-16 py-10 w-full bg-teal-50 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col items-center mb-16 w-full max-w-[1075px] max-md:my-10 max-md:max-w-full">
          <div className="mt-20 text-5xl font-bold text-teal-900 max-md:max-w-full max-md:text-4xl font-serif">
            Aksesoris Desa Muara Takus
          </div>
          <div className="mt-11 text-xl leading-8 text-center text-teal-900 max-md:mt-10 max-md:max-w-full">
            Jangan lupa untuk selalu support UMKM Desa Muara Takus
            agar mereka bisa terus berkembang dan memberikan produk-produk
            terbaik untuk kita semua.
          </div>
          <div className="self-stretch mt-16 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-8 max-md:flex-col max-md:gap-0">
              {umkmCard({
                title: "Topi",
                img: "/images/umkm/topi.png",
                alt: "Aksesoris 1",
              })}
              {umkmCard({
                title: "T-Shirt",
                img: "/images/umkm/tshirt.png",
                alt: "Aksesoris 2",
              })}
              {umkmCard({
                title: "Gelas",
                img: "/images/umkm/gelas.png",
                alt: "Aksesoris 3",
              })}
              {umkmCard({
                title: "Gelang",
                img: "/images/umkm/gelang.jpg",
                alt: "Aksesoris 4",
              })
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const umkmCard = ({
  title,
  img,
  alt,
}: {
  title: string;
  img: string;
  alt: string;
}) => {
  return (
    <div className="flex flex-col hover:scale-105 transition duration-500 grow px-8 pt-5 pb-12 w-full text-center text-teal-900 rounded-3xl bg-white max-md:px-5 max-md:mt-6">
      <img src={img} alt={alt} className="mt-6 mx-auto w-36 h-36 rounded-md" />
      <div className="self-center mt-8 text-2xl font-bold max-md:mt-10">
        {title}
      </div>
    </div>
  );
};

