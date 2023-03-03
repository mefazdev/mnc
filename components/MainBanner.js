import React, { useEffect, useState } from "react";
import banner1 from "../assets/images/one.jpg";
import banner2 from "../assets/images/two.jpg";
import banner3 from "../assets/images/three.jpg";

import Modal from "@mui/material/Modal";
import Image from "next/image";
import CloseIcon from "@mui/icons-material/Close";
import Carousel from "react-material-ui-carousel";
import Link from "next/link";
export default function MainBanner() {
  const [open, setOpen] = useState(false);

  function timeout(delay) {
    return new Promise((res) => setTimeout(res, delay));
  }
  const controlOpen = async () => {
    await timeout(5000);
    setOpen(true);
  };
  useEffect(() => {
    controlOpen();
  }, []);
  return (
    <div className="banner__carousel">
      <Carousel
        // autoPlay={false}
        indicators={false}
        infiniteLoop={true}
        stopAutoPlayOnHover={false}
      >
         <div className="banner__img">
          <div className="main__banner__text">
            <div className="main__banner__text__first__row">
              <h2>
                {" "}
                <span className="font-normal ">WELCOME TO</span> JAMIA
                MADEENATHUNNOOR
              </h2>
            </div>
            <div className="main__banner__text__second__row">
              <h3>PIONEERING A PROMISING FUTURE</h3>
              {/* <h6>ENTRANCE EXAM RESULTS FOR</h6>

               <button> 8th STANDARD</button>
              
                <button className="ml-4">HSS PROGRAMMES</button> */}
             
            </div>
          </div>
        </div>

        <div className="banner__img__three">
         

          <div className="main__banner__text">
            <div className="main__banner__text__first__row">
              <h2>
                {" "}
                <span className="font-normal">WELCOME TO</span> JAMIA
                MADEENATHUNNOOR
              </h2>
            </div>
            <div className="main__banner__text__second__row">
              <h3>PIONEERING A PROMISING FUTURE</h3>
                </div>
          </div>
        </div> 
        <div className="banner__img__two">
           

          <div className="main__banner__text">
            <div className="main__banner__text__first__row">
              <h2>
                {" "}
                <span className="font-normal">WELCOME TO</span> JAMIA
                MADEENATHUNNOOR
              </h2>
            </div>
            <div className="main__banner__text__second__row">
                 <h3>PIONEERING A PROMISING FUTURE</h3>
       
            
              

                </div>
          </div>
        </div> 
      </Carousel>

      <Modal open={false} id="modal">
        <div className="modal">
          <div className="modal__close">
            <CloseIcon id="close__icon" onClick={() => setOpen(false)} />
          </div>
          <div className="modal__main">
            <h2>GET AN ADMISSION</h2>
            {/* <h3>Science Academy - (8th Std.)</h3> */}
            <div className="modal__btn">
              <a href="https://forms.gle/qQ7rSh96pf2L5Ftf8">
                <button>8th STANDARD</button>
              </a>
              <a href="http://admission.jamiamadeenathunnoor.org">
                <button>HSS PROGRAMMES</button>
              </a>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
