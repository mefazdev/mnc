import { FaBrain, FaChalkboardTeacher, FaWhatsapp } from "react-icons/fa";
import Head from "next/head";
import Image from "next/image";
import { FaPersonCircleCheck } from "react-icons/fa6";
import { IoIosTime } from "react-icons/io";

export default function EducationPoster() {
  const data = [
    {
      item: `multiple intelligence 
       tutoring system`,
      icon: <FaBrain className="text-lg text-white" />,
    },
    {
      item: "Expert Teachers",
      icon: <FaChalkboardTeacher className="text-lg text-white" />,
    },
    {
      item: "Personlized Attention",
      icon: <FaPersonCircleCheck className="text-lg text-white" />,
    },
    {
      item: "Flexible Schedule",
      icon: <IoIosTime className="text-lg text-white" />,
    },
  ];
  return (
    <>
      <Head>
        <title>Online Education Poster</title>
        <meta name="description" content="Online Quran Learning Opportunity" />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50 py-8 px-4 flex flex-col items-center">
        {/* Poster Container */}
        <div className="max-w-2xl w-full bg-white rounded-xl shadow-2xl overflow-hidden ">
          <section className="relative h-96 min-h-[550px] w-full">
            <div className="absolute inset-0">
              <Image
                src="/images/hikma-3.jpeg" // Replace with your image path
                alt="Students studying Islamic texts"
                layout="fill"
                className="object-cover object-to"
                priority
              />
              <div className="absolute inset-0 bg-black bg-opacity-60"></div>
            </div>

            {/* Centered content */}
            <div className="w-20 h-20 absolute top-6 left-6 bg-white/10 p-2 rounded-full">
              <div className=" bg-white rounded-full h-16 w-16 flex items-center justify-center text-blue-600 font-bold text-xl">
                <Image
                  src="/images/hikma.png"
                  alt="Student learning Quran"
                  width={100}
                  height={100}
                  className="object-cover h- w-full rounded-full"
                />
              </div>
            </div>

            <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
              <div className="max-w-4xl mx-auto text-white">
                <h2 className="text-4xl font-bold mb-2 leading-tight mt-10  w-11/12 mx-auto">
                  <span className="  border-golden inline-block ">
                    {/* Our Sacred Mission */}
                    {/* അവധിക്കാലം ഉപകാരമുള്ളതാകട്ടെ! */}
                    {/* <span className="text-[#dff69c]">  ഖുർആൻ</span> */}
                    {/* ആദ്യം രജിസ്റ്റർ ചെയ്യുന്ന 10 വിദ്യാർത്ഥികൾക്ക് മികച്ച അവധിക്കാല ഓഫർ  */}
                    ഫീസ് കാരണം  <br/> <span className=" ">ഓൺലൈൻ മദ്റസ പഠനം</span>{" "}
                    {/* <br /> */}
                     മുടങ്ങുന്നവർ ഉണ്ടോ?
                  </span>
                  {/* ഖുർആൻ ശരിയായ രൂപത്തിൽ ഓതാൻ കഴിയുന്നില്ലെങ്കിൽ പിന്നെ? */}
                </h2>
                <p className="text-2xl font-medium mb-6 itali w-11/12 mx-auto">
                  {/* കൃത്യമായ മാതൃകയിൽ ഏറ്റവും മികച്ച മെന്റർമാരുടെ മേൽനോട്ടത്തിൽ
                  നിങ്ങളുടെ കുട്ടികൾക്ക് ഖുർആൻ പഠിക്കാൻ അവസരമൊരുക്കാം.  */}
                  {/* പരിശീലനം ലഭിച്ച അധ്യാപകരുടെ കീഴിൽ കുട്ടികൾ അവധിക്കാലം
                  ഉപയോഗപ്പെടുത്തട്ടെ. */}
                  {/* ഈ അവധിക്കാലത്ത് കുട്ടികൾക്ക് ആവശ്യമായ ട്യൂഷൻ നൽകാം,  കുട്ടിക്ക് ഏറ്റവും മികച്ച അവധിക്കാല സമ്മാനം നൽകാം */}
                  വിഷമിക്കേണ്ട. ഞങ്ങളുമായി ബന്ധപ്പെടൂ. 
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  {/* <button className="bg-golden hover:bg-yellow-600 text-dark-green px-8 py-3 rounded-lg font-bold text-lg transition-colors">
              Explore Our Programs
            </button> */}
                  <a
                    href="https://wa.me/91884523456"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2   hover:bg-green-600 bg-emerald-700 text-white px-6 py-3 rounded-full shadow-md transition-colors"
                  >
                    <FaWhatsapp className="text-2xl text-green-" />
                    <span className="text-lg">
                      WhatsApp:{" "}
                      <spann className="font-bold">+91 884 808 3551</spann>
                    </span>
                  </a>
                </div>
                <div className=  "w-10/12 mx-auto flex flex-wrap gap-x-4 gap-y-2 mt-10 bg-white/10 p-3 rounded-lg">
                  {data.map((d) => (
                      <div  key={d.item} className=" flex gap-2 items-center   ">
                      <div className="bg-white/10 h-8 w-8 rounded-full flex justify-center items-center">
                        {d.icon}
                      </div>
                      <p className="font-semibold font-montserrat capitalize text-lg">
                        {d.item }
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Decorative Islamic pattern at bottom */}
            <div
              className="absolute bottom-0 left-0 right-0 h-20 bg-repeat-x"
              style={{
                backgroundImage: "url(/islamic-pattern.png)",
                backgroundSize: "200px 80px",
              }}
            ></div>
          </section>
          <div className="bg-white  py-6 px-6 text-center font-montserrat shadow-lg">
            <p className="text-gray-900 text-xl font-extrabold">
              @ Hikma Ed - Learning Hub
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

// import React from 'react'

// export default function Tester() {
//   return (
//     <div>Tester</div>
//   )
// }
