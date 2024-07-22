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
        desc: "Air Terjun Gulamo di Kampar adalah surga tersembunyi yang menawarkan keindahan air terjun yang memukau dengan aliran air jernih dan menyejukkan. Destinasi ini menjadi tempat yang sempurna untuk melarikan diri dari kesibukan kota dan menikmati ketenangan alam yang menenangkan.",
    },
    {
        url: "/images/candi_2.jpg",
        title: "Candi Muara Takus",
        desc: "Candi Muara Takus di Kampar adalah situs bersejarah yang mempesona, menampilkan keagungan arsitektur kuno yang terbuat dari bata merah. Dikelilingi oleh pemandangan alam yang indah, candi ini menjadi tempat ideal untuk menjelajahi jejak sejarah, merasakan kedamaian spiritual, dan mengagumi warisan budaya yang luar biasa.",
    },
    {
        url: "/images/danau.jpg",
        title: "Danau Kampar",
        desc: "Danau Kampar adalah sebuah danau yang berada di Riau. Danau ini memiliki pemandangan yang sangat indah dan menarik.",
    },
    {
        url: "/images/danau_rusa.svg",
        title: "Danau Rusa",
        desc: "Danau Rusa berada di tepi Danau PLTA Koto Panjang. Destinasi wisata ini sering didatangi saat senja atau ketika matahari mulai terbenam. Di sini, pengunjung juga bisa memancing atau berkeliling danau dengan transportasi yang telah tersedia.",
    },
    {
        url: "/images/jembatan.jpg",
        title: "Jembatan Ampera",
        desc: "Jembatan Ampera adalah sebuah jembatan yang berada di Palembang. Jembatan ini merupakan salah satu ikon dari kota Palembang.",
    },
    {
        url: "/images/henferd.svg",
        title: "Henferd Land",
        desc: "Henferd Land di Kampar adalah destinasi wisata keluarga yang menawarkan beragam wahana seru dan pemandangan alam yang memukau. Banyak pengunjung yang datang terdiri dari anak muda yang sekadar berfoto, berkemah, dan memancing.",

    },
    {
        url: "/images/ulukasok.jpg",
        title: "Ulu Kasok",
        desc: "Ulu kasok adalah raja ampatnya Riau, tempat ini memiliki pemandangan yang sangat indah dan menarik.",
    }
];

export default function Destinasi() {
    return (
        <div className="flex justify-center min-h-[1000px] m-auto">
            <div className="flex flex-col items-center py-12 bg-teal-900 rounded-[95px] min-w-full">
                <div className="flex gap-5 justify-between px-5 mt-2.5 max-w-full w-[840px] max-md:flex-wrap" id="destinasi-section" >
                    <div className="shrink-0 h-10 bg-zinc-300 w-[135px] text-center rounded-xl">
                        <span>Sponsor 1</span>
                    </div>
                    <div className="shrink-0 h-10 bg-zinc-300 w-[135px] text-center rounded-xl">
                        <span>Sponsor 2</span>
                    </div>
                    <div className="shrink-0 h-10 bg-zinc-300 w-[135px] text-center rounded-xl">
                        <span>Sponsor 3</span>
                    </div>
                    <div className="shrink-0 h-10 bg-zinc-300 w-[135px] text-center rounded-xl">
                        <span>Sponsor 4</span>
                    </div>
                </div>
                <div className="mt-10 text-6xl text-center text-white max-md:mt-10 max-md:max-w-full max-md:text-4xl font-serif">
                    <span>Rekomendasi Destinasi Wisata </span>
                    <br />
                    <span className="text-lime-200">Populer</span>
                </div>
                <Carousel slides={slides} />
            </div>
        </div>
    );
}
