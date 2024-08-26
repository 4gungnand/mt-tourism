import Carousel from "./Carousel";
// import Image from "next/image"; 
// import sponsor from "../../data/sponsor.json";
import { EmblaOptionsType } from 'embla-carousel'
import slides from "../../data/destinasi.json";

export type Slide = {
    url: string;
    title: string;
    desc: string;
};
type Sponsor = {
    src: string,
}

export default function Destinasi() {
    const OPTIONS: EmblaOptionsType = { loop: true }

    return (
        <div className="flex justify-center min-h-[800px] m-auto bg-transparent">
            <div className="flex flex-col items-center py-12 bg-teal-900 rounded-[95px] min-w-full" id="destinasi-section">
                {/* Daerah ini untuk Sponsor */}
                {/* <div className="px-5 mt-2.5 max-w-full w-[840px] grid grid-cols-4 gap-5 max-md:grid-cols-2 max-md:gap-4">
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
                <div className="w-full my-10 flex">
                    <div className="bg-teal-900 w-[200px] h-full z-10"></div>
                    <Carousel slides={slides} options={OPTIONS} />
                    <div className="bg-teal-900 w-[200px] h-full z-10"></div>
                </div>
            </div>
        </div>
    );
}
