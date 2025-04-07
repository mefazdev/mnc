import React from 'react';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt'; 
import { LocalLibrary } from '@material-ui/icons'; 
import FavoriteIcon from '@material-ui/icons/Favorite';
import SchoolIcon from '@material-ui/icons/School';
import BorderColorIcon from '@material-ui/icons/BorderColor';
 
import "react-multi-carousel/lib/styles.css";
 
import VisibilitySensor from "react-visibility-sensor-v2";
import CountUp from 'react-countup';
import {useState} from 'react'
import LogoSlider from './LogoSlider';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
export default function Status() {

    const [didViewCountUp, setState] = useState(false);
    const [changeNav, setChangeNav] = useState(false)
    const onVisibilityChange = (isVisible) => {
        if (isVisible) {
          setState({ didViewCountUp: true });
        }
      };
  
   

  return (
  <div className='status bg-customgreen'  data-aos="fade-up">
     {/* <h3>ACDEAMIC DESTINATIONS</h3> */}
     <div className='status__content grid gap-10 grid-cols-1 lg:grid-cols-3  '>
     <div className='status__content__left col-span-3 lg:col-span-1 '>


     <h3  data-aos="fade-up">JOURNEY OF 23 YEARS</h3> 
<div className='status__left__row grid gap-5 lg:grid-cols-2'>
 <div className='status__count__box'  data-aos="fade-up">
  <div className='rounded-full status__count__box__circle'>
  <PeopleAltIcon id='status__icons'/>
  </div>
  <VisibilitySensor
                    scrollCheck={true}
                    onChange={onVisibilityChange}
                    delayedCall
                  >
                    <p>
                      <CountUp
                        start={0}
                        end={didViewCountUp ? 2500 : 0}
                        duration={3}
                      />
                      +
                    </p>
                  </VisibilitySensor>
 
  {/* <h6>Batches</h6> */}
  <h6>Students</h6>
 </div>
 <div className='status__count__box'  data-aos="fade-up">
 <div className='rounded-full status__count__box__circle'>
  {/* <VerifiedUserIcon  id='status__icons'/> */}
  <EmojiEventsIcon   id='status__icons'/>
  </div>
  <VisibilitySensor
                    scrollCheck={true}
                    onChange={onVisibilityChange}
                    delayedCall
                  >
                    <p>
                      <CountUp
                        start={0}
                        end={didViewCountUp ? 300 : 0}
                        duration={3}
                      />
                      +
                    </p>
                  </VisibilitySensor>
                  <h6>Scholars</h6>
                  {/* <h6>Alumni</h6> */}
 </div>
</div>
<div className='status__left__row grid gap-5 lg:grid-cols-2'>
 <div className='status__count__box'  data-aos="fade-up">
  <div className='rounded-full status__count__box__circle'>
  <LocalLibrary id='status__icons'/>
  </div>
  <VisibilitySensor
                    scrollCheck={true}
                    onChange={onVisibilityChange}
                    delayedCall
                  >
                    <p>
                      <CountUp
                        start={0}
                        end={didViewCountUp ? 78 : 0}
                        duration={3}
                      />
                      +
                    </p>
                  </VisibilitySensor>
 
  <h6>Mudarris</h6>
   
 </div>
 <div className='status__count__box'  data-aos="fade-up">
 <div className='rounded-full status__count__box__circle'>
  <BusinessCenterIcon id='status__icons'/>
  </div>
  <VisibilitySensor
                    scrollCheck={true}
                    onChange={onVisibilityChange}
                    delayedCall
                  >
                    <p>
                      <CountUp
                        start={0}
                        end={didViewCountUp ? 98 : 0}
                        duration={3}
                      />
                      +
                    </p>
                  </VisibilitySensor>
 
  <h6>Professionals</h6>
 </div>
</div>
<div className='status__left__row grid gap-5 lg:grid-cols-2'>
 <div className='status__count__box'  data-aos="fade-up">
  <div className='rounded-full status__count__box__circle'>
  <FavoriteIcon id='status__icons'/>
  </div>
  <VisibilitySensor
                    scrollCheck={true}
                    onChange={onVisibilityChange}
                    delayedCall
                  >
                    <p>
                      <CountUp
                        start={0}
                        end={didViewCountUp ? 200 : 0}
                        duration={3}
                      />
                      +
                    </p>
                  </VisibilitySensor>

  <h6>Social workers</h6>
   
 </div>
 <div className='status__count__box'  data-aos="fade-up">
 <div className='rounded-full status__count__box__circle'>
  <SchoolIcon id='status__icons'/>
  </div>
  <VisibilitySensor
                    scrollCheck={true}
                    onChange={onVisibilityChange}
                    delayedCall
                  >
                    <p>
                      <CountUp
                        start={0}
                        end={didViewCountUp ? 40 : 0}
                        duration={3}
                      />
                      +
                    </p>
                  </VisibilitySensor>

  <h6>Reasearch fellows</h6>
 </div>
</div>
<div className='status__left__row grid gap-5 lg:grid-cols-2'>
 <div className='status__count__box'   data-aos="fade-up">
  <div className='rounded-full status__count__box__circle'>
  <BorderColorIcon id='status__icons'/>
  </div>
  <VisibilitySensor
                    scrollCheck={true}
                    onChange={onVisibilityChange}
                    delayedCall
                  >
                    <p>
                      <CountUp
                        start={0}
                        end={didViewCountUp ? 58 : 0}
                        duration={3}
                      />
                      +
                    </p>
                  </VisibilitySensor>
  
  <h6>Educators</h6>
   
 </div>
 <div className='status__count__box'  data-aos="fade-up">
 <div className='rounded-full status__count__box__circle'>
  <SchoolIcon id='status__icons'/>
  </div>
  <VisibilitySensor
                    scrollCheck={true}
                    onChange={onVisibilityChange}
                    delayedCall
                  >
                    <p>
                      <CountUp
                        start={0}
                        end={didViewCountUp ? 7 : 0}
                        duration={3}
                      />
                      +
                    </p>
                  </VisibilitySensor>

  <h6>Phd Holders</h6>
 </div>
</div>
  
  
  
     </div>




     <div className='status__content__right col-span-3 lg:col-span-2  '>
  <h3>ACADEMIC DESTINATIONS</h3>
  <div className='status__right__rows'>

     
 
    <LogoSlider/>
    
 
  
 
      </div> 
  </div>


  </div>
     </div>
    
  );
}
