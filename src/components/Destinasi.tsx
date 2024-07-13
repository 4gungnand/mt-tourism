export default function Destinasi() {
    return (
        <div className="flex flex-col items-center py-20 bg-teal-900 rounded-[95px]">
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
            <div className="flex gap-5 justify-between self-stretch px-5 mt-7 w-full max-md:flex-wrap max-md:max-w-full">
                <div className="flex flex-col justify-center items-end px-16 py-20 rounded-3xl bg-zinc-300 max-md:px-5">
                    <div className="flex justify-center items-center px-4 py-6 mt-32 border border-white border-solid rounded-[100px] w-[60px] max-md:mt-10">
                        <img
                            loading="lazy"
                            src="/arrow.svg"
                            className="rotate-180 fill-white"
                        />
                    </div>
                </div>
                <div className="shrink-0 max-w-full bg-lime-200 rounded-3xl h-[420px] w-[300px]" />
                <img
                    loading="lazy"
                    srcSet="/images/gulamo.jpeg"
                    className="shrink-0 max-w-full aspect-[0.71] w-[300px] rounded-3xl"
                />
                <div className="shrink-0 max-w-full bg-lime-200 rounded-3xl h-[420px] w-[300px]" />
                <div className="flex overflow-hidden relative flex-col justify-center items-start px-11 py-20 aspect-[0.5] w-[210px] max-md:px-5">
                    <img
                        loading="lazy"
                        srcSet="/images/ulukasok.jpg"
                        className="object-cover absolute inset-0 size-full rounded-3xl"
                    />
                    <div className="flex relative justify-center items-center px-4 py-6 mt-32 border border-white border-solid rounded-[100px] w-[60px] max-md:mt-10">
                        <img
                            loading="lazy"
                            src="/arrow.svg"
                            className="fill-white"
                        />
                    </div>
                </div>
            </div>
            <div className="mt-14 text-3xl font-bold text-center text-white max-md:mt-10">
                Sungai Gulamo
            </div>
            <div className="mt-3.5 text-xl text-center text-white max-md:max-w-full">
                Sungai yang keindahannya memukau siapapun yang datang
            </div>
        </div>
    );
}
