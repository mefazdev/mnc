import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
export default function Admission() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="home__admission">
        <div className="home__admission__content">
          <h3>
            {" "}
            It is an initiative ,whereby,the students are well trained to
            radiate the noble ideals of Islam across the world
          </h3>
          <button onClick={() => setOpen(true)}>GET AN ADMISSION</button>
        </div>
      </div>

      <Modal open={open} id="modal">
        <div className="modal border-4 ">
          <div className="modal__close">
            <CloseIcon id="close__icon" onClick={() => setOpen(false)} />
          </div>
          <div className="modal__main pt-4 pb-4">
            <h2>ADMISSION</h2>
            {/* <h3>Science Academy - (8th Std.)</h3> */}
            <div className="modal__btn lg:flex ">
            <a className="flex mt-2 w-full"  href="https://docs.google.com/forms/d/e/1FAIpQLSd3JChgrFpRN5QebID-_nFwBT0lpCrJqmwEbgdbAslV7mBdEg/viewform?usp=sf_link">
<<<<<<< HEAD
                   <button className="m-auto border hover:scale-105 hover:transition ease-linear duration-150 hover:border border-gray-300">    JMN JUNIOR SCHOOL</button>
              </a>
              <a className="flex mt-2 w-full" href="https://admission.jamiamadeenathunnoor.org">
              <button className="m-auto border border-gray-200  hover:scale-105 hover:transition ease-linear duration-150 hover:border ">    JMN SENIOR SCHOOL</button>
=======
                   <button className="m-auto border hover:scale-105 hover:transition ease-linear duration-150 hover:border border-gray-300">JMN JUNIOR SCHOOL</button>
              </a>
              <a className="flex mt-2 w-full" href="https://admission.jamiamadeenathunnoor.org">
              <button className="m-auto border border-gray-200  hover:scale-105 hover:transition ease-linear duration-150 hover:border ">JMN SENIOR SCHOOL</button>
>>>>>>> 5f98d0b96ce66be9efcf24fc538cc152ff834a14
              </a>
            </div>
          </div>
        </div>
      </Modal>   
    </div>
  );
}
