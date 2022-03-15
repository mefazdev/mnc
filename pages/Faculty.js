


import React, { useState } from "react";

import Navbar from "../components/Navbar";

import Footer from "../components/Footer";

import Image from "next/image";
import {mah,hussainFaizy,baqaviUstad,moidustahd,aliAhsani,kavanurUstahd,asafNurani,irshadnurani,yoonusah,thahanurani,sideeqnurani} from '../assets/data/faculty'
import hakkimusthd from '../assets/images/asathida/hakeemUsthd.jpg'
import aliusthd  from '../assets/images/asathida/aliusthd.jpeg'
import asafusthd   from '../assets/images/asathida/asafusthd.jpeg'
import baqavius  from '../assets/images/asathida/baqaviusthd.jpeg'
import  husainusthd from '../assets/images/asathida/husainusthd.jpeg'
import irshad   from '../assets/images/asathida/irshad.jpeg'
import kvrusthd   from '../assets/images/asathida/kvrusthd.jpeg'
import moidusthd  from '../assets/images/asathida/moiduusthd.jpeg'
import sideeq  from '../assets/images/asathida/sideeq.jpeg'
import thaha  from '../assets/images/asathida/thaha.jpeg'
import yoonus  from '../assets/images/asathida/yoonus.jpeg'
export default function We() {
  const [readMore1, setReadMore1] = useState(true);
  const [readMore2, setReadMore2] = useState(true);
  const [readMore3, setReadMore3] = useState(true);
  const [readMore4, setReadMore4] = useState(true);
  const [readMore5, setReadMore5] = useState(true);
  const [readMore6, setReadMore6] = useState(true);
  const [readMore7, setReadMore7] = useState(true);
  const [readMore8, setReadMore8] = useState(true);
  const [readMore9, setReadMore9] = useState(true);
  const [readMore10, setReadMore10] = useState(true);
  const [readMore11, setReadMore11] = useState(true);

  return (
    <div>
      <Navbar />
      <div className="faculty__header">
         <h2>FACULTY PROFILE</h2>
      </div>
      <div className="we" style={{scrollBehavior:'smooth'}}>
        

        <div className="we__content ">
          <div>
           
            <div className="we__row grid gap-6 grid-cols-2   lg:grid-cols-5">
              <div
                onClick={() => setReadMore1(!readMore1)}
                className={readMore1 ? "we__item" : "we__item__full"}
              >
                <div className="we__img">
                  <Image src={hakkimusthd} />
                </div>
                <h6>Dr MAH Azhari</h6>
                <h5>Rector</h5>
                <p>{mah}</p>
              </div>
              <div
                onClick={() => setReadMore2(!readMore2)}
                className={readMore2 ? "we__item" : "we__item__full"}
              >
                <div className="we__img">
                  <Image src={asafusthd} />
                </div>
                <h6>Asaf Nurani</h6>
                <h5>Pro-Rector</h5>
                <p>{asafNurani}</p>
              </div>

              <div
                onClick={() => setReadMore3(!readMore3)}
                className={readMore3 ? "we__item" : "we__item__full"}
              >
                <div className="we__img">
                  <Image src={sideeq} />
                </div>
                <h6>Sideeq Nurani</h6>
                <h5>Dean of Academics</h5>
                <p>{sideeqnurani} </p>
              </div>
              <div
                onClick={() => setReadMore4(!readMore4)}
                className={readMore4 ? "we__item" : "we__item__full"}
              >
                <div className="we__img">
                  <Image src={irshad} />
                </div>
                <h6>Irshad Nurani</h6>
                <h5 >Dean of Faculty Affairs </h5>
                <p>{irshadnurani}</p>
              </div>
              <div
                onClick={() => setReadMore5(!readMore5)}
                className={readMore5 ? "we__item" : "we__item__full"}
              >
                <div className="we__img">
                  <Image src={thaha} />
                </div>
                <h6>Sayyid Thaha Nurani</h6>
                <h5>
                Dean of Students Affairs
                </h5>
                <p>{thahanurani}</p>
              </div>
            </div>
           
          </div>

          <div className="team__row">
           
            <div className="we__row grid gap-10 grid-cols-2 md:grid-cols-2 lg:grid-cols-5">
            <div
                onClick={() => setReadMore6(!readMore6)}
                className={readMore6 ? "we__item" : "we__item__full"}
              >
                <div className="we__img">
                  <Image src={moidusthd} />
                </div>
                <h6>Muhyudheen Saqafi  </h6>
                <h5> HoD Thafseer</h5>

                <div className="we__text"><p>{moidustahd}</p></div>
              </div>
              <div
                className={readMore7 ? "we__item" : "we__item__full"}
                onClick={() => setReadMore7(!readMore7)}
              >
                <div className="we__img">
                  <Image src={husainusthd} />
                </div>
                <h6>Husain Faizy</h6>
                <h5>HoD Hadeeth</h5>
                <div className="we__text">{hussainFaizy}</div>
              </div>
              <div
                className={readMore8 ? "we__item" : "we__item__full"}
                onClick={() => setReadMore8(!readMore8)}
              >
                <div className="we__img">
                  <Image src={aliusthd} />
                </div>
                <h6>Ali Ahsani</h6>
                <h5>HoD Fiqh</h5>
                <div className="we__text"><p>{aliAhsani}</p></div>
              </div>
              <div 
               className={readMore9 ? "we__item" : "we__item__full"}
               onClick={() => setReadMore9(!readMore9)}
              >
                <div className="we__img">
                  <Image src={kvrusthd} />
                </div>
                <h6>Muhyudheen Saqafi </h6>
                <h5>HoD Aqeeda</h5>
                <div className="we__text"><p>{kavanurUstahd}</p></div>
              </div>
              <div  className={readMore10 ? "we__item" : "we__item__full"}
                onClick={() => setReadMore10(!readMore10)}>
                <div className="we__img">
                  <Image src={baqavius} />
                </div>
                <h6>Muhyudheen Baqavi</h6>
                <h5>HoD Thazkiyath  </h5>
                <div className="we__text"><p>{baqaviUstad}</p></div>
              </div>
            </div>

            <div className="we__row grid grid gap-6 grid-cols-2   lg:grid-cols-5 ">
              <div  className={readMore11 ? "we__item" : "we__item__full"}
                onClick={() => setReadMore11(!readMore11)}>
                <div className="we__img">
                  <Image src={yoonus} />
                </div>
                <h6>Yoonus Ahsani</h6>
                <h5>Chief Librarian</h5>
                <div className="we__text"><p>{yoonusah}</p></div>
              </div>
              
             
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

{
  /* <div className="lg:col-span-2">
<div className="we__sub">
  <h2>Our Team</h2>
</div>

<div className="we__box grid  lg:grid-cols-4">
  <div>
    <img src="https://cdn.britannica.com/54/188754-050-A3613741/Elon-Musk-2010.jpg" />{" "}
  </div>

  <div className="lg:col-span-3  ">
    <h4>Mujeebu Rahman K.C.</h4>
    <p>
      {readMore1 ? mujeeb.slice(0, 190) : mujeeb}...
      
    </p>
  <h6 onClick={()=>setReadMore1(!readMore1)}
        style={{ color: "#46CE04", cursor: "pointer" }}> {readMore1 ? "Read more" : " Show less"}</h6>
  </div>
</div>
<div className="we__box grid  lg:grid-cols-4">
  <div>
    <img src="https://cdn.britannica.com/54/188754-050-A3613741/Elon-Musk-2010.jpg" />{" "}
  </div>

  <div className="lg:col-span-3">
    <h4>Jalal Rahman</h4>
    <p>
      {readMore2 ? jalal.slice(0, 190) : jalal}...
      
    </p>
  <h6 onClick={()=>setReadMore2(!readMore2)}
        style={{ color: "#46CE04", cursor: "pointer" }}> {readMore2 ? "Read more" : " Show less"}</h6>
  </div>
</div>
<div className="we__box grid  lg:grid-cols-4">
  <div>
    <img src="https://cdn.britannica.com/54/188754-050-A3613741/Elon-Musk-2010.jpg" />{" "}
  </div>

  <div className="lg:col-span-3">
    <h4>Shahul Hameed</h4>
    <p>
      {readMore3 ? shahul.slice(0, 190) : shahul}...
      
    </p>
  <h6 onClick={()=>setReadMore3(!readMore3)}
        style={{ color: "#46CE04", cursor: "pointer" }}> {readMore3 ? "Read more" : " Show less"}</h6>
  </div>
</div>

</div> */
}

// 1280
// 960

// import React, { useState } from "react";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import {mah,hussainFaizy,baqaviUstad,moidustahd,aliAhsani,kavanurUstahd,asafNurani} from '../assets/data/faculty'
// import Head  from "next/head";
 
// export default function Faculty() {
//     const [readMore1, setReadMore1] = useState(true);
//     const [readMore2, setReadMore2] = useState(true);
//     const [readMore3, setReadMore3] = useState(true);
//     const [readMore4, setReadMore4] = useState(true);
//     const [readMore5, setReadMore5] = useState(true);
//     const [readMore6, setReadMore6] = useState(true);
//     const [readMore7, setReadMore7] = useState(true);
//   return(
//     <>
//      <Head>
//         <title>  Faculty profile</title>
//         <meta name="description" content="" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//       <Navbar />
     
//       <div className="faculty__header">
//         <h2>FACULTY PROFILE</h2>
//       </div>
//       <div className="faculty__content ">
//         <div className="faculty__row grid gap-5 lg:gap-20 lg:grid-cols-2">
//           <div className="faculty__box grid lg:grid-cols-3">
//             <div className="faculty__img"></div>
//             <div className="faculty__text lg:col-span-2">
//               <h5>DR. MAH AZHARI</h5>
//               <p>
//                   {readMore1 ? mah.slice(0, 190) : mah}...
                  
//                 </p>
//               <h6 onClick={()=>setReadMore1(!readMore1)}
//                     style={{ color: "#46CE04", cursor: "pointer" }}> {readMore1 ? "Read more" : " Show less"}</h6>
            
//             </div>
//           </div>
//           <div className="faculty__box grid lg:grid-cols-3">
//             <div className="faculty__img"></div>
//             <div className="faculty__text lg:col-span-2">
//               <h5>HUSSAIN FAIZY </h5>
//               <p>
//                   {readMore2 ? hussainFaizy.slice(0, 190) : hussainFaizy}...
                  
//                 </p>
//               <h6 onClick={()=>setReadMore2(!readMore2)}
//                     style={{ color: "#46CE04", cursor: "pointer" }}> {readMore2 ? "Read more" : " Show less"}</h6>
            
//             </div>
//           </div>
//         </div>


//         <div className="faculty__row grid gap-5 lg:gap-20 lg:grid-cols-2">
//           <div className="faculty__box grid lg:grid-cols-3">
//             <div className="faculty__img"></div>
//             <div className="faculty__text lg:col-span-2">
//               <h5>MUHYUDHEEN BAQAVI</h5>
//               <p>
//                   {readMore3 ? baqaviUstad.slice(0, 190) : baqaviUstad}...
                  
//                 </p>
//               <h6 onClick={()=>setReadMore3(!readMore3)}
//                     style={{ color: "#46CE04", cursor: "pointer" }}> {readMore3 ? "Read more" : " Show less"}</h6>
            
//             </div>
//           </div>
//           <div className="faculty__box grid lg:grid-cols-3">
//             <div className="faculty__img"></div>
//             <div className="faculty__text lg:col-span-2">
//               <h5>ALI AHSANI </h5>
//               <p>
//                   {readMore4 ? aliAhsani.slice(0, 190) : aliAhsani}...
                  
//                 </p>
//               <h6 onClick={()=>setReadMore4(!readMore4)}
//                     style={{ color: "#46CE04", cursor: "pointer" }}> {readMore4 ? "Read more" : " Show less"}</h6>
            
//             </div>
//           </div>
//         </div>


//         <div className="faculty__row grid gap-5 lg:gap-20 lg:grid-cols-2">
//           <div className="faculty__box grid lg:grid-cols-3">
//             <div className="faculty__img"></div>
//             <div className="faculty__text lg:col-span-2">
//               <h5>MUHYUDHEEN SAQAFI THALEEKARA </h5>
//               <p>
//                   {readMore5 ? moidustahd.slice(0, 190) : moidustahd}...
                  
//                 </p>
//               <h6 onClick={()=>setReadMore5(!readMore5)}
//                     style={{ color: "#46CE04", cursor: "pointer" }}> {readMore5 ? "Read more" : " Show less"}</h6>
            
//             </div>
//           </div>
//           <div className="faculty__box grid lg:grid-cols-3">
//             <div className="faculty__img"></div>
//             <div className="faculty__text lg:col-span-2">
//               <h5>MUHYUDHEEN SAQAFI KAVANUR </h5>
//               <p>
//                   {readMore6 ? kavanurUstahd.slice(0, 190) : kavanurUstahd}...
                  
//                 </p>
//               <h6 onClick={()=>setReadMore6(!readMore6)}
//                     style={{ color: "#46CE04", cursor: "pointer" }}> {readMore6 ? "Read more" : " Show less"}</h6>
            
//             </div>
//           </div>
//         </div>
//         <div className="faculty__row grid gap-5 lg:gap-20 lg:grid-cols-2">
//           <div className="faculty__box grid lg:grid-cols-3">
//             <div className="faculty__img"></div>
//             <div className="faculty__text lg:col-span-2">
//               <h5>ASAF NURANI ASSAQAFI</h5>
//               <p>
//                   {readMore7 ? asafNurani.slice(0, 190) : asafNurani}...
                  
//                 </p>
//               <h6 onClick={()=>setReadMore7(!readMore7)}
//                     style={{ color: "#46CE04", cursor: "pointer" }}> {readMore7 ? "Read more" : " Show less"}</h6>
            
//             </div>
//           </div>
         
//         </div>
//       </div>
//       <Footer/>
//     </>
//   );
// }
