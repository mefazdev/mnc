// import React from "react";
// import Navbar from "../../components/Navbar";

// import Footer from "../../components/Footer";

// import Head from "next/head";
// import science from "../../assets/data/campuses/sceince"; 

// export default function ScienceCampuses() {
//   return (
//     <>
//       <Head>
//         <title> Science Campuses</title>
//         <meta
//           name="description"
//           content=" Markaz Garden Group of Institutions was established on the onset
//                 of these millennia by blending the religious wisdom and secular
//                 studies with a sake to enable Islamic renaissance possible.
//                 Jamia Madeenathunnoor is the chief institution under Markaz
//                 Garden Group of Institutions. Currently Jamia Madeenathunnoor
//                 has become an ensemble of multilayered educational system
//                 covering higher secondary studies, bachelors and post-graduation
//                 levels. Spread over a dozen of departments, more than three
//                 hundred students are pursuing their studies here. The
//                 institution is also providing residential facilities on the
//                 campus for students doing their courses in various disciplines
//                 and subjects."
//         />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//       <Navbar />
//       <div className="about bg-white">
//         <div className="about__header  ">
//           <h2>SCIENCE ACADEMY CAMPUSES </h2>
//         </div>
//         <div className="about__content pt-10 lg:pt-20 pb-20 lg:pb-48 px-4 lg:px-0 ">
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-9">
//             {science?.map((d, i) => {
//               return (
//                 <div key={i}
//                   className=" borde border-emerald-400 rounded p-4 lg:p-6"
//                   style={{
//                     boxShadow:
//                       "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
//                   }}
//                 >
//                   <div className="border-b border-secondary pb-2">
//                     <p className="text-center font-semibold   text-primary uppercase">
//                       {d?.name}{" "}
//                     </p>
//                     <p className="text-center text-primary capitalize">
//                       {d?.location}, {d?.district}
//                     </p>
//                   </div>

//                   <div className="grid grid-cols-2 mt-3  ">
//                     <p className="text-gray-600">
//                       Course Type <span></span>
//                     </p>
//                     <p className="text-gray-800 capitalize">{d?.type}</p>
//                   </div>
//                   <div className="grid grid-cols-2 mt-1 ">
//                     <p className="text-gray-600">
//                       In-Charge Faculty <span></span>
//                     </p>
//                     <p className="text-gray-800 capitalize">{d?.incharge}</p>
//                   </div>
//                   <div className="grid grid-cols-2 mt-1">
//                     <p className="text-gray-600">
//                       Contact No <span></span>
//                     </p>
//                     <p className="text-gray-800">{d?.contact}</p>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// }



// import React from "react";
// import Navbar from "../../components/Navbar";

// import Footer from "../../components/Footer";

// import Head from "next/head";
// import campusData from "../../assets/data/campuses/oncampuses";

// export default function OnCampuses() {
//   return (
//     <>
//       <Head>
//         <title> On-Campuses</title>
//         <meta
//           name="description"
//           content=" Markaz Garden Group of Institutions was established on the onset
//                 of these millennia by blending the religious wisdom and secular
//                 studies with a sake to enable Islamic renaissance possible.
//                 Jamia Madeenathunnoor is the chief institution under Markaz
//                 Garden Group of Institutions. Currently Jamia Madeenathunnoor
//                 has become an ensemble of multilayered educational system
//                 covering higher secondary studies, bachelors and post-graduation
//                 levels. Spread over a dozen of departments, more than three
//                 hundred students are pursuing their studies here. The
//                 institution is also providing residential facilities on the
//                 campus for students doing their courses in various disciplines
//                 and subjects."
//         />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//       <Navbar />
//       <div className="about bg-white">
//         <div className="about__header  ">
//           <h2>ON-CAMPUSES </h2>
//         </div>

//         <div className="about__content pt-10 lg:pt-20 pb-20 lg:pb-48 px-4 lg:px-0 ">
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-9">
//             {campusData?.map((d, i) => {
//               return (
//                 <div key={i}
//                   className="  rounded p-4 lg:p-6"
//                   style={{
//                     boxShadow:
//                       "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
//                   }}
//                 >
//                   <div className="border-b border-secondary pb-2">
//                     <p className="text-center font-semibold   text-primary uppercase">
//                       {d?.name}{" "}
//                     </p>
//                     <p className="text-center text-primary capitalize">
//                       {d?.location}, {d?.district}
//                     </p>
//                   </div>

//                   <div className="grid grid-cols-2 mt-3  ">
//                     <p className="text-gray-600">
//                       Course Type <span></span>
//                     </p>
//                     <p className="text-gray-800 capitalize">{d?.type}</p>
//                   </div>
//                   <div className="grid grid-cols-2 mt-1 ">
//                     <p className="text-gray-600">
//                       In-Charge Faculty <span></span>
//                     </p>
//                     <p className="text-gray-800 capitalize">{d?.incharge}</p>
//                   </div>
//                   <div className="grid grid-cols-2 mt-1">
//                     <p className="text-gray-600">
//                       Contact No <span></span>
//                     </p>
//                     <p className="text-gray-800">{d?.contact}</p>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// }


