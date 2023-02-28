import React, { useState } from "react";

import Navbar from "../components/Navbar";

import Footer from "../components/Footer";

import Image from "next/image";
  
 
import asafNurani from "../assets/images/senate/asaf-nurani.jpg";
 
import vajidNurani    from "../assets/images/academic-council/vajid-nurani.jpeg";
import thahaNurani     from "../assets/images/academic-council/thaha-nurani.jpeg";

import irshadNurani    from "../assets/images/exicutive/irshad-nurani.jpeg";
import yunusAhsani    from "../assets/images/exicutive/yunus-ahsani.jpeg";
import shibiliNurani    from "../assets/images/exicutive/shibili-nurani.jpeg";
import mujthabaNurani    from "../assets/images/exicutive/mujthaba-nurani.jpeg";


import ashfaqNurani    from "../assets/images/academic-council/ashfaq-nurani.jpeg";

 

export default function Exicutive() {
  return (
    <div>
      <Navbar />
      <div className="faculty__header">
        <h2>EXECUTIVE COUNCIL</h2>
      </div>
      <div className="we" style={{ scrollBehavior: "smooth" }}>
        <div className="we__content">
          <div className="we__row grid gap-6 grid-cols-2   lg:grid-cols-4">
      
             
            <div className="we__item">
              <div className="we__img">
                <Image src={asafNurani} />
              </div>
              <h6>Asaf Nurani</h6>
              <h5>Pro-Rector</h5>
            </div>
            <div className="we__item">
              <div className="we__img">
                <Image src={thahaNurani} />
              </div>
              <h6>Sayyid Thwaha Nurani</h6>
              <h5>Dean of Academic Affairs</h5>
            </div>
            <div className="we__item">
              <div className="we__img">
                <Image src={irshadNurani} />
              </div>
              <h6>Irshad Nurani</h6>
              <h5>Dean of Faculty Affairs</h5>
            </div>
            <div className="we__item">
              <div className="we__img">
                <Image src={yunusAhsani} />
              </div>
              <h6>Yunus Ahsani</h6>
              <h5>Chief Librarian</h5>
            </div>
            <div className="we__item">
              <div className="we__img">
                <Image src={shibiliNurani} />
              </div>
              <h6>Shibli Thwahir Nurani</h6>
              <h5>Dean of Student Affairs</h5>
            </div>
            <div className="we__item">
              <div className="we__img">
                <Image src={mujthabaNurani} />
              </div>
              <h6>Mujthaba Nurani</h6>
              <h5>Principal - Baithul Izza, Narikkuni</h5>
            </div>
            <div className="we__item">
              <div className="we__img">
                <Image src={ashfaqNurani} />
              </div>
              <h6>Ashfaque Nurani</h6>
              <h5>Academic Director i/c</h5>
            </div>
            <div className="we__item">
              <div className="we__img">
                <Image src={vajidNurani} />
              </div>
              <h6>Vajid Nurani</h6>
              <h5>Registrar i/c</h5>
            </div>
             

             
             
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

  
