// import React, { useState } from "react";

// import Navbar from "../components/Navbar";

// import Footer from "../components/Footer";

// import Image from "next/image";
   
//  const data=[
//   {
//     name: "Dr Muhammad Abdul Hakkim Azhari",
//     image: "/images/senate/hakkim-usthad.jpg",
//     designation: "Rector",
//   },
//   {
//     name: "Abu Swalih Saqafi",
//     image: "/images/senate/boosalih-saqafi.jpg",
//     designation: "Chief Finance Officer",
//   },
//   {
//     name: "Asaf Nurani",
//     image: "/images/senate/asaf-nurani.jpg",
//     designation: "Pro-Rector",
//   },
//   {
//     name: "Jalal Nurani",
//     image: "/images/senate/jalal-nurani.jpg",
//     designation: "Chief Admin Officer",
//   },
//   {
//     name: "Noufal Nurani",
//     image: "/images/finance/naufal-nurani.jpeg",
//     designation: "Finance Manager",

//   },
//   {
//     name: "Sadiq Nurani",
//     image: "/images/finance/sadiq-nurani.jpeg",
//     designation: "Finance Advisor",

//   },{
//     name: "Ubaidullah Saqafi",
//     image: "/images/finance/ubaid-saqafi.jpeg",
//     designation: "Chief Accountant",
    
//   }
//  ]

// export default function Finance() {
//   return (
//     <div>
//       <Navbar />
//       <div className="faculty__header">
//         <h2>FINANCE COMMITTEE</h2>
//       </div>
//       <div className="we" style={{ scrollBehavior: "smooth" }}>
//         <div className="we__content">
//           <div className="we__row grid gap-6 grid-cols-2   lg:grid-cols-4">
      
          
//                {data.map((item=>(
//                   <div className="we__item" key={item.name}>
//                   <div className="we__img relative" >
//                     <Image src={item.image} alt='' layout="fill"/>
//                   </div>
//                   <h6>{item.name}</h6>
//                   <h5> {item.designation}</h5>
//                 </div>
//                )))}
       
             
             
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }

  

 
import React from 'react';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ExicutiveCouncil = () => {
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

  return (
   <div className="min-h-screen bg-gray-50">
         <Navbar/>
         {/* Hero Header */}
         <div className="bg-primary text-white   pt-28 pb-16 lg:py-28 lg:pt-36">
           <div className="container mx-auto px-4 text-center">
             <h1 className="text-3xl md:text-4xl font-semibold md:font-bold mb-4">FINANCE COMMITTEE</h1>
             {/* <p className="  max-w-2xl mx-auto">
             Guiding academic excellence through visionary leadership and scholarly governance
             </p> */}
           </div>
         </div>
   
         {/* Main Content */}
         <div className="container mx-auto px-4 py-16 lg:py-24">
           {/* Members Grid */}
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
             {data.map((member, index) => (
               <div 
                 key={index} 
                 className="bg-white m-auto w-full rounded-xl shadow-m overflow-hidden hover:shadow-lg transition-shadow"
               >
                 {/* Member Photo */}
                 <div className="relative h-36  w-36 m-auto rounded-full mt-3">
                   <Image
                     src={member.image}
                     alt={member.name}
                   layout='fill'
                     className="object-cover rounded-full"
                   />
                 </div>
                 
                 {/* Member Details */}
                 <div className="p-6 text-center">
                   <h3 className="text-l font-semibold text-primary mb-1">{member.name}</h3>
                   <p className="text-secondary  ">{member.designation}</p>
                   
                   {/* Optional: Bio/Description would go here */}
                   {/* <p className="text-gray-600 mt-3">
                     Brief description or bio of the member...
                   </p> */}
                 </div>
               </div>
             ))}
           </div>
   
           {/* Optional: Organizational Chart Section */}
           {/* <div className="mt-16 bg-white p-8 rounded-xl shadow-md">
             <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
               Organizational Structure
             </h2>
             <div className="flex justify-center">
          
               <div className="bg-gray-100 rounded-lg p-8 text-center text-gray-500 w-full max-w-4xl">
                 [University Organizational Chart Visualization]
               </div>
             </div>
           </div> */}
         </div>
         <Footer/>
       </div>
  );
};

export default ExicutiveCouncil;
