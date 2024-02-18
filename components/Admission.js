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
          <div className="modal__main pt-4">
            <h2>GET AN ADMISSION</h2>
            {/* <h3>Science Academy - (8th Std.)</h3> */}
            <div className="modal__btn">
            <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSd3JChgrFpRN5QebID-_nFwBT0lpCrJqmwEbgdbAslV7mBdEg/viewform">
                   <button className="hover:scale-105 hover:transition ease-linear duration-150 hover:border border-white">8th STANDARD</button>
              </a>
              {/* <a href="https://admission.jamiamadeenathunnoor.org">
                <button>HSS PROGRAMMES</button>
              </a> */}
            </div>
          </div>
        </div>
      </Modal>   
    </div>
  );
}
