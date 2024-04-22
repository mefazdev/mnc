import React, { useEffect, useState } from "react";

import Modal from "@mui/material/Modal";

import CloseIcon from "@mui/icons-material/Close";
import Carousel from "react-material-ui-carousel";
import Link from "next/link";
import MobBanner from "./MobBanner";
import Poster from "./Poster";

export default function MainBanner({poster}) {
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
  return (
    <div>
      <div className="md:hidden">
        <MobBanner />
      </div>
      <div className="banner__carousel  relative hidden md:grid bg-black bg-opacity-90">
        <Carousel
          // autoPlay={false}
          indicators={false}
          infiniteLoop={true}
          stopAutoPlayOnHover={false}
        >
          <div className="banner__img md:px-10 xl:px-20  justify-between bg-black h-screen">
            <div className="main__banner__text " data-aos="fade-up">
              <div className="main__banner__text__first__row">
                <h2 className="text-center  w-full">
                  {/* <span className="font-normal ">WELCOME TO</span> */}
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
        <Poster poster={poster}/>

        <Modal open={open} id="modal">
          <div className="modal border-4 ">
            <div className="modal__close">
              <CloseIcon id="close__icon" onClick={() => setOpen(false)} />
            </div>
            <div className="modal__main pt-4 pb-4">
              <h2>GET AN ADMISSION</h2>
              {/* <h3>Science Academy - (8th Std.)</h3> */}
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
      </div>
    </div>
  );
}
