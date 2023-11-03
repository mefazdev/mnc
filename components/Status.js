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
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 2,
        },
      };
   

  return (
  <div className='status'>
     {/* <h3>ACDEAMIC DESTINATIONS</h3> */}
     <div className='status__content grid gap-10 grid-cols-1 lg:grid-cols-3  '>
     <div className='status__content__left col-span-3 lg:col-span-1 '>


     <h3>JOURNEY OF 22 YEARS</h3> 
<div className='status__left__row grid gap-5 lg:grid-cols-2'>
 <div className='status__count__box'>
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
                        end={didViewCountUp ? 13 : 0}
                        duration={3}
                      />
                      +
                    </p>
                  </VisibilitySensor>
 
  <h6>Batches</h6>
   
 </div>
 <div className='status__count__box'>
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
                        end={didViewCountUp ? 284 : 0}
                        duration={3}
                      />
                      +
                    </p>
                  </VisibilitySensor>

  <h6>Alumni</h6>
 </div>
</div>
<div className='status__left__row grid gap-5 lg:grid-cols-2'>
 <div className='status__count__box'>
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
                        end={didViewCountUp ? 53 : 0}
                        duration={3}
                      />
                      +
                    </p>
                  </VisibilitySensor>
 
  <h6>Mudarris</h6>
   
 </div>
 <div className='status__count__box'>
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
                        end={didViewCountUp ? 80 : 0}
                        duration={3}
                      />
                      +
                    </p>
                  </VisibilitySensor>
 
  <h6>Professionals</h6>
 </div>
</div>
<div className='status__left__row grid gap-5 lg:grid-cols-2'>
 <div className='status__count__box'>
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
                        end={didViewCountUp ? 53 : 0}
                        duration={3}
                      />
                      +
                    </p>
                  </VisibilitySensor>

  <h6>Social workers</h6>
   
 </div>
 <div className='status__count__box'>
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
 <div className='status__count__box'>
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
 <div className='status__count__box'>
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
