import React, { useState } from "react";

import Navbar from "../components/Navbar";

import Footer from "../components/Footer";

import Image from "next/image";
import hakkimUsthad from "../assets/images/senate/hakkim-usthad.jpg";
import apUsthad from "../assets/images/senate/ap-usthad.jpg";
import asafNurani from "../assets/images/senate/asaf-nurani.jpg";
import boosaliSaqafi from "../assets/images/senate/boosalih-saqafi.jpg";
import jafarNurani from "../assets/images/senate/jafar-nurani.jpg";
import jalalNurani from "../assets/images/senate/jalal-nurani.jpg";
import zuhairNurani from "../assets/images/senate/zuhair-nurani.jpg";

export default function Senate() {
  return (
    <div>
      <Navbar />
      <div className="faculty__header">
        <h2>SENATE</h2>
      </div>
      <div className="we" style={{ scrollBehavior: "smooth" }}>
        <div className="we__content">
          <div className="we__row grid gap-6 grid-cols-2   lg:grid-cols-4">
            <div className="we__item">
              <div className="we__img">
                <Image src={apUsthad} />
              </div>
              <h6>Sheikh Abubakr Ahmad</h6>
              <h5>Chairman</h5>
            </div>
            <div className="we__item">
              <div className="we__img">
                <Image src={hakkimUsthad} />
              </div>
              <h6>Dr Muhammad Abdul Hakkim Azhari</h6>
              <h5>Rector</h5>
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
                <Image src={boosaliSaqafi} />
              </div>
              <h6>Abu Swalih Saqafi</h6>
              <h5>Chief Finance Officer</h5>
            </div>
            <div className="we__item">
              <div className="we__img">
                <Image src={jalalNurani} />
              </div>
              <h6>Jalal Nurani</h6>
              <h5>Chief Admin Officer</h5>
            </div>
            <div className="we__item">
              <div className="we__img">
                <Image src={zuhairNurani} />
              </div>
              <h6>Zuhairudheen Nurani</h6>
              <h5>Chairman, Prism Foundation</h5>
            </div>
            <div className="we__item">
              <div className="we__img">
                <Image src={jafarNurani} />
              </div>
              <h6>Jafar Nurani</h6>
              <h5>Convenor, Prism Foundation</h5>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
 