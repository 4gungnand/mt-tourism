import Carousel from "./Carousel";
import Image from "next/image";
import sponsor from "../../data/sponsor.json";

type Sponsor = {
    src: string,
}

export default function Destinasi() {
    return (
        <div className="flex justify-center min-h-[800px] m-auto">
            <div className="flex flex-col items-center py-12 bg-teal-900 rounded-[95px] min-w-full">
                {/* Daerah ini untuk Sponsor */}
                {/* <div className="px-5 mt-2.5 max-w-full w-[840px] grid grid-cols-4 gap-5 max-md:grid-cols-2 max-md:gap-4" id="destinasi-section">
                    {sponsor.map((sponsor: Sponsor, index: number) => (
                        <div key={index} className="flex justify-center items-center">
                            <div className="shrink-0 h-15 w-[150px] rounded-xl flex justify-center">
                                <Image src={sponsor.src} width={100} height={80} alt={`Sponsor ${index}`} />
                            </div>
                        </div>
                    ))}
                </div> */}
                <div className="mt-10 text-6xl text-center text-white max-md:mt-10 max-md:max-w-full max-md:text-4xl font-serif flex flex-col">
                    <span>Rekomendasi Destinasi Wisata </span>
                    <span className="text-lime-200 mt-5">Populer di Kampar</span>
                </div>
                <Carousel />
            </div>
        </div>
    );
}
