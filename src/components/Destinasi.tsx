import Carousel from "./Carousel";

type Slide = {
    url: string,
    title: string,
    desc: string,
}

let slides: Slide[] = [
    {
        url: "/images/gulamo.jpeg",
        title: "Gulamo",
        desc: "Gulamo adalah sebuah tempat wisata yang berada di Kabupaten Buton Tengah, Sulawesi Tenggara. Tempat ini memiliki pemandangan yang sangat indah dan menarik.",
    },
    {
        url: "/images/candi_2.jpg",
        title: "Candi Muara Takus",
        desc: "Candi Muara Takus adalah sebuah candi Buddha yang berada di Riau. Candi ini merupakan salah satu peninggalan sejarah yang sangat berharga.",
    },
    {
        url: "/images/danau.jpg",
        title: "Danau Kampar",
        desc: "Danau Kampar adalah sebuah danau yang berada di Riau. Danau ini memiliki pemandangan yang sangat indah dan menarik.",
    },
    {
        url: "/images/danau_pagi.jpg",
        title: "Danau Kampar",
        desc: "Danau Kampar adalah sebuah danau yang berada di Riau. Danau ini memiliki pemandangan yang sangat indah dan menarik.",
    },
    {
        url: "/images/jembatan.jpg",
        title: "Jembatan Ampera",
        desc: "Jembatan Ampera adalah sebuah jembatan yang berada di Palembang. Jembatan ini merupakan salah satu ikon dari kota Palembang.",
    },
    {
        url: "/images/sampan.jpg",
        title: "Sampan",
        desc: "Sampan adalah sebuah tempat wisata yang berada di Kabupaten Buton Tengah, Sulawesi Tenggara. Tempat ini memiliki pemandangan yang sangat indah dan menarik.",

    },
    {
        url: "/images/ulukasok.jpg",
        title: "Ulu Kasok",
        desc: "Ulu kasok adalah raja ampatnya Riau, tempat ini memiliki pemandangan yang sangat indah dan menarik.",
    }
];

export default function Destinasi() {
    return (
        <div className="flex justify-center border border-black border-solid min-h-[900px]  m-auto">
            <div className="flex flex-col items-center py-20 bg-teal-900 rounded-[95px] min-w-full">
                <div className="flex gap-5 justify-between px-5 mt-2.5 max-w-full w-[840px] max-md:flex-wrap">
                    <div className="shrink-0 h-10 bg-zinc-300 w-[135px] text-center">
                        <span>Sponsor 1</span>
                    </div>
                    <div className="shrink-0 h-10 bg-zinc-300 w-[135px] text-center">
                        <span>Sponsor 2</span>
                    </div>
                    <div className="shrink-0 h-10 bg-zinc-300 w-[135px] text-center">
                        <span>Sponsor 3</span>
                    </div>
                    <div className="shrink-0 h-10 bg-zinc-300 w-[135px] text-center">
                        <span>Sponsor 4</span>
                    </div>
                </div>
                <div className="mt-36 text-6xl text-center text-white max-md:mt-10 max-md:max-w-full max-md:text-4xl font-serif">
                    <span className="">Rekomendasi Destinasi Wisata </span>
                    <br />
                    <span className="text-lime-200">Populer</span>
                </div>
                <Carousel slides={slides} />
            </div>
        </div>
    );
}
