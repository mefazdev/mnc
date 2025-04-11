import React  from "react";

import Navbar from "../components/Navbar";

import Footer from "../components/Footer";

import Image from "next/image";
 
 const data =[
  {name:"Dr Muhammad Abdul Hakkim Azhari",
    image:'/images/senate/hakkim-usthad.jpg',
    dsignation:"Rector",
  },
  {name:"Ali Ahsani",
    image:'/images/academic-council/ali-ahsani.jpeg',
    dsignation:"HoD, Fiqh",
  },
  {name:"Muhyudheen Saqafi Thaleekkara",
    image:'/images/academic-council/moidu-saqafi.jpeg',
    dsignation:"HoD, Aqeedah",
  },
  
  {name:"Muhyudheen Saqafi Kavanur",
    image:'/images/academic-council/kavanur-usthad.jpeg',
    designation:"HoD, Tafsir",
  },
  {name:"Asaf Nurani",
    image:'/images/senate/asaf-nurani.jpg',
    designation:"Pro-Rector",
  },
  {name:"Sayyid Thwaha Nurani",
    image:'/images/academic-council/thaha-nurani.jpeg',
    designation:"Dean of Academic Affairs",
  },
  {name:"Jafar Nurani",
    image:'/images/senate/jafar-nurani.jpg',
    designation:"Principal, Markhinz Bangalore",
  },
  {
    name:"Shihabudheen Nurani",
    image:'/images/academic-council/shihab-nurani.jpeg',
    designation:"Principal, Markazul Hidaya, Kodagu",
  },
  {name:"Roshan Nurani",
    image:'/images/academic-council/roshan-nurani.jpeg',
    designation:"Academic Expert & Vice Rector Jamia Markaz",
  },
  {name:"Shoukath Ali",
    image:'/images/academic-council/shaukath-ali.jpeg',
    designation:"Academic Expert & Counselor, IIT Bombay",
  },
 ]

export default function Academic() {
  return (
    <div>
      <Navbar />
      <div className="faculty__header">
        <h2>ACADEMIC COUNCIL</h2>
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

  