import React, { useState } from "react";

import Navbar from "../components/Navbar";

import Footer from "../components/Footer";

import Image from "next/image";
 
const data = [
  {
    name: "Asaf Nurani",
    image: "/images/senate/asaf-nurani.jpg",
    designation: "Pro-Rector",
  },
  {
    name: "Sayyid Thwaha Nurani",
    image: "/images/academic-council/thaha-nurani.jpeg",
    designation: "Dean of Academic Affairs",
  },
  {
    name: "Irshad Nurani",
    image: "/images/exicutive/irshad-nurani.jpeg",
    designation: "Dean of Faculty Affairs",
  },
  {
    name: "Yunus Ahsani",
    image: "/images/exicutive/yunus-ahsani.jpeg",
    designation: "Chief Librarian",
  },
  {
    name: "Shibili Nurani",
    image: "/images/exicutive/shibili-nurani.jpeg",
    designation: "Dean of Student Affairs",
  },
  {
    name: "Mujthaba Nurani",
    image: "/images/exicutive/mujthaba-nurani.jpeg",
    designation: "Principal - Baithul Izza, Narikkuni",
  },
];

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
            {data.map((item) => (
              <div className="we__item" key={item.name}>
                <div className="we__img relative">
                  <Image src={item.image} alt="" layout="fill" />
                </div>
                <h6>{item.name}</h6>
                <h5> {item.designation}</h5>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
