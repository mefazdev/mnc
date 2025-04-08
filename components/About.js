import Link from 'next/link'
import React from 'react'
import mnc from "../assets/images/admission.jpg";
import Image from 'next/image';
export default function About() {
  return (
    <div
          className=" pt-4 lg:pt-24"
          id="about"
           
        >
          <div
            className="home__about   lg:gap-10  grid lg:grid-cols-3"
            data-aos="fade-up"
          >
            <div className="home__about__left  col-span-3 lg:col-span-1">
              <div className="home__about__img ">
                <Image src={mnc} className="rounded-lg shadow" alt="" />
              </div>
              {/* <img src='https://images1.content-hci.com/commimg/video/CH/myhc_279666.jpg' /> */}
            </div>
            <div className="home__about__right col-span-2 mt-2 lg:mt-0">
              <h3 className="text-green-800">JAMIA MADEENATHUNNOOR</h3>
              {/* <h3>PIONEERING A PROMISING FUTURE</h3> */}
              <p>
                Markaz Garden Group of Institutions was established on the onset
                of these millennia by blending the religious wisdom and secular
                studies with a sake to enable Islamic renaissance possible.
                Jamia Madeenathunnoor is the chief institution under Markaz
                Garden Group of Institutions. Currently Jamia Madeenathunnoor
                has become an ensemble of multilayered educational system
                covering higher secondary studies, bachelors and post-graduation
                levels.Spread over a dozen of departments, more than three
                hundred students are pursuing their studies here. The
                institution is also providing residential facilities on the
                campus for students doing their courses in various disciplines
                and subjects.
              </p>
              <div
                className="cursor-pointer m-auto w-fit bg-green-800 text-white  p-1.5    rounded-full px-4 lg:px-5 mt-3 hover:scale-105 transition ease-linear duration-200"
                // className="home__about__more mt-2 lg:mt-0 flex m-auto w-fit p-1 text-white rounded-sm px-4"
              >
                <Link href="/About">
                  <h5>Read More</h5>
                </Link>

                {/* <ArrowRightAltIcon /> */}
              </div>
            </div>
          </div>
        </div>
  )
}
