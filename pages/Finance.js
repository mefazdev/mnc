import React, { useState } from "react";

import Navbar from "../components/Navbar";

import Footer from "../components/Footer";

import Image from "next/image";
   
 const data=[
  {
    name: "Dr Muhammad Abdul Hakkim Azhari",
    image: "/images/senate/hakkim-usthad.jpg",
    designation: "Rector",
  },
  {
    name: "Abu Swalih Saqafi",
    image: "/images/senate/boosalih-saqafi.jpg",
    designation: "Chief Finance Officer",
  },
  {
    name: "Asaf Nurani",
    image: "/images/senate/asaf-nurani.jpg",
    designation: "Pro-Rector",
  },
  {
    name: "Jalal Nurani",
    image: "/images/senate/jalal-nurani.jpg",
    designation: "Chief Admin Officer",
  },
  {
    name: "Noufal Nurani",
    image: "/images/finance/naufal-nurani.jpeg",
    designation: "Finance Manager",

  },
  {
    name: "Sadiq Nurani",
    image: "/images/finance/sadiq-nurani.jpeg",
    designation: "Finance Advisor",

  },{
    name: "Ubaidullah Saqafi",
    image: "/images/finance/ubaid-saqafi.jpeg",
    designation: "Chief Accountant",
    
  }
 ]

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
      
          
               {data.map((item=>(
                  <div className="we__item" key={item.name}>
                  <div className="we__img relative" >
                    <Image src={item.image} alt='' layout="fill"/>
                  </div>
                  <h6>{item.name}</h6>
                  <h5> {item.designation}</h5>
                </div>
               )))}
       
             
             
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

  