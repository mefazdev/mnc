import React from "react";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import Image from "next/image";
 
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {  hssDatas } from "../assets/data/data.js";
import Head from "next/head";

export default function HssProgrammes() {
  const hssData = hssDatas;
 
  return (
    <>
      <Head>
        <title>Hs programmes</title>
        <meta
          name="description"
          content="The students will parallelly complete Higher secondary course
                  under the SCERT, Government of Kerala and with the foundation
                  course in Islamic studies. For higher secondary program, Jamia
                  Madeenathunnoor offers three streams viz Science, Commerce and
                  Humanities. Students will be admitted based on their marks
                  obtained in entrance examination for selection process and
                  their preference of courses. The final decision on the course
                  preference will be vested in the Jamia Madeenathunnoor
                  authority"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="programmes">
        <div className="programmes__head">
          <h1>HSS PROGRAMMES</h1>
        </div>
        <div className="programmes__content p-5 lg:p-0  pb-24 lg:pb-40">
          <div className="hs__container">
            <div className="hs  grid gap-5 lg:gap-10 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <h2 className="font-bold text-lg ">HSS PROGRAMMES</h2>
                <p className="mt-1">
                  The students will parallelly complete Higher secondary course
                  under the SCERT, Government of Kerala and with the foundation
                  course in Islamic studies. For higher secondary program, Jamia
                  Madeenathunnoor offers three streams viz Science, Commerce and
                  Humanities. Students will be admitted based on their marks
                  obtained in entrance examination for selection process and
                  their preference of courses. The final decision on the course
                  preference will be vested in the Jamia Madeenathunnoor
                  authority.
                </p>
                <a   href="https://docs.google.com/forms/d/e/1FAIpQLSd3JChgrFpRN5QebID-_nFwBT0lpCrJqmwEbgdbAslV7mBdEg/viewform?usp=sf_linkc">
                <button
               
                className="text-white p-2 px-4 rounded-md mt-3 bg-primary
                hover:translate-x-1 hover:transition ease-linear duration-150
                "
                >Register Now</button></a>
             
              </div>
              <div className="hs__img relative">
                <Image src={'/photos/hs1.jpg'} alt="" className="rounded object-cover" layout="fill" />
              </div>
            </div>  

            <div className="hs__accordion">
              {hssData?.map((data, index) => {
                    return (
                      <Accordion
                        key={index}
                        id="opening__accordion"
                        className="pt-2 pl-3 pr-3   text-white "
                      >
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon className="text-white" />}
                          aria-controls="panel1a-content"
                          id="panel1a-header"
                        >
                          <Typography>
                            <h2
                              className="text-white"
                              // style={{ letterSpacing: ".5px" }}
                            >
                              {data.course}
                            </h2>
                          </Typography>
                        </AccordionSummary>
                        <AccordionDetails className="  border-t text-white ">
                          {/* <Typography className=' text-white '> */}
                          <p>Intake : {data.intake}</p>
                          <p className="mt-2">Course outcomes :</p>
                          <div className="ml-5  grid lg:grid-cols-2 accordion__div">
                            {data.outcome
                              ? data.outcome.map((outcome, index) => {
                                  return (
                                    <h6 className="mt-2" key={index}>
                                      ▪ {outcome}
                                    </h6>
                                  );
                                })
                              : ""}
                          </div>
                        </AccordionDetails>
                      </Accordion>
                    );
                  })
                }
            </div>
          </div>
        </div>
      </div>
      {/* <div className="programmes__keynote gap-10 grid grid-cols-3">
            <div className="col-span-2">
              <h2>ACADEMIC PROGRAMMES</h2>
              <p>
                Jamia Madeenathunnoor offers different academic programs which
                are designed to develop students into professionally competent
                and socially committed Islamic graduates, fully equipped to take
                on the challenges of the contemporary scenario. The programs
                explores the critical areas of contemporary academic and
                professional themes, in conjunction with comprehensive knowledge
                and understanding of the Islamic tradition and knowledge.
                <br />
                The broad objectives of these programs are to familiarize
                students to the social, political, economic, moral and
                ecological environments of the society; to enable students to
                become effective leaders and scholars to contribute to community
                welfare; to develop a global perspective among students to
                respond to global challenges; and to impart values of
                intellectual honesty, justice, social compassion and fairness.
              </p>
            </div>
            <div className="programme__img">
              <Image src={hs2} className="rounded" />
            </div>
          </div> */}
      <Footer />
    </>
  );
}
