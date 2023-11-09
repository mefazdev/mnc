import React from "react";
import Navbar from "../../components/Navbar";

import Footer from "../../components/Footer";

import Head from "next/head";
import erthunnabavi from "../../assets/data/campuses/erthunnabavi";

export default function ScienceCampuses() {
  return (
    <>
      <Head>
        <title> Erthunnabavi Campuses</title>
        <meta
          name="description"
          content=" Markaz Garden Group of Institutions was established on the onset
                of these millennia by blending the religious wisdom and secular
                studies with a sake to enable Islamic renaissance possible.
                Jamia Madeenathunnoor is the chief institution under Markaz
                Garden Group of Institutions. Currently Jamia Madeenathunnoor
                has become an ensemble of multilayered educational system
                covering higher secondary studies, bachelors and post-graduation
                levels. Spread over a dozen of departments, more than three
                hundred students are pursuing their studies here. The
                institution is also providing residential facilities on the
                campus for students doing their courses in various disciplines
                and subjects."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="about bg-white">
        <div className="about__header  ">
          <h2>ERTHUNNABAVI CAMPUSES </h2>
        </div>

        <div className="about__content pt-10 lg:pt-20 pb-20 lg:pb-48 px-4 lg:px-0 ">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-9">
            {erthunnabavi?.map((d, i) => {
              return (
                <div key={i}
                  className=" borde border-emerald-400 rounded p-4 lg:p-6"
                  style={{
                    boxShadow:
                      "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
                  }}
                >
                  <div className="border-b border-green-600 pb-2">
                    <p className="text-center font-semibold   text-green-600 uppercase">
                      {d?.name}{" "}
                    </p>
                    <p className="text-center text-green-600 capitalize">
                      {d?.location}, {d?.district}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 mt-3  ">
                    <p className="text-gray-600">
                      Course Type <span></span>
                    </p>
                    <p className="text-gray-800 capitalize">{d?.type}</p>
                  </div>
                  <div className="grid grid-cols-2 mt-1 ">
                    <p className="text-gray-600">
                      In-Charge Faculty <span></span>
                    </p>
                    <p className="text-gray-800 capitalize">{d?.incharge}</p>
                  </div>
                  <div className="grid grid-cols-2 mt-1">
                    <p className="text-gray-600">
                      Contact No <span></span>
                    </p>
                    <p className="text-gray-800">{d?.contact}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
