import React from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";
 

import dots from "../assets/images/dots-white.png";
import Footer from "../components/Footer";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import { LocalLibrary } from "@material-ui/icons";

import DomainIcon from "@mui/icons-material/Domain";
import Head from "next/head";
import SchoolIcon from "@mui/icons-material/School";
export default function About() {
  return (
    <>
      <Head>
        <title> About</title>
        <meta
          name="description"
          content=" Jamia Madeenathunnoor epitomizes excellence,
blending traditional Islamic studies with diverse aca-
demic disciplines. Its multicultural environment
fosters vibrant discourse, while its serene campus
promotes holistic growth. Emphasizing moral values
and well-being, the Jamia cultivates leaders who
embody intellect, integrity, and compassion. With
dedicated faculties, Jamia Madeenathunnoor stands
as a beacon of enlightenment, shaping future gener-
ations poised to make meaningful contributions to
society."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="about bg-white" >
        <div className="about__header">
          <h2>ABOUT </h2>
        </div>

        <div className="about__content">
          <div className="about__text grid gap-5 lg:gap-10 grid-cols-1 md:grid-cols-3">
            <div>
              <Image src={'/photos/admissionjpg'} alt="Madeenthunnoor" className="rounded" />
            </div>

            <div className="col-span-2">
              <h2 className="text-green font-bold text-2xl">
                Jamia Madeenathunnoor
              </h2>
              <p>
              Jamia Madeenathunnoor epitomizes excellence,
blending traditional Islamic studies with diverse aca-
demic disciplines. Its multicultural environment
fosters vibrant discourse, while its serene campus
promotes holistic growth. Emphasizing moral values
and well-being, the Jamia cultivates leaders who
embody intellect, integrity, and compassion. With
dedicated faculties, Jamia Madeenathunnoor stands
as a beacon of enlightenment, shaping future gener-
ations poised to make meaningful contributions to
society.  
              </p>
            </div>
          </div>

          {/* <<<<<<< MISSSION >>>>>>>>>> */}
          <div className="mission__row gap-10 grid lg:grid-cols-2">
            <div className="vision bg-black rounded">
              <h2>OUR VISION</h2>
              <p>
                To metamorphose into a unique Centre of Excellence, where, a
                cadre of spiritually holistic, professionally competent,
                intellectually vibrant scholars are molded & groomed, to meet
                the challenges of future.
              </p>
              <div className="vision__img">
                <Image src={dots} alt="Madeenthunnoor" />
              </div>
            </div>
            <div className="mission bg-black rounded">
              <h2>OUR MISSION</h2>
              <p>
                Arrive at the threshold of new world driven by traditional
                learning, wisdom and modern trends. Inspire innovative & out of
                the box thoughts through benchmarked curriculum, there by
                leading the community and nation to the apex of Islamic wisdom
                and culture.
              </p>
              <div className="mision__img">
                <Image src={dots} alt="Madeenthunnoor" />
              </div>
            </div>
          </div>

          {/*<<<<<<<<<< CURRENT STATUS >>>>>>>>>> */}

          <div className="about__status">
            <div className="about__status__row gap-5 lg:gap-10 grid grid-cols-1 lg:grid-cols-3">
              <div className=" about__status__item  flex">
                <div className="rounded-full about__status__circle">
                  <DomainIcon id="about__status__icons" />
                </div>
                <p>19</p>
                <h6>CAMPUSES</h6>
              </div>
              <div className=" about__status__item flex">
                <div className="rounded-full about__status__circle">
                  <SchoolIcon id="about__status__icons" />
                </div>
                <p>612</p>
                <h6>DEGREE STUDENTS</h6>
              </div>
              <div className=" about__status__item flex">
                <div className="rounded-full about__status__circle">
                  <PeopleAltIcon id="about__status__icons" />
                </div>
                <p>1267</p>
                <h6>STUDENTS</h6>
              </div>
            </div>
            <div className="about__status__second__row gap-5 lg:gap-10 grid grid-cols-1 lg:grid-cols-3">
              <div className=" about__status__item flex">
                <div className="rounded-full about__status__circle">
                  <LocalLibrary id="about__status__icons" />
                </div>
                <p>28</p>
                <h6>MUTHAWAL STUDENTS</h6>
              </div>
              <div className=" about__status__item flex">
                <div className="rounded-full about__status__circle">
                  <PeopleAltIcon id="about__status__icons" />
                </div>
                <p>559</p>
                <h6>HS STUDENTS</h6>
              </div>
              <div className=" about__status__item flex">
                <div className="rounded-full about__status__circle">
                  <SchoolIcon id="about__status__icons" />
                </div>
                <p>68</p>
                <h6>PG STUDENTS</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
