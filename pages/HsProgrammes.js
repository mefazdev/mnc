import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
// import hs2 from "../assets/images/hs.JPG";
// import hs1 from "../assets/images/hs1.jpg";
import hs1 from '../assets/images/students/img-1.jpeg'
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { bsDatas, hsDatas } from "../assets/data/data.js";
import Head from "next/head";

export default function HsProgrammes() {
  const hsData = hsDatas;
  const bsData = bsDatas;
  return (
    <>

<Head>
        <title>Madeenathunnoor  Hs programmes</title>
        <meta name="description" content="The students will parallelly complete Higher secondary course
                  under the SCERT, Government of Kerala and with the foundation
                  course in Islamic studies. For higher secondary program, Jamia
                  Madeenathunnoor offers three streams viz Science, Commerce and
                  Humanities. Students will be admitted based on their marks
                  obtained in entrance examination for selection process and
                  their preference of courses. The final decision on the course
                  preference will be vested in the Jamia Madeenathunnoor
                  authority" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="programmes">
        <div className="programmes__head">
          <h1>HS PROGRAMMES</h1>
        </div>
        <div className="programmes__content">
          
          <div className="hs__container">
            <div className="hs grid gap-5 lg:grid-cols-3">
              <div className="hs__img">
                <Image src={hs1} />
              </div>
              <div className="lg:col-span-2">
                <h2>HS PROGRAMMES</h2>
                <p>
                  The students will parallelly complete Higher secondary course
                  under the SCERT, Government of Kerala and with the foundation
                  course in Islamic studies. For higher secondary program, Jamia
                  Madeenathunnoor offers three streams viz Science, Commerce and
                  Humanities. Students will be admitted based on their marks
                  obtained in entrance examination for selection process and
                  their preference of courses. The final decision on the course
                  preference will be vested in the Jamia Madeenathunnoor
                  authority
                </p>
                <a href="https://surveyheart.com/form/640c4ddabcd731088c4262df">
                <button id='admision__btn'>REGISTER NOW</button></a>
              </div>
            </div>

            <div className="hs__accordion">
              {hsData
                ? hsData.map((data, index) => {
                    return (
                      <Accordion
                        key={index}
                        id="opening__accordion"
                        className="pt-2 pl-3 pr-3 "
                      >
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon className="text-white" />}
                          aria-controls="panel1a-content"
                          id="panel1a-header"
                        >
                          <Typography>
                            <h2
                              className="text-white"
                              style={{ letterSpacing: ".5px" }}
                            >
                              {data.course}
                            </h2>
                          </Typography>
                        </AccordionSummary>
                        <AccordionDetails className="accordion__content">
                          {/* <Typography className=' text-white '> */}
                          <p>Intake : {data.intake}</p>
                          <p className="mt-2">Course outcomes :</p>
                          <div className="ml-5  grid lg:grid-cols-2 accordion__div">
                            {data.outcome
                              ? data.outcome.map((outcome, index) => {
                                  return <h6 key={index}>▪ {outcome}</h6>;
                                })
                              : ""}
                          </div>
                        </AccordionDetails>
                      </Accordion>
                    );
                  })
                : ""}
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
