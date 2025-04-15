// import { FaBrain, FaChalkboardTeacher, FaWhatsapp } from "react-icons/fa";
// import Head from "next/head";
// import Image from "next/image";
// import { FaPersonCircleCheck } from "react-icons/fa6";
// import { IoIosTime } from "react-icons/io";

// export default function EducationPoster() {
//   return (
//     <>
//       <Head>
//         <title>Online Education Poster</title>
//         <meta name="description" content="Online Quran Learning Opportunity" />
//       </Head>

//       <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50 py-8 px-4 flex flex-col items-center">
//         {/* Poster Container */}
//         <div className="max-w-2xl w-full bg-white rounded-xl shadow-2xl overflow-hidden ">
//           <section className="relative h-96 min-h-[550px] w-full">
//             <div className="absolute inset-0">
//               <Image
//                 src="/images/hikma-2.jpg" // Replace with your image path
//                 alt="Students studying Islamic texts"
//                 layout="fill"
//                 className="object-cover object-to"
//                 priority
//               />
//               <div className="absolute inset-0 bg-black bg-opacity-60"></div>
//             </div>

//             {/* Centered content */}
//             <div className="w-24 h-24 absolute top-4 left-4 bg-white/10 p-2 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl">
//               <Image
//                 src="/images/hikma.jpeg"
//                 alt="Student learning Quran"
//                 width={500}
//                 height={500}
//                 className="object-cover h- w-full rounded-full"
//               />
//             </div>
//             <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
//               <div className="max-w-4xl mx-auto text-white">
//                 <h2 className="text-4xl font-bold mb-3 leading-tight mt-20">
//                   <span className="  border-golden inline-block pb-2">
//                     {/* Our Sacred Mission */}
//                     {/* അവധിക്കാലം ഉപകാരമുള്ളതാകട്ടെ! */}
//                     {/* <span className="text-[#dff69c]">  ഖുർആൻ</span> */}
//                     {/* ആദ്യം രജിസ്റ്റർ ചെയ്യുന്ന 10 വിദ്യാർത്ഥികൾക്ക് മികച്ച അവധിക്കാല ഓഫർ  */}
//                     ഫീസ് കാരണം <br />{" "}
//                     <span className="text-[#dff69c]">ഓൺലൈൻ മദ്റസ പഠനം</span>{" "}
//                     <br /> മുടങ്ങുന്നവർ ഉണ്ടോ?
//                   </span>
//                 </h2>
//                 <p className="text-2xl font-medium mb-8 itali">
//                   {/* കൃത്യമായ മാതൃകയിൽ ഏറ്റവും മികച്ച മെന്റർമാരുടെ മേൽനോട്ടത്തിൽ
//                   നിങ്ങളുടെ കുട്ടികൾക്ക് ഖുർആൻ പഠിക്കാൻ അവസരമൊരുക്കാം.  */}
//                   {/* പരിശീലനം ലഭിച്ച അധ്യാപകരുടെ കീഴിൽ കുട്ടികൾ അവധിക്കാലം ഉപയോഗപ്പെടുത്തട്ട */}
//                   {/* ഈ അവധിക്കാലത്ത് കുട്ടികൾക്ക് ആവശ്യമായ ട്യൂഷൻ നൽകാം,  കുട്ടിക്ക് ഏറ്റവും മികച്ച അവധിക്കാല സമ്മാനം നൽകാം */}
//                   വിഷമിക്കേണ്ട. ഞങ്ങളുമായി ബന്ധപ്പെടൂ.{" "}
//                 </p>
//                 <div className="flex flex-col sm:flex-row justify-center gap-4">
//                   {/* <button className="bg-golden hover:bg-yellow-600 text-dark-green px-8 py-3 rounded-lg font-bold text-lg transition-colors">
//               Explore Our Programs
//             </button> */}
//                   <a
//                     href="https://wa.me/91884523456"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center gap-2   hover:bg-green-600 bg-white/10 text-white px-6 py-3 rounded-full shadow-md transition-colors"
//                   >
//                     <FaWhatsapp className="text-2xl text-green-" />
//                     <span className="text-lg">
//                       WhatsApp:{" "}
//                       <spann className="font-bold">+91 884 808 3551</spann>
//                     </span>
//                   </a>
//                 </div>
//                 <div className=" w-fit mx-auto grid grid-cols-2 gap-6 mt-10">
//                   <div className=" flex gap-3 items-center ">
//                     <div className="bg-white/10 h-8 w-8 rounded-full flex justify-center items-center">
//                       <FaBrain className="text-lg text-white" />
//                     </div>
//                     <p className="font-semibold font-montserrat capitalize text-[#dff69c]">
//                       {" "}
//                       multiple intelligence <br /> tutoring system
//                     </p>
//                   </div>
//                   <div className="text-[#dff69c] flex gap-3 items-center ">
//                     <div className="bg-white/10 h-8 w-8 rounded-full flex justify-center items-center">
//                       <FaChalkboardTeacher className="text-lg text-white" />
//                     </div>
//                     <p className="font-semibold font-montserrat">
//                       Expert Teachers
//                     </p>
//                   </div>
//                   <div className="text-[#dff69c] flex gap-3 items-center ">
//                     <div className="bg-white/10 h-8 w-8 rounded-full flex justify-center items-center">
//                       <FaPersonCircleCheck className="text-lg text-white" />
//                     </div>{" "}
//                     <p className="font-semibold font-montserrat">
//                       Personlized Attention
//                     </p>
//                   </div>
//                   <div className="text-[#dff69c] flex gap-3 items-center ">
//                     <div className="bg-white/10 h-8 w-8 rounded-full flex justify-center items-center">
//                       <IoIosTime className="text-lg text-white" />
//                     </div>
//                     <p className="font-semibold font-montserrat">
//                       Flexible Schedule
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Decorative Islamic pattern at bottom */}
//             <div
//               className="absolute bottom-0 left-0 right-0 h-20 bg-repeat-x"
//               style={{
//                 backgroundImage: "url(/islamic-pattern.png)",
//                 backgroundSize: "200px 80px",
//               }}
//             ></div>
//           </section>
//           <div className="bg-white  py-6 px-6 text-center font-montserrat shadow-lg">
//             <p className="text-gray-900 text-xl font-extrabold">
//               @ Hikma Ed - Learning Hub
//             </p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

import React from 'react'

export default function Tester() {
  return (
    <div>Tester</div>
  )
}
