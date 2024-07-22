import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type Slide = {
    url: string;
    title: string;
    desc: string;
}

type CarouselProps = {
    slides: Slide[];
};

export default function Carousel({ slides }: CarouselProps) {
    const sliderRef = useRef<Slider | null>(null);
    const [current, setCurrent] = useState(3); // Start with the fourth image (index 3)

    const settings = {
        infinite: true,
        speed: 800, // Increase the transition speed for smoother animation
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: current,
        centerMode: true,
        centerPadding: '60px', // Adjust center padding to create larger gaps and centering effect
        beforeChange: (oldIndex: number, newIndex: number) => setCurrent(newIndex),
    };

    return (
        <div className="relative w-full flex justify-center items-center py-20">
            <div className="w-full md:w-4/5 lg:w-3/4 xl:w-2/3 relative"> {/* Adjust width to make the carousel wider */}
                <Slider ref={sliderRef} {...settings}>
                    {slides.map((slide, index) => (
                        <div key={index} className="h-96 flex justify-center items-center">
                            <img
                                src={slide.url}
                                alt={`Slide ${index}`}
                                className="object-cover w-full h-full rounded-xl"
                                style={{
                                    zIndex: index === current ? 2 : 1,
                                    transition: 'transform 0.8s ease-in-out', // Smoother transition
                                    transform: index === current ? 'scale(1)' : 'scale(0.8)',
                                }}
                            />
                        </div>
                    ))}
                </Slider>
                {slides.map((slide, index) => (
                    index === current && (
                        <div
                            key={index}
                            className='absolute bottom-[-160px] left-1/2 transform -translate-x-1/2 w-full max-w-5xl mx-auto text-center text-white'
                            style={{
                                animation: 'fadeIn 1s ease-out',
                            }}
                        >
                            <h1 className='text-2xl font-bold'>{slide.title}</h1>
                            <p className='text-lg'>{slide.desc}</p>
                        </div>
                    )
                ))}
            </div>
        </div>
    );
}