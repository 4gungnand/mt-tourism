import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { EmblaOptionsType, EmblaCarouselType } from 'embla-carousel'
import Autoplay from 'embla-carousel-autoplay'
import type { Slide } from './Destinasi';
import Image from 'next/image';

type PropType = {
    slides: Slide[]
    options?: EmblaOptionsType
}

export default function EmblaCarousel(props: PropType) {
    const { slides, options } = props
    const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()])

    const [selectedIndex, setSelectedIndex] = useState(3);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        emblaApi.on('select', onSelect);
        onSelect();
    }, [emblaApi, onSelect]);

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    return (
        <div className='overflow-hidden mt-10'>
            <div className="relative w-full flex flex-col items-center gap-10">
                <div className="embla w-full md:w-4/5 lg:w-3/4 xl:w-2/3 relative" ref={emblaRef}>
                    <div className="embla__container flex">
                        {slides.map((slide: Slide, index: number) => (
                            <div className="embla__slide flex-[0_0_30%] px-4" key={index}>
                                <div className="h-[600px] flex justify-center items-center relative">
                                    <img
                                        src={slide.url}
                                        alt={slide.title}
                                        className="object-cover w-full h-[600px] rounded-xl"
                                    />
                                    <div className="absolute bottom-0 left-0 w-full h-1/6 bg-black bg-opacity-50 flex flex-col justify-center text-white rounded-b-xl text-center">
                                        <h1 className="text-xl md:text-2xl font-bold mx-5">{slide.title}</h1>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <button onClick={scrollPrev} className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-300 transition z-10">
                    <Image src="/Arrow2.svg" alt="Previous" className="w-6 h-6 transform rotate-180" width={32} height={32} />
                </button>
                <button onClick={scrollNext} className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-300 transition z-10">
                    <Image src="/Arrow2.svg" alt="Next" className="w-6 h-6" width={32} height={32} />
                </button>
            </div>

            {slides[selectedIndex] && (
                <div className="mt-10 text-center w-full max-w-5xl mx-auto text-white h-24"> {/* Set a fixed height */}
                    <p className="text-xl max-md:text-lg mx-5">{slides[selectedIndex].desc}</p>
                </div>
            )}
        </div>
    );
}