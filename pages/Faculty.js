import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {mah,hussainFaizy,baqaviUstad,moidustahd,aliAhsani,kavanurUstahd,asafNurani} from '../assets/data/faculty'
import Head  from "next/head";
 
export default function Faculty() {
    const [readMore1, setReadMore1] = useState(true);
    const [readMore2, setReadMore2] = useState(true);
    const [readMore3, setReadMore3] = useState(true);
    const [readMore4, setReadMore4] = useState(true);
    const [readMore5, setReadMore5] = useState(true);
    const [readMore6, setReadMore6] = useState(true);
    const [readMore7, setReadMore7] = useState(true);
  return(
    <>
     <Head>
        <title>  Faculty profile</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
     
      <div className="faculty__header">
        <h2>FACULTY PROFILE</h2>
      </div>
      <div className="faculty__content ">
        <div className="faculty__row grid gap-5 lg:gap-20 lg:grid-cols-2">
          <div className="faculty__box grid lg:grid-cols-3">
            <div className="faculty__img"></div>
            <div className="faculty__text lg:col-span-2">
              <h5>DR. MAH AZHARI</h5>
              <p>
                  {readMore1 ? mah.slice(0, 190) : mah}...
                  
                </p>
              <h6 onClick={()=>setReadMore1(!readMore1)}
                    style={{ color: "#46CE04", cursor: "pointer" }}> {readMore1 ? "Read more" : " Show less"}</h6>
            
            </div>
          </div>
          <div className="faculty__box grid lg:grid-cols-3">
            <div className="faculty__img"></div>
            <div className="faculty__text lg:col-span-2">
              <h5>HUSSAIN FAIZY </h5>
              <p>
                  {readMore2 ? hussainFaizy.slice(0, 190) : hussainFaizy}...
                  
                </p>
              <h6 onClick={()=>setReadMore2(!readMore2)}
                    style={{ color: "#46CE04", cursor: "pointer" }}> {readMore2 ? "Read more" : " Show less"}</h6>
            
            </div>
          </div>
        </div>


        <div className="faculty__row grid gap-5 lg:gap-20 lg:grid-cols-2">
          <div className="faculty__box grid lg:grid-cols-3">
            <div className="faculty__img"></div>
            <div className="faculty__text lg:col-span-2">
              <h5>MUHYUDHEEN BAQAVI</h5>
              <p>
                  {readMore3 ? baqaviUstad.slice(0, 190) : baqaviUstad}...
                  
                </p>
              <h6 onClick={()=>setReadMore3(!readMore3)}
                    style={{ color: "#46CE04", cursor: "pointer" }}> {readMore3 ? "Read more" : " Show less"}</h6>
            
            </div>
          </div>
          <div className="faculty__box grid lg:grid-cols-3">
            <div className="faculty__img"></div>
            <div className="faculty__text lg:col-span-2">
              <h5>ALI AHSANI </h5>
              <p>
                  {readMore4 ? aliAhsani.slice(0, 190) : aliAhsani}...
                  
                </p>
              <h6 onClick={()=>setReadMore4(!readMore4)}
                    style={{ color: "#46CE04", cursor: "pointer" }}> {readMore4 ? "Read more" : " Show less"}</h6>
            
            </div>
          </div>
        </div>


        <div className="faculty__row grid gap-5 lg:gap-20 lg:grid-cols-2">
          <div className="faculty__box grid lg:grid-cols-3">
            <div className="faculty__img"></div>
            <div className="faculty__text lg:col-span-2">
              <h5>MUHYUDHEEN SAQAFI THALEEKARA </h5>
              <p>
                  {readMore5 ? moidustahd.slice(0, 190) : moidustahd}...
                  
                </p>
              <h6 onClick={()=>setReadMore5(!readMore5)}
                    style={{ color: "#46CE04", cursor: "pointer" }}> {readMore5 ? "Read more" : " Show less"}</h6>
            
            </div>
          </div>
          <div className="faculty__box grid lg:grid-cols-3">
            <div className="faculty__img"></div>
            <div className="faculty__text lg:col-span-2">
              <h5>MUHYUDHEEN SAQAFI KAVANUR </h5>
              <p>
                  {readMore6 ? kavanurUstahd.slice(0, 190) : kavanurUstahd}...
                  
                </p>
              <h6 onClick={()=>setReadMore6(!readMore6)}
                    style={{ color: "#46CE04", cursor: "pointer" }}> {readMore6 ? "Read more" : " Show less"}</h6>
            
            </div>
          </div>
        </div>
        <div className="faculty__row grid gap-5 lg:gap-20 lg:grid-cols-2">
          <div className="faculty__box grid lg:grid-cols-3">
            <div className="faculty__img"></div>
            <div className="faculty__text lg:col-span-2">
              <h5>ASAF NURANI ASSAQAFI</h5>
              <p>
                  {readMore7 ? asafNurani.slice(0, 190) : asafNurani}...
                  
                </p>
              <h6 onClick={()=>setReadMore7(!readMore7)}
                    style={{ color: "#46CE04", cursor: "pointer" }}> {readMore7 ? "Read more" : " Show less"}</h6>
            
            </div>
          </div>
         
        </div>
      </div>
      <Footer/>
    </>
  );
}
