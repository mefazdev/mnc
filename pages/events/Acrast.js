import React, { useState } from "react";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import one from "../../assets/images/events/orbit-1.jpeg";
import two from "../../assets/images/events/eve-1.jpeg";
import three from "../../assets/images/events/2.jpeg"
import four from "../../assets/images/events/3.jpeg"

export default function Events() {
  const [more, setMore] = useState(false);

  const imgs = [four,three];
  return (
    <div>
      <Navbar />

      <div className="ev__header">
        <h2 className="text-white">ACRAST </h2>
      </div>

      <div className="content  pt-7 md:pt-16   pb-56 md:pb-32">
        <div className=" md:w-11/12 m-auto p-4 md:p-0 ">
          <div className="grid lg:grid-cols-3 lg:gap-10">
            <div
              className="lg:col-span-2 order-last lg:order-first
            "
            >
              <h3 className="  text-xl font-bold mt-10 lg:mt-0">Science Orbit</h3>
              <p className="mt-1">
                Science Orbit is an organization of science enthusiasts
                established under the Department of Science and Technology of
                Jamia Madeenathunnoor. Providing intellectuals with a firm
                position and august moral values for a prosperous future. The
                organization is directed by reputed shepherds and primarily
                focuses on introducing novel scientific results in a socialistic
                and useful manner.
              </p>

              <h3 className="  text-xl font-bold mt-4">Our Vision</h3>
              <p className="mt-1">
                Our vision is to be a beacon of excellence in the integration of
                modern science and Islamic studies, contributing to the holistic
                development of individuals who are not only well-versed in the
                sciences but also deeply rooted in the values and principles of
                Islam.
              </p>

              <h3 className="  text-xl font-bold mt-4">Our Mission</h3>
              <p className="mt-1">
                Our mission is to provide a comprehensive and harmonious educa
                tion that nurtures the intellectual, ethical, and spiritual
                development of our students. We aim to equip them with a strong
                foundation in both the natural sciences and Islamic studies,
                fostering a deep understanding of the interconnections between
                these disciplines and their relevance to contemporary
              </p>
            </div>
            {/* <div className=" lg:grid     rounded border-cyan-700 bg-white p-2 mt-3"> */}{" "}
            <div className=" w-80  rounded-md   m-auto        ">
              <Image src={one} />
            </div>
            {/* </div> */}
          </div>

          <div className="grid lg:grid-cols-3 lg:gap-10 mt-16">
            <div
              className="lg:col-span-2 order-last lg:order-first
            "
            >
              <h3 className="  text-xl font-bold mt-10 lg:mt-0">
                ACRAST (Academic Conference on Recent Advancements in Science
                and Technology)
              </h3>
              <p className="mt-1">
                Our remarkable conference, ACRAST (Academic Conference on Recent
                Advancements in Science and Technology), that congregates
                academics, scientists, and industry experts from all over the
                world to discuss the most recent discoveries and innovations in
                the fields of science and technology. ACRAST serves as a
                platform for intellectual exchange and collaboration, fostering
                discussions that transcend boundaries and challenge the
                frontiers of knowledge. 
              </p>

              <h3 className="  text-xl font-bold mt-4">Goal</h3>
              <p className="mt-1">
                ACRAST&apos;s main objective, with the theme "Innovations in Science
                and Technology for Sustainable Development," is to act as a
                potent catalyst for advancement by showcasing. transformative
                innovations advancing sustainable development, fostering
                cross-disciplinary synergy. engaging thought leaders, empowering
                the next generation, fostering ethical and inclusive innovation,
                and fostering international partnerships. By combining these
                objectives. ACRAST hopes to honour those who push the envelope
                of what is possible, spark innovation to address global issues,
                and motivate teamwork to create a better, more sustainable
                future for everyone.
              </p> 

              
            </div>
            {/* <div className=" lg:grid     rounded border-cyan-700 bg-white p-2 mt-3"> */}{" "}
            <div className=" w-80  rounded-md   m-auto    border-b-4 h-fit    border-gray-800    ">
              <Image src={two} />
            </div>
            {/* </div> */}
          </div>

          <div
            className="mt-10 lg:mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-8
         cursor-pointer
          "
          >
            {imgs?.map((d, i) => {
              if (!more) {
                if (i < 6) {
                  return (
                    <div
                      key={i}
                      className=" border-b-4 h-fit   rounded border-gray-800"
                       
                    >
                      <Image src={d}/>
                      {!more && i == 5 ? (
                        <button
                          onClick={() => setMore(true)}
                          className="  bg-zinc-800  bg-opacity-70  border border-white text-white p-2 px-5 rounded-sm hover:bg-cyan-800 hover:text-white "
                        >
                          View More
                        </button>
                      ) : (
                        ""
                      )}
                    </div>
                  );
                }
              } else {
                return (
                  <div
                    key={i}
                    className="h-64 border-b-4 flex justify-center items-center rounded border-gray-800"
                    style={{
                      backgroundImage: `url(${d.src})`,

                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    {!more && i == 5 ? (
                      <button
                        onClick={() => setMore(true)}
                        className="  bg-zinc-800  bg-opacity-70  border border-white text-white p-2 px-5 rounded-sm hover:bg-cyan-800 hover:text-white "
                      >
                        View More
                      </button>
                    ) : (
                      ""
                    )}
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
