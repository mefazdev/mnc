import React, { useEffect, useState } from "react";

import Modal from "@mui/material/Modal";

import CloseIcon from "@mui/icons-material/Close";
import Carousel from "react-material-ui-carousel";
import img from '../assets/images/students/img-2.jpeg'
import img2 from '../assets/images/students/img-1.jpeg'
 
import img3 from '../assets/images/students/img-3.jpeg'
import Image from "next/image";

export default function MobBanner() {
  const [open, setOpen] = useState(false);

  function timeout(delay) {
    return new Promise((res) => setTimeout(res, delay));
  }
  const controlOpen = async () => {
    await timeout(5000);
    setOpen(true);
  };
  useEffect(() => {
    // controlOpen();
  }, []);
  return (
    <div>
<div className="pt-20 relative bg-black bg-opacity-90">
      <Carousel
        // autoPlay={false}
        indicators={false}
        // navButtonsAlwaysVisible
        infiniteLoop={true}
        stopAutoPlayOnHover={false}
        duration={1000}
        animation="slide"
      >
         
         
       

     
       <div className="h-64">
            <Image src={img2}/>
        </div>
        <div className="h-64">
            <Image src={img}/>
        </div>
        <div className="h-64">
            <Image src={img3}/>
        </div>
        
      </Carousel>
      <div className="main__banner__tex pb-5 pt-3">
            
              <h2 className="text-center text-lg  w-full text-white">
            
                JAMIA MADEENATHUNNOOR
              </h2>
            
            
              <h3 style={{color:'rgb(12, 161, 12)'}} className="text-center  w-full mt-1">
                PIONEERING A PROMISING FUTURE
              </h3>
              <div className="flex mt-3">
              <button
              onClick={()=>setOpen(true)}
              className="text-white border border-white p-1 px-3 m-auto">GET AN ADMISSION</button>
             
              </div>
             
            
          </div>



       

 
          <Modal open={open} id="modal">
        <div className="modal border-4 ">
          <div className="modal__close">
            <CloseIcon id="close__icon" onClick={() => setOpen(false)} />
          </div>
          <div className="modal__main pt-4 pb-4">
            <h2>ADMISSION</h2>
            {/* <h3>Science Academy - (8th Std.)</h3> */}
            <div className="modal__btn lg:flex w-full">
            <a className="flex mt-2 w-full"  href="https://docs.google.com/forms/d/e/1FAIpQLSd3JChgrFpRN5QebID-_nFwBT0lpCrJqmwEbgdbAslV7mBdEg/viewform?usp=sf_link">
<<<<<<< HEAD
                   <button className="m-auto w-fit border hover:scale-105 hover:transition ease-linear duration-150 hover:border border-gray-300">    JMN JUNIOR SCHOOL</button>
              </a>
              <a className="flex mt-2 w-full" href="https://admission.jamiamadeenathunnoor.org">
              <button className="m-auto w-fit border border-gray-200  hover:scale-105 hover:transition ease-linear duration-150 hover:border ">    JMN SENIOR SCHOOL</button>
=======
                   <button className="m-auto border hover:scale-105 hover:transition ease-linear duration-150 hover:border border-gray-300">JMN JUNIOR SCHOOL</button>
              </a>
              <a className="flex mt-2 w-full" href="https://admission.jamiamadeenathunnoor.org">
              <button className="m-auto border border-gray-200  hover:scale-105 hover:transition ease-linear duration-150 hover:border ">JMN SENIOR SCHOOL</button>
>>>>>>> 5f98d0b96ce66be9efcf24fc538cc152ff834a14
              </a>
            </div>
          </div>
        </div>
      </Modal>   
       
    </div>


    
    
    </div>
    
  );
}
