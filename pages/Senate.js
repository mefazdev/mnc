import React, { useState } from "react";

import Navbar from "../components/Navbar";

import Footer from "../components/Footer";

import Image from "next/image";
 
const data =[
  {
    name: "Sheikh Abubakr Ahmad",
    image: "/images/senate/ap-usthad.jpg",
    designation: "Chairman",
  },
  {
    name: "Dr Muhammad Abdul Hakkim Azhari",
    image: "/images/senate/hakkim-usthad.jpg",
    designation: "Rector",
  },
{
    name: "Asaf Nurani",
    image: "/images/senate/asaf-nurani.jpg",
    designation: "Pro-Rector",

},
{
    name: "Abu Swalih Saqafi",
    image: "/images/senate/boosalih-saqafi.jpg",
    designation: "Chief Finance Officer",
},
{
    name: "Jalal Nurani",
    image: "/images/senate/jalal-nurani.jpg",
    designation: "Chief Admin Officer",
},
{
    name: "Zuhairudheen Nurani",
    image: "/images/senate/zuhair-nurani.jpg",
    designation: "Chairman, Prism Foundation",

},
{
    name: "Jafar Nurani",
    image: "/images/senate/jafar-nurani.jpg",
    designation: "Convenor, Prism Foundation",
},

 
]
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
 