import React, { useEffect, useState } from "react";

import Modal from "@mui/material/Modal";

import CloseIcon from "@mui/icons-material/Close";
import Carousel from "react-material-ui-carousel";
import Link from "next/link";
import MobBanner from "./MobBanner";
import Poster from "./Poster";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from '../assets/images/students/img-2.jpeg'
import img2 from '../assets/images/students/img-1.jpeg'
 
import img3 from '../assets/images/students/img-3.jpeg'

import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";

import YouTubeIcon from "@material-ui/icons/YouTube";

export default function MainBanner({ poster }) {
  const [open, setOpen] = useState(false);

  function timeout(delay) {
    return new Promise((res) => setTimeout(res, delay));
  }
  const controlOpen = async () => {
    await timeout(5000);
    setOpen(true);
  };
  useEffect(() => {
    // controlOpen();
  }, []);
  const settings = {
    dots: true,
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

  const imgs = [img1, img2, img3];
  return (
    <div>
      {/* <div className="md:hidden">
        <MobBanner />
      </div> */}
      <div className="relative overflow-hidden">
        <Slider {...settings}>
          {imgs.map((d) => (
            <div
              key={d}
              className="relative h-[80vh]  lg:h-[100vh] flex justify-center items-center overflow-y-hidden"
            >
              <Image src={d} layout="fill" className="object-cover" alt="" />
              {/* <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-70 group-hover:transition-opacity duration-400 ease-linear"></div> */}
            </div>
          ))}
        </Slider>

        <div className="absolute top-0 w-full ">
          <div className="absolute px-6 h-[95vh]  lg:h-[100vh] w-full flex justify-center items-center">
            <div
              className="p-3 lg:p-6 rounded-lg backdrop-blur-lg shadow bg-white/20 shadow-gray-200"
              data-aos="fade-up"
            >
              <div className="text-white text-2xl lg:text-3xl font-bold">
                <h2 className="text-center  w-full">JAMIA MADEENATHUNNOOR</h2>
              </div>
              <div className="">
                <h3 className="text-center  w-full text-gray-900 font-semibold text-lg lg:text-xl mt-1">
                  PIONEERING A PROMISING FUTURE
                </h3>

                <div className="flex">
                  <a href="#about" className="m-auto "><button className="m-auto bg-green-800 text-white p-1.5 lg:p-2 rounded-full px-4 lg:px-5 mt-3 hover:scale-105 transition ease-linear duration-200">
                    Know More
                  </button></a>
                  
                </div>
                {/* <h6 className="text-center">GET AN ADMISSION</h6>
                <div className="grid grid-cols-2 gap-4">
                  <button className="m-auto rounded w-full hover:scale-105 hover:transition ease-linear duration-150 hover:border border-white">
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSd3JChgrFpRN5QebID-_nFwBT0lpCrJqmwEbgdbAslV7mBdEg/viewform?usp=sf_link">
                      JMN JUNIOR SCHOOL
                    </a>{" "}
                  </button>

                  <button className="ml- w-full hover:scale-105 hover:transition ease-linear duration-150 hover:border border-white">
                    <a href="https://admission.jamiamadeenathunnoor.org">
                      JMN SENIOR SCHOOL
                    </a>{" "}
                  </button>
                </div> */}
              </div>
            </div>
          </div>
        </div>

        <div className=" absolute right-4 lg:right-10 top-[75%] lg:top-[40%]  grid gap-2">
          <a
            className="transition ease-linear duration-200 hover:scale- hover:-translate-y-1"
            href="https://www.instagram.com/jamia_madeenathunnoor/"
          >
            <div className="backdrop-blur-lg shadow bg-white/20  h-9 w-9  flex justify-center items-center rounded-full">
              <InstagramIcon className="text-gray-200   " />
            </div>
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100085673749100"
            className="transition ease-linear duration-200 hover:scale- hover:-translate-y-1"
          >
            <div className="backdrop-blur-lg shadow bg-white/20  h-9 w-9  flex justify-center items-center rounded-full">
              <FacebookIcon className="text-gray-200   " />
            </div>
          </a>
          <a
            href="https://www.youtube.com/c/GlocalMediaMarkazGarden"
            className="transition ease-linear duration-200 hover:scale- hover:-translate-y-1"
          >
            <div className="backdrop-blur-lg shadow bg-white/20 h-9 w-9  flex justify-center items-center rounded-full">
              <YouTubeIcon className="text-gray-200  " />
            </div>
          </a>
        </div>
      </div>
      {/* <div className="banner__carousel  relative hidden md:grid bg-black bg-opacity-90">
        <Carousel
     
          indicators={false}
          infiniteLoop={true}
          stopAutoPlayOnHover={false}
        >
          <div className="banner__img md:px-10 xl:px-20  justify-between bg-black h-screen">
            <div className="main__banner__text " data-aos="fade-up">
              <div className="main__banner__text__first__row">
                <h2 className="text-center  w-full">
               
                  JAMIA MADEENATHUNNOOR
                </h2>
              </div>
              <div className="main__banner__text__second__row">
                <h3 className="text-center  w-full">
                  PIONEERING A PROMISING FUTURE
                </h3>
                <h6 className="text-center">GET AN ADMISSION</h6>
                <div className="grid grid-cols-2 gap-4">
                  <button className="m-auto rounded w-full hover:scale-105 hover:transition ease-linear duration-150 hover:border border-white">
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSd3JChgrFpRN5QebID-_nFwBT0lpCrJqmwEbgdbAslV7mBdEg/viewform?usp=sf_link">
                      JMN JUNIOR SCHOOL
                    </a>{" "}
                  </button>
                 

                  <button className="ml- w-full hover:scale-105 hover:transition ease-linear duration-150 hover:border border-white">
                    <a href="https://admission.jamiamadeenathunnoor.org">
                    JMN SENIOR SCHOOL
                    </a>{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="banner__img__three md:px-10 xl:px-20  justify-between ">
            <div className="main__banner__text" data-aos="fade-up">
              <div className="main__banner__text__first__row">
                <h2 className="text-center  w-full">JAMIA MADEENATHUNNOOR</h2>
              </div>
              <div className="main__banner__text__second__row">
                <h3 className="text-center  w-full">
                  PIONEERING A PROMISING FUTURE
                </h3>
                <h6 className="text-center">GET AN ADMISSION</h6>
                <div className="grid grid-cols-2 gap-4">
                  <button className="m-auto rounded w-full hover:scale-105 hover:transition ease-linear duration-150 hover:border border-white">
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSd3JChgrFpRN5QebID-_nFwBT0lpCrJqmwEbgdbAslV7mBdEg/viewform?usp=sf_link">
                      JMN JUNIOR SCHOOL
                    </a>{" "}
                  </button>
                 

                  <button className="ml- w-full hover:scale-105 hover:transition ease-linear duration-150 hover:border border-white">
                    <a href="https://admission.jamiamadeenathunnoor.org">
                    JMN SENIOR SCHOOL
                    </a>{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="banner__img__two md:px-10 xl:px-20  justify-between">
            <div className="main__banner__text" data-aos="fade-up">
              <div className="main__banner__text__first__row">
                <h2 className="text-center  w-full">JAMIA MADEENATHUNNOOR</h2>
              </div>
              <div className="main__banner__text__second__row">
                <h3 className="text-center  w-full">
                  PIONEERING A PROMISING FUTURE
                </h3>
                <h6 className="text-center">GET AN ADMISSION</h6>
                <div className="grid grid-cols-2 gap-4">
                  <button className="m-auto rounded w-full hover:scale-105 hover:transition ease-linear duration-150 hover:border border-white">
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSd3JChgrFpRN5QebID-_nFwBT0lpCrJqmwEbgdbAslV7mBdEg/viewform?usp=sf_link">
                      JMN JUNIOR SCHOOL
                    </a>{" "}
                  </button>
                 

                  <button className="ml- w-full hover:scale-105 hover:transition ease-linear duration-150 hover:border border-white">
                    <a href="https://admission.jamiamadeenathunnoor.org">
                    JMN SENIOR SCHOOL
                    </a>{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Carousel>
        {poster?.length ? <Poster poster={poster}/> :''}

        <Modal open={open} id="modal">
          <div className="modal border-4 ">
            <div className="modal__close">
              <CloseIcon id="close__icon" onClick={() => setOpen(false)} />
            </div>
            <div className="modal__main pt-4 pb-4">
              <h2>GET AN ADMISSION</h2>
              
              <div className="modal__btn lg:flex">
                <a
                  className="flex mt-2 w-full"
                  href="https://docs.google.com/forms/d/e/1FAIpQLSd3JChgrFpRN5QebID-_nFwBT0lpCrJqmwEbgdbAslV7mBdEg/viewform?usp=sf_link"
                >
                  <button className="m-auto border hover:scale-105 hover:transition ease-linear duration-150 hover:border border-gray-300">
                  JMN JUNIOR SCHOOL
                  </button>
                </a>
                <a
                  className="flex mt-2 w-full"
                  href="https://admission.jamiamadeenathunnoor.org"
                >
                  <button className="m-auto border border-gray-200  hover:scale-105 hover:transition ease-linear duration-150 hover:border ">
                  JMN SENIOR SCHOOL
                  </button>
                </a>
              </div>
            </div>
          </div>
        </Modal>
      </div> */}
    </div>
  );
}
