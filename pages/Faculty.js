


import React, { useState } from "react";

import Navbar from "../components/Navbar";

import Footer from "../components/Footer";

import Image from "next/image";
import {mah,hussainFaizy,baqaviUstad,moidustahd,aliAhsani,kavanurUstahd,asafNurani,irshadnurani,yoonusah,thahanurani,sideeqnurani} from '../assets/data/faculty'
 
export default function We() {
 
  const [readMore2, setReadMore2] = useState(true);
  

  return (
    <div>
      <Navbar />
      <div className="faculty__header">
         <h2>SENATE</h2>
      </div>
      <div className="we" style={{scrollBehavior:'smooth'}}>
        

        <div className="we__content">
  
              
            <div className="we__row grid gap-6 grid-cols-2   lg:grid-cols-5">
              <div
                     className="we__item"
              >
                <div className="we__img">
                  {/* <Image src={hakkimusthd} /> */}
                </div>
                <h6>Dr MAH Azhari</h6>
                <h5>Rector</h5>
                {/* <p>{mah}</p> */}
              </div>
              <div
                // onClick={() => setReadMore2(!readMore2)}
                className={readMore2 ? "we__item" : "we__item__full"}
              >
                <div className="we__img">
                  {/* <Image src={asafusthd} /> */}
                </div>
                <h3>Asaf Nurani</h3>
                <h5>Pro-Rector</h5>
                {/* <p>{asafNurani}</p> */}
              </div>

              
         
              
             
            </div>
          
        </div>
      </div>
      <Footer />
    </div>
  );
}

