import React, { useState } from "react";

import Navbar from "../components/Navbar";

import Footer from "../components/Footer";

import Image from "next/image";
import hakkimUsthad from "../assets/images/senate/hakkim-usthad.jpg";
 
import asafNurani from "../assets/images/senate/asaf-nurani.jpg";
 
import jafarNurani from "../assets/images/senate/jafar-nurani.jpg";
 
import aliAhsani   from "../assets/images/academic-council/ali-ahsani.jpeg";
import kavanurUsthad    from "../assets/images/academic-council/kavanur-usthad.jpeg";
import moidusthad    from "../assets/images/academic-council/moidu-saqafi.jpeg";
import ashfaqNurani    from "../assets/images/academic-council/ashfaq-nurani.jpeg";
import roshanNurani    from "../assets/images/academic-council/roshan-nurani.jpeg";
import  shaukathAli    from "../assets/images/academic-council/shaukath-ali.jpeg";
import  shibiliNurani    from "../assets/images/academic-council/shibili-nurani.jpeg";
import shihabNurani    from "../assets/images/academic-council/shihab-nurani.jpeg";
import thahaNurani     from "../assets/images/academic-council/thaha-nurani.jpeg";
import vajidNurani    from "../assets/images/academic-council/vajid-nurani.jpeg";
 
 
 

export default function Academic() {
  return (
    <div>
      <Navbar />
      <div className="faculty__header">
        <h2>ACADEMIC COUNCIL</h2>
      </div>
      <div className="we" style={{ scrollBehavior: "smooth" }}>
        <div className="we__content">
          <div className="we__row grid gap-6 grid-cols-2   lg:grid-cols-4">
             
            <div className="we__item">
              <div className="we__img">
                <Image src={hakkimUsthad} />
              </div>
              <h6>Dr Muhammad Abdul Hakkim Azhari</h6>
              <h5>Rector</h5>
            </div>
            <div className="we__item">
              <div className="we__img">
                <Image src={aliAhsani} />
              </div>
              <h6>Ali Ahsani</h6>
              <h5>HoD, Fiqh</h5>
            </div>
            <div className="we__item">
              <div className="we__img">
                <Image src={moidusthad} />
              </div>
              <h6>Muhyudheen Saqafi Thaleekkara</h6>
              <h5>HoD, Tafsir</h5>
            </div>
            <div className="we__item">
              <div className="we__img">
                <Image src={kavanurUsthad} />
              </div>
              <h6>Muhyudheen Saqafi kavanoor</h6>
              <h5>HoD, Aqeeda</h5>
            </div>
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
            <div className="we__item">
              <div className="we__img">
                <Image src={jafarNurani} />
              </div>
              <h6>Jafar Nurani</h6>
              <h5>Principal, Markhinz Bangalore</h5>
            </div>
            <div className="we__item">
              <div className="we__img">
                <Image src={shihabNurani} />
              </div>
              <h6>Shihabudheen Nurani</h6>
              <h5>Principal, Markazul Hidaya, Kodagu</h5>
            </div>
            <div className="we__item">
              <div className="we__img">
                <Image src={roshanNurani} />
              </div>
              <h6>Dr. Roshan Nurani
</h6>
              <h5>Academic Expert & Vice Rector Jamia Markaz</h5>
            </div>
            <div className="we__item">
              <div className="we__img">
                <Image src={shaukathAli} />
              </div>
              <h6>Shoukath Ali Kamil</h6>
              <h5>Academic Expert & Counselor, IIT Bombay</h5>
            </div>

             
             
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

  