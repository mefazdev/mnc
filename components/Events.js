import Link from "next/link";
import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import Carousel from "react-multi-carousel";
import eve1 from "../assets/images/events/eve-1.jpg";

import "react-multi-carousel/lib/styles.css";

export default function Events() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="h__prgm  pb-24   mt-10 lg:mt-20  md:px-0 md:w-10/12 m-auto px-4 md:px-0 ">
      <div className="hm__blogs__head">
        <h3>What&apos;s new</h3>
      </div>

    
      <div className="prgm__content__row   grid lg:grid-cols-3 px- lg:px-0     m-auto mt-10  ">
        {/* <Carousel
          responsive={responsive}
          autoPlay
          draggable={false}
          showDots={true}
          infinite={true}
           
          keyBoardControl={true}
          
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        > */}
          <div className="   bg-white shadow-xl m-2  pb-4 border-b-4 border-emerald-800 hover:scale-105 transform transition-transform duration-300 ease-in-out hover:bg-white hover:shadow-xl">
            <Link href={`/events/Acrast`}>
              <div>
                <div
                  style={{
                    backgroundImage: `url(${eve1.src})`,

                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                  className="h-64 relative"
                >
                  <div className="absolute bottom-0">
                    <div className=" bg-emerald-800 text-white w-fit p-1 px-4 text-lg font-bold tracking-wide">
                      <p className="">24</p>
                      <p className="text-sm font-thin">Dec</p>
                    </div>
                  </div>
                </div>
                <div className="px-4">
                  <div className="mt-7">
                    <h3 className="  font-bold text-lg">
                      Academic Conference on Recent Advancements in Science and
                      Technology
                    </h3>
                    {/* <div className="text-gray-600 flex mt-1">
                      <LocationOnIcon className="text-lg" />
                      <p>Karulai</p>
                    </div> */}
                    <p className="mt-1">
                      
                       Our remarkable conference,
                       
                      ACRAST (Academic Conference on Recent Advancements in
                      Science and Technology), that congregates academics,
                      scientists, and industry experts from all over the world
                      to discuss the most recent discoveries and innovations in
                      the fields of science and technology.
                    </p>
                  </div>

                  <button className="mt-3  flex m-auto  border border-emerald-800 p-1.5 px-5 rounded-sm">
                    Read More
                  </button>
                </div>
              </div>
            </Link>
          </div>
        {/* </Carousel> */}
      </div>
    </div>
  );
}


// "next": "12.0.8",