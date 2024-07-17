import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type Slide = {
    url: string;
}

type CarouselProps = {
    slides: Slide[];
};

export default function Carousel({ slides }: CarouselProps) {
    const sliderRef = useRef<Slider | null>(null);
    const [current, setCurrent] = useState(3);

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: current,
        centerMode: true,
        centerPadding: '60px',
        beforeChange: (oldIndex: number, newIndex: number) => setCurrent(newIndex),
    };

    return (
        <div className="relative w-full flex justify-center items-center py-20">
            <div className="w-full md:w-4/5 lg:w-3/4 xl:w-2/3 relative">
                <Slider ref={sliderRef} {...settings}>
                    {slides.map((slide, index) => (
                        <div key={index} className="h-96 flex justify-center items-center">
                            <img
                                src={slide.url}
                                alt={`Slide ${index}`}
                                className="object-cover w-full h-full rounded-xl"
                                style={{
                                    zIndex: index === current ? 2 : 1,
                                    transition: 'transform 0.5s ease-in-out',
                                    transform: index === current ? 'scale(1)' : 'scale(0.8)',
                                }}
                            />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}