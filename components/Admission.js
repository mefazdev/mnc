import React, { useState } from 'react'
import Modal from "@mui/material/Modal";
import CloseIcon from '@mui/icons-material/Close';
export default function Admission() {

    const [open , setOpen] = useState(false)
  return (
    <div><div className='home__admission'>
    <div className='home__admission__content'>
   <h3> It is an initiative ,whereby,the students are well trained to radiate the noble
ideals of Islam across the world</h3>
<button onClick={()=>setOpen(true)}>GET AN ADMISSION</button>
    </div>
  </div>
  
  
  
  <Modal 
            open={false}
              >
              <div className='modal'>
                <div className='modal__close'>
<CloseIcon id='close__icon' onClick={()=>setOpen(false)} />
                </div>
                <div className="modal__main">
            <h2>GET AN ADMISSION</h2>
            {/* <h3>Science Academy - (8th Std.)</h3> */}
            <div className="modal__btn">
              <a href="https://forms.gle/qQ7rSh96pf2L5Ftf8">
                <button>8th STANDARD</button>
              </a>
              <a href="http://admission.jamiamadeenathunnoor.org">
                <button>HSS PROGRAMMES</button>
              </a>
            </div>
          </div>
              </div>
            </Modal>

  </div>
  )
}
