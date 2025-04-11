import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
 
 
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { bsDatas, hsDatas } from "../assets/data/data.js";
import  Head  from "next/head";

export default function BsProgrammes() {
  const hsData = hsDatas;
  const bsData = bsDatas;
  return (
    <>
     <Head>
        <title>Madeenathunnoor Bs programmes</title>
        <meta name="description" content="                  Jamia Madeenathunnoor offers seven courses in bachelor
                  programs viz Science, Commerce, History, Sociology,
                  Psychology, English literature and Arabic literature. Students
                  will be admitted based on their score obtained in the
                  selection process and their preference. The final decision on
                  the preference and admission will be vested in the Jamia
                  Madeenathunnoor authority" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="programmes">
        <div className="programmes__head">
          <h1>BS PROGRAMMES</h1>
        </div>
        <div className="programmes__content p-5 lg:p-0  pb-20 lg:pb-40">
         
          <div className="hs__container">
            <div className="hs gap-5 grid lg:grid-cols-3">
              {/* <h2 className="visible lg:invisible mb-5">BACHLOR PROGRAMMES</h2> */}
              
              <div className="lg:col-span-2 ">
                <h2 className="font-bold text-lg ">BACHLOR PROGRAMMES</h2>
                <p className="mt-2">
                  Jamia Madeenathunnoor offers seven courses in bachelor
                  programs viz Science, Commerce, History, Sociology,
                  Psychology, English literature and Arabic literature. Students
                  will be admitted based on their score obtained in the
                  selection process and their preference. The final decision on
                  the preference and admission will be vested in the Jamia
                  Madeenathunnoor authority.
                </p>
                {/* <a href="http://admission.jamiamadeenathunnoor.org/">
                <button
                style={{background:'rgb(3, 39, 14)'}}
                className="text-white p-1 px-3 mt-3
                hover:translate-x-1 hover:transition ease-linear duration-150
                "
                >Register Now</button></a> */}
              </div>
              <div className="hs__img relative">
                <Image src={'/photos/hs1.jpg'} alt='' className="rounded-sm object-cover" layout="fill"/>
              </div>
            </div>

            <div className="hs__accordion">
              {bsData
                ? bsData.map((data, index) => {
                    return (
                      <Accordion
                        key={index}
                        id="opening__accordion"
                        className="pt-2 pl-3 pr-3  "
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
                        <AccordionDetails className="  border-t  text-white">
                          <p>Intake : {data.intake}</p>
                          <p className="mt-2">Course outcomes :</p>
                          <div className="ml-5  accordion__div">
                            {data.outcome
                              ? data.outcome.map((outcome, index) => {
                                  return <h6 className="mt-1" key={index}>▪ {outcome}</h6>;
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
      <Footer />
    </>
  );
}
