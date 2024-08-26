import Image from "next/image";

export default function Umkm() {
  return (
    <div className="flex flex-col justify-center bg-white" id="umkm-section" >
      <div className="flex justify-center items-center px-16 py-10 w-full bg-teal-50 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col items-center mb-16 w-full max-w-[1075px] max-md:my-10 max-md:max-w-full">
          <div className="mt-8 text-5xl max-md:text-4xl font-bold text-teal-900 max-md:max-w-full font-serif">
            Aksesoris UMKM
          </div>
          <div className="mt-11 text-xl max-md:text-lg leading-8 text-center max-md:mt-10 max-md:max-w-full">
            Jangan lupa untuk selalu support UMKM Desa Muara Takus
            agar mereka bisa terus berkembang dan memberikan produk-produk
            terbaik untuk kita semua.
          </div>
          <div className="self-stretch mt-16 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-8 max-md:flex-wrap max-md:gap-5 justify-center">
              {umkmCard({
                title: "Topi",
                img: "/images/umkm/topi.png",
                alt: "Aksesoris 1",
                link: "https://wa.me/6282285320904",
              })}
              {umkmCard({
                title: "T-Shirt",
                img: "/images/umkm/tshirt.png",
                alt: "Aksesoris 2",
                link: "https://wa.me/6282285320904",
              })}
              {umkmCard({
                title: "Gelas",
                img: "/images/umkm/gelas.png",
                alt: "Aksesoris 3",
                link: "https://wa.me/6282285320904",
              })}
              {umkmCard({
                title: "Gelang",
                img: "/images/umkm/gelang.jpg",
                alt: "Aksesoris 4",
                link: "https://wa.me/6282285320904",
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
  link,
}: {
  title: string;
  img: string;
  alt: string;
  link: string;
}) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col hover:scale-105 hover:shadow-md shadow-md transition duration-500 grow pt-2 pb-6 w-full text-center text-teal-900 rounded-3xl bg-white max-md:px-5 max-md:mt-6 max-md:max-w-48"
    >
      <Image
        src={img}
        alt={alt}
        width={144}
        height={144}
        className="mt-6 mx-auto w-36 h-36 rounded-md object-cover"
      />
      <div className="self-center mt-6 text-2xl font-bold max-md:mt-8">
        {title}
      </div>
    </a>
  );
};

