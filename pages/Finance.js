import React, { useState } from "react";

import Navbar from "../components/Navbar";

import Footer from "../components/Footer";

import Image from "next/image";
  
import hakkimUsthad from "../assets/images/senate/hakkim-usthad.jpg";
 import asafNurani from "../assets/images/senate/asaf-nurani.jpg";
import boosaliSaqafi from "../assets/images/senate/boosalih-saqafi.jpg";
import jalalNurani from "../assets/images/senate/jalal-nurani.jpg";
 
import ubaidSaqafi    from "../assets/images/finance/ubaid-saqafi.jpeg";
import noufalNurani    from "../assets/images/finance/naufal-nurani.jpeg";
import sadiqNurani     from "../assets/images/finance/sadiq-nurani.jpeg";

 

export default function Finance() {
  return (
    <div>
      <Navbar />
      <div className="faculty__header">
        <h2>FINANCE COMMITTEE</h2>
      </div>
      <div className="we" style={{ scrollBehavior: "smooth" }}>
        <div className="we__content">
          <div className="we__row grid gap-6 grid-cols-2   lg:grid-cols-4">
      
          <div className="we__item">
              <div className="we__img">
                <Image src={hakkimUsthad} alt=''/>
              </div>
              <h6>Dr Muhammad Abdul Hakkim Azhari</h6>
              <h5>Rector</h5>
            </div>
            

            <div className="we__item">
              <div className="we__img">
                <Image src={boosaliSaqafi} alt=''/>
              </div>
              <h6>Abu Swalih Saqafi</h6>
              <h5>Chief Finance Officer</h5>
            </div>
            <div className="we__item">
              <div className="we__img">
                <Image src={asafNurani} alt=''/>
              </div>
              <h6>Asaf Nurani</h6>
              <h5>Pro-Rector</h5>
            </div>
            <div className="we__item">
              <div className="we__img">
                <Image src={jalalNurani} alt=''/>
              </div>
              <h6>Jalal Nurani</h6>
              <h5>Chief Admin Officer</h5>
            </div>
            <div className="we__item">
              <div className="we__img">
                <Image src={noufalNurani} alt=''/>
              </div>
              <h6>Noufal Nurani</h6>
              <h5>Finance Manager</h5>
            </div>
            <div className="we__item">
              <div className="we__img">
                <Image src={sadiqNurani} alt=''/>
              </div>
              <h6>Swadiq Nurani</h6>
              <h5>Finance Advisor</h5>
            </div>
         
            <div className="we__item">
              <div className="we__img">
                <Image src={ubaidSaqafi} alt=''/>
              </div>
              <h6>
Ubaidullah Saqafi</h6>
              <h5>Chief Accountant</h5>
            </div>
             

             
             
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

  