import React from 'react';
import banner1 from '../assets/images/one.jpg'
import banner2 from '../assets/images/two.jpg'
import banner3 from '../assets/images/three.jpg'
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from 'react-responsive-carousel'; // requires a loader
import Image from 'next/image';
import Carousel from 'react-material-ui-carousel'
export default function MainBanner() {
  return (
  <div className='banner__carousel'>
 <Carousel
//   ariaLabel={false}
  // autoPlay={false}
  // animation='slide'
  indicators={false}
  // interval={3000}
  infiniteLoop={true}
  // transitionTime={2000}
//   interval={3000}
//   useKeyboardArrows={true}
//   showThumbs={false}
//   showArrows={false}
//   showStatus={false}
//   showIndicators={false}
stopAutoPlayOnHover={false}
//   axis={"horizontal"}
//   verticalSwipe='standard'
 >
                <div className='banner__img'>
                   {/* <Image  src={banner1}/> */}

                   <div className='main__banner__text'>
                     <div className='main__banner__text__first__row'>
                       <h2> <span className='font-normal'>WELCOME TO</span> JAMIA MADEENATHUNNOOR</h2>
                     
                     </div>
                     <div className='main__banner__text__second__row'>
                     <h3>PIONEERING A PROMISING FUTURE</h3>
                     </div>
                    
                   </div>
                    
                </div>
                <div className='banner__img__two'>
                   {/* <Image  src={banner1}/> */}

                   <div className='main__banner__text'>
                     <div className='main__banner__text__first__row'>
                     <h2> <span className='font-normal'>WELCOME TO</span> JAMIA MADEENATHUNNOOR</h2>
                     
                     </div>
                     <div className='main__banner__text__second__row'>
                     <h3>PIONEERING A PROMISING FUTURE</h3>
                     </div>
                    
                   </div>
                    
                </div>
                <div className='banner__img__three'>
                   {/* <Image  src={banner1}/> */}

                   <div className='main__banner__text'>
                     <div className='main__banner__text__first__row'>
                     <h2> <span className='font-normal'>WELCOME TO</span> JAMIA MADEENATHUNNOOR</h2>
                     
                     </div>
                     <div className='main__banner__text__second__row'>
                     <h3>PIONEERING A PROMISING FUTURE</h3>
                     </div>
                    
                   </div>
                    
                </div>
                
            </Carousel>
  </div>
  );
}
