import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { FaArrowRight, FaBookOpen } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
const HeroBanner = () => {
  // Slider settings
  const settings = {
    dots: false,
    // infinite: true,
    
    // slidesToShow: 1,
    // slidesToScroll: 1,
    // fade: true,
    // autoplay: true,
    
    // speed: 1500,
    // autoplaySpeed: 4000,
    // arrows: false,
    // cssEase: "linear",
 
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 4000,
    cssEase: "linear",
    draggable: false,
    fade: true,
  };

  // Slide data
  const slides = [
    {
      id: 1,
      image: "/photos/2.jpg",
      heading: "Jamia Madeenthunnoor",
      subheading: "Pioneering a Promising Future",
    },
    // {
    //   id: 1,
    //   image: "/photos/3.jpeg",
    //   heading: "Jamia Madeenthunnoor",
    //   subheading: "Pioneering a Promising Future",
    // },
    {
      id: 3,
      image: "/photos/9.jpg",
      heading: "Jamia Madeenthunnoor",
      subheading: "Shaping Future Leaders",
    },
    {
      id: 3,
      image: "/photos/19.jpg",
      heading: "Jamia Madeenthunnoor",
      subheading: "Pioneering a Promising Future",
    },
    {
      id: 3,
      image: "/photos/17.jpg",
      heading: "Jamia Madeenthunnoor",
      subheading: "Shaping Future Leaders",
    },
  ];

  return (
    <section className="relative h-screen w-full ">
      <Slider {...settings} className="h-full w-full">
        {slides.map((slide) => (
          <div key={slide.id} className="relative h-screen w-full">
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src={slide.image}
                alt=""
                layout="fill"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            </div>

            {/* Centered Content */}
            <div className="relative h-full flex items-center justify-center text-center">
              <div className="px-4 text-white max-w-4xl mx-auto">
                <h1 className="text-3xl md:text-6xl font-bold mb-4 font-montserrat">
                  Jamia <br /> Madeenthunnoor
                </h1>
                <p className="text-xl md:text-3xl mb-8 font-medium">
                  {slide.subheading}
                </p>
                <div className="flex justify-center gap-4">
                  <a href="#about"><button className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md flex items-center transition-colors">
                    Know More <FaArrowRight className="ml-2" />
                  </button></a>
                  <Link passHref href={'/Programmes'}><button className="bg-white hover:bg-white/80 text-primary px-6 py-3 rounded-md flex items-center transition-colors">
                    Programs <FaBookOpen className="ml-2" />
                  </button></Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default HeroBanner;
