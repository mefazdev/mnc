import React from "react";
import Navbar from "../components/Navbar";
import MainBanner from "../components/MainBanner";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
// import admission from "../assets/images/admission.JPG";
import Image from "next/image";
import News from "../components/News";
import Footer from "../components/Footer";
import Status from "../components/Status";
import Link from "next/link";
import Head from "next/head";
import mnc from "../assets/images/admission.jpg";
import mah from '../assets/images/asathida/director.jpg'
import apUsthad from '../assets/images/asathida/ap-usthad.jpg'
import Admission from "../components/Admission";
import Modal from "@mui/material/Modal";
import {  useState } from "react";
 

export default function index() {

  return (
    <div>
     <Head>
        <title>Jamia Madeenathunnoor</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <div className="home">
        <div className="home__banner">
          
          <MainBanner />
        </div>

        <div className="home__about   lg:gap-10  grid lg:grid-cols-3">
          <div className="home__about__left col-span-3 lg:col-span-1">
            <div className="home__about__img">
              <Image src={mnc} />
            </div>
            {/* <img src='https://images1.content-hci.com/commimg/video/CH/myhc_279666.jpg' /> */}
          </div>
          <div className="home__about__right col-span-2">
            <h3>JAMIA MADEENATHUNNOOR</h3>
            {/* <h3>PIONEERING A PROMISING FUTURE</h3> */}
            <p>
              Markaz Garden Group of Institutions was established on the onset
              of these millennia by blending the religious wisdom and secular
              studies with a sake to enable Islamic renaissance possible. Jamia
              Madeenathunnoor is the chief institution under Markaz Garden Group
              of Institutions. Currently Jamia Madeenathunnoor has become an
              ensemble of multilayered educational system covering higher
              secondary studies, bachelors and post-graduation levels.Spread over a dozen of departments, more than three hundred students are pursuing their studies here. The institution is also providing residential facilities on the campus for students doing their courses in various disciplines and subjects.
            </p>
            <div className="home__about__more flex">
              <Link href="/About">
                <h5>READ MORE</h5>
              </Link>

              {/* <ArrowRightAltIcon /> */}
            </div>
          </div>
        </div>

        {/* <<<<<<<<<< STATUS >>>>>>>>> */}
        <Status />

        {/* <<<<<<<<<<< HOME DIRECTOR >>>>>>>>>>>>>> */}
        <div className="home__director ">
          <div className="home__director__content ">
            <h2>CHAIRMAN&apos;S MESSAGE</h2>
            <h3 className=" invisible lg:visible ">Sheikh Aboobakar Ahmed</h3>
            <div className="grid    lg:gap-10 lg:grid-cols-3">
              <div className="home__director__left order-last    lg:col-span-2">
                <p>
                  Since its humble beginning in 2001 as a college of Islamic
                  studies under its mother body Markaz Garden, today Jamia
                  Madeenathunnoor has gradually grown to become the “Centre of
                  Excellence” by creatively blending education and national
                  consciousness. People from all walks of life, the elite, the
                  poor, the educated and the common man, extended their hands in
                  this journey of social change. What makes Jamia
                  Madeenathunnoor as prestigious Islamic institution is that, it
                  is an autonomous institution under the aegis of Jamia Markaz,
                  which is a renowned university in South Asia, particularly in
                  India. 
                </p>
                <div className="home__director__more flex">
                  <h6>READ MORE</h6>

                  {/* <ArrowRightAltIcon  id='director__more__icon'/> */}
                </div>
              </div>
              <div className="chair__img__div order-first lg:order-last">
{/* */}
              {/* order-first lg:order-last */}
              <div className="chair__img  ">
                {/* <Image src='' /> */}

               <Image src={apUsthad} />
                {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9aI2UgebZOan0BpmpNYj23xwTgd9vFPtQOw&usqp=CAU" /> */}
                
              </div><h3 className="visible lg:hidden mt-2" style={{textAlign:'center'}}>
                  Sheikh Aboobakar Ahmed
                </h3>
              </div>

            </div>
          </div>
        </div>

        {/* <<<<<< HOME ADMISSION >>>>>>>>>> */}

        <Admission/>
        <div className="home__director__two ">
          <div className="home__director__content ">
            <h2>RECTOR&apos;S MESSAGE</h2>
            <h3 className=" invisible lg:visible ">Dr MAH Azhari</h3>
            <div className="grid    lg:gap-10 lg:grid-cols-3">
              <div className="home__director__left    lg:col-span-2">
                <p>
                  Welcome to Jamia Madeenathunnoor, a nongovernmental and
                  philanthropic institute founded in 2001 to mould a highly
                  talented professionals and scholars. Today, it is evident from
                  our performance that it is an institute of national impact and
                  international repute, a premier institute for knowledge
                  seekers from different parts of the globe. However, no one,
                  nor I, can claim to be the sole architect of its success. It
                  would not have been possible for the Institute to be what it
                  is today without the constant succour and support of Markaz
                  community. Our goal is to be a “Centre of Excellence” so that
                  we remain relevant to our society.
                
                </p>
                <div className="home__director__more flex">
                  <h6>READ MORE</h6>

                  {/* <ArrowRightAltIcon id='director__more__icon' /> */}
                </div>
              </div>
              <div className="chair__img__div order-first lg:order-last" >
              <div className="chair__img  ">
                <Image src={mah }/>
                {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9aI2UgebZOan0BpmpNYj23xwTgd9vFPtQOw&usqp=CAU" /> */}
               
              </div>
               <h3 className="visible lg:hidden mt-2" style={{textAlign:'center'}}>
                Dr MAH Azhari
                </h3>
                </div>
            </div>
          </div>
        </div>
        

        {/* <<<<< HOME NEWS >>>>>>>>> */}
        <News/>
      </div>
      <Footer/>
    </div>
  );
}
