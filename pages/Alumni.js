import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Head from "next/head";
export default function Alumni() {
  return (
    <>
      <Head>
        <title> Alumni</title>
        <meta name="description" content="The PRISM Foundation (Potential Resources Innovation and Social
                Management ) is an initiative of the alumni of Jamia
                Madeenathunnoor– Nurani Graduates. It has been actively engaging
                in educational and community services with more than 250+
                members and active working chapters in national and
                international level for last ten years, majorly focusing on
                livelihood and educational activities.
        " />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="alumni">
        <div className="alumni__header">
          <h2>PRISM FOUNDATION</h2>
        </div>

        <div className="alumni__content ">
          {/* <h1 className='visible lg:invisible'>PRISM FOUNDATION</h1> */}
          <div className="grid gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h1>PRISM FOUNDATION</h1>
              <p>
                The PRISM Foundation (Potential Resources Innovation and Social
                Management ) is an initiative of the alumni of Jamia
                Madeenathunnoor– Nurani Graduates. It has been actively engaging
                in educational and community services with more than 250+
                members and active working chapters in national and
                international level for last ten years, majorly focusing on
                livelihood and educational activities.
              </p>
              <a href="https://prismonline.org/">Learn more</a>
            </div>

            <div className="alumni__logo order-first lg:order-last">
              <img src="https://prismonline.org/assets/img/hero-img.png" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
