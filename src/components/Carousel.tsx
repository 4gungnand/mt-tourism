import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slides from "../../data/destinasi.json";

type Slide = {
    url: string,
    title: string,
    desc: string,
};

const NextArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} text-black bg-white rounded-full p-2 shadow-lg hover:bg-gray-300 transition`}
            style={{ ...style, display: "block", right: "0px", zIndex: 2 }}
            onClick={onClick}
        />
    );
};

const PrevArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} text-black bg-white rounded-full p-2 shadow-lg hover:bg-gray-300 transition`}
            style={{ ...style, display: "block", left: "    0px", zIndex: 2 }}
            onClick={onClick}
        />
    );
};

export default function Carousel() {
    const sliderRef = useRef<Slider | null>(null);
    const [current, setCurrent] = useState(3); // Start with the fourth image (index 3)

    const settings = {
        initialSlide: current,
        centerMode: true,
        centerPadding: '60px', // Adjust center padding to create larger gaps and centering effect
        beforeChange: (oldIndex: number, newIndex: number) => setCurrent(newIndex),
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        focusOnSelect: true,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                }
            },
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    };

    return (
        <div className="relative w-full flex flex-col items-center py-20">
            <div className="w-full md:w-4/5 lg:w-3/4 xl:w-2/3 relative">
                <Slider ref={sliderRef} {...settings}>
                    {slides.map((slide: Slide, index: number) => (
                        <div key={index} className="h-[600px] flex justify-center items-center relative">
                            <img
                                src={slide.url}
                                alt={`Slide ${index}`}
                                className="object-cover w-full h-[600px] rounded-xl mx-auto"
                                style={{
                                    zIndex: index === current ? 2 : 1,
                                    transition: 'transform 0.8s ease-in-out',
                                    transform: index === current ? 'scale(1)' : 'scale(0.8)',
                                }}
                            />
                            {index === current && (
                                <div
                                    className="absolute bottom-0 left-0 w-full h-1/6 bg-black bg-opacity-50 flex flex-col justify-center text-white rounded-b-xl text-center transition"
                                    style={{
                                        zIndex: 3,
                                        animation: 'fadeIn 1s ease-out',
                                    }}
                                >
                                    <h1 className="text-2xl font-bold mx-5 md:text-xl lg:text-2xl xl:text-3xl">
                                        {slide.title}
                                    </h1>
                                </div>
                            )}
                        </div>
                    ))}
                </Slider>
            </div>

            {slides.map((slide, index) => (
                index === current && (
                    <div
                        key={index}
                        className='mt-10 text-center w-full max-w-5xl mx-auto text-white'
                        style={{
                            animation: 'fadeIn 1s ease-out',
                        }}
                    >
                        <p className='text-lg mx-5'>{slide.desc}</p>
                    </div>
                )
            ))}
        </div>
    );
}