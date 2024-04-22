import Image from "next/image";
import React from "react";

import img1 from "../assets/images/posters/ps1.jpeg";
import img2 from "../assets/images/posters/ps2.jpeg";
import img3 from "../assets/images/posters/ps3.jpeg";
import img4 from "../assets/images/posters/ps4.jpeg";
import Carousel from "react-material-ui-carousel";
export default function Poster({poster}) {
  return (
    <div className="absolute hidden md:flex justify-center items-center bg-opacity-70 md:right-4 xl:right-24  bottom-24 mb-20 lg:mb-10  -rotate-6  bg-black ">
     <div className='bg-gray-300 h-4 w-4 absolute right-4 top-4 rounded-full flex justify-center items-center'><div className='bg-gray-800 h-2 w-2  rounded-full'></div></div>
      <Carousel
        // autoPlay={false}
        indicators={false}
        infiniteLoop={true}
        stopAutoPlayOnHover={true}
        // animation="slide"
      >
 {poster?.map((d,i)=>{
  return(
<div key={i} className="bg-opacity-70   p-7  rotate-1 w-72 lg:w-96 relative">

          <div className=" rotate-6 border-b border-green-700 pb-2">
            <img src={d?.image} alt="" className=""/>
          </div> 
         
        </div>
  )
 })}
        
       
      </Carousel>
    </div>
  );
}