import React, { useState } from 'react';
import Image from 'next/image';
import { FaSearch, FaMapMarkerAlt, FaUniversity, FaPhoneAlt, FaUserTie } from 'react-icons/fa';
 
import onCampuses from '../../assets/data/campuses/oncampuses';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import scienceCampuses from '../../assets/data/campuses/sceince';

const CampusListPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');

  const campuses =  scienceCampuses

  const filteredCampuses = campuses.filter(campus => {
    const matchesSearch = 
      campus.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      campus.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      campus.district.toLowerCase().includes(searchTerm.toLowerCase()) ||
      campus.incharge.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesType = 
      filterType === 'all' || 
      campus.type.toLowerCase().includes(filterType.toLowerCase());
    
    return matchesSearch && matchesType;
  });

  const campusTypes = [...new Set(campuses.map(campus => campus.type))];

  return (
    <div className="min-h-screen bg-gray-50 ">
      <Navbar/>
      {/* Hero Section */}

      <div className="relative h-64 md:h-80 bg-blue-900 pt-80 pb-10 lg:py-54  ">
      <Image
          src="/photos/38.jpg"
          alt="Jamia Madeenathunnoor Campuses"
          layout='fill'
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 flex items-center justify-center text-center px-4 mt-10 md:mt-0">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Science Academies</h1>
            {/* <p className="text-xl text-white">
              {campuses.length} On campuses across India
            </p> */}
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="container mx-auto px-4 py-8 mb-32">
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaSearch className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search campuses..."
                className="pl-10 w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <select
              className="p-3 border capitalize rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
            >
              <option value="all">All Campus Types</option>
              {campusTypes.map((type, index) => (
                <option  key={index} value={type}>{type}</option>
              ))}
            </select>
            
            <button 
              className="bg-primary hover:bg-primary/60 text-white p-3 rounded-lg flex items-center justify-center"
              onClick={() => {
                setSearchTerm('');
                setFilterType('all');
              }}
            >
              Reset Filters
            </button>
          </div>
        </div>

        {/* Campus List */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          {/* Table Header */}
          <div className="gri grid-cols-10 bg-gray-100 p-4 font-bold text-gray-700 hidden md:grid">
            {/* <div className="col-span-1">SN</div> */}
            {/* <div className="col-span-2">Campus ID</div> */}
            <div className="col-span-2">Name</div>
            <div className="col-span-2">Course Type</div>
            <div className="col-span-2">Location</div>
            <div className="col-span-2">Incharge</div>
            <div className="col-span-2">Contact</div>
          </div>

          {/* Campus Items */}
          {filteredCampuses.length > 0 ? (
            filteredCampuses.map((campus) => (
              <div 
                key={campus.an} 
                className="grid grid-cols-1 md:grid-cols-10 p-4 border-b hover:bg-gray-50 transition-colors"
              >
                {/* <div className="col-span-1 flex items-center mb-2 md:mb-0">
                  <span className="font-semibold md:hidden">SN: </span>
                  {campus.sn}
                </div> */}
                {/* <div className="col-span-2 flex items-center mb-2 md:mb-0">
                  <span className="font-semibold md:hidden">Campus ID: </span>
                  {campus.an}
                </div> */}
                <div className="col-span-2 flex items-center mb-2 md:mb-0 capitalize">
                  <FaUniversity className="text-primary/80 mr-2 hidden md:block" />
                  <span className="font-semibold md:hidden">Name: </span>
                  {campus.name}
                </div>
                <div className="col-span-2 flex items-center mb-2 md:mb-0 capitalize">
                  <span className="font-semibold md:hidden">Type: </span>
                  {campus.type}
                </div>
                <div className="col-span-2 flex items-center mb-2 md:mb-0 capitalize">
                  <FaMapMarkerAlt className="text-red-400 mr-2 hidden md:block" />
                  <span className="font-semibold md:hidden">Location: </span>
                  {campus.location}, {campus.district}
                </div>
                <div className="col-span-2 flex items-center mb-2 md:mb-0 capitalize">
                  <FaUserTie className="text-secondary mr-2 hidden md:block" />
                  <span className="font-semibold md:hidden">Incharge: </span>
                  {campus.incharge}
                </div>
                <div className="col-span-2 flex items-center ">
                  
                  <FaPhoneAlt className="text-blue-500 mr-2 hidden md:block" />
                  <span className="font-semibold md:hidden">Contact: </span>
                  <a href={`tel:${campus.contact.replace(/\s/g, '')}`} className=" hover:underline">
                    {campus.contact}
                  </a>
                </div>
              </div>
            ))
          ) : (
            <div className="p-8 text-center text-gray-500">
              No campuses match your search criteria
            </div>
          )}
        </div>

        {/* Map View (Optional) */}
        {/* <div className="mt-12 bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <FaMapMarkerAlt className="text-red-600 mr-2" />
            Campus Locations Map
          </h2>
          <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Interactive map showing all campus locations</p>
          </div>
        </div> */}
      </div>
      <Footer/>
    </div>
  );
};

export default CampusListPage;