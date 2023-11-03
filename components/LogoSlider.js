import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import logo1 from '../assets/images/logos/uni-1.png'
import logo2 from '../assets/images/logos/uni-2.png'
import logo3 from '../assets/images/logos/uni-3.png'
import logo4 from '../assets/images/logos/uni-4.png'
import logo5 from '../assets/images/logos/uni-5.png'
import logo6 from '../assets/images/logos/uni-6.png'
import logo7 from '../assets/images/logos/uni-7.png'
import logo8 from '../assets/images/logos/uni-8.png'
import logo9 from '../assets/images/logos/uni-9.png'
import logo10 from '../assets/images/logos/uni-10.png'
import logo11 from '../assets/images/logos/uni-11.png'
import logo12 from '../assets/images/logos/uni-12.png'
import logo13 from '../assets/images/logos/uni-13.png'
import logo14 from '../assets/images/logos/uni-14.png'  
import logo15 from '../assets/images/logos/uni-15.png'
import logo16 from '../assets/images/logos/uni-16.png'
import logo17 from '../assets/images/logos/uni-17.png'
import logo18 from '../assets/images/logos/uni-18.png'
import logo19 from '../assets/images/logos/uni-19.png'
import logo20 from '../assets/images/logos/uni-20.png'
import logo21 from '../assets/images/logos/uni-21.png'
import Image from 'next/image';

export default function LogoSlider() {
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
      <>
      <div className='status__right__row '>
 <Carousel
        swipeable={true}
        draggable={true}
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        
        transitionDuration={2000}
        customTransition={"ease 2000ms"}

        removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
        
      >
      <div className='uni__logo__box'>
    <div className='uni__log__img'>
        <Image src={logo1} alt=''/>
      
    </div>

      </div>
<div className='uni__logo__box'>
    <div className='uni__log__img'>
        <Image src={logo2} alt=''/>
      
    </div>

      </div>
      <div className='uni__logo__box'>
    <div className='uni__log__img'>
        <Image src={logo3} alt=''/>
      
    </div>

      </div>
      <div className='uni__logo__box'>
    <div className='uni__log__img'>
        <Image src={logo4} alt=''/>
       
    </div>

      </div>
      
      </Carousel>
  </div>
 
  <div className='status__right__row '>
 <Carousel
        swipeable={true}
        draggable={true}
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        
        transitionDuration={2000}
        customTransition={"ease 2000ms"}

        removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
        
      >
      <div className='uni__logo__box'>
    <div className='uni__log__img'>
        <Image src={logo5} alt=''/>
      
    </div>

      </div>
<div className='uni__logo__box'>
    <div className='uni__log__img'>
        <Image src={logo6} alt='' />
      
    </div>

      </div>
      <div className='uni__logo__box'>
    <div className='uni__log__img'>
        <Image src={logo7} alt=''/>
      
    </div>

      </div>
      <div className='uni__logo__box'>
    <div className='uni__log__img'>
        <Image src={logo8} alt=''/>
       
    </div>

      </div>
     
      </Carousel>
  </div>
  <div className='status__right__row '>
 <Carousel
        swipeable={true}
        draggable={true}
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        
        transitionDuration={2000}
        customTransition={"ease 2000ms"}

        removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
        
      >
      <div className='uni__logo__box'>
    <div className='uni__log__img'>
        <Image src={logo9} alt=''/>
      
    </div>

      </div>
<div className='uni__logo__box'>
    <div className='uni__log__img'>
        <Image src={logo10} alt=''/>
      
    </div>

      </div>
      <div className='uni__logo__box'>
    <div className='uni__log__img'>
        <Image src={logo11} alt=''/>
      
    </div>

      </div>
      <div className='uni__logo__box'>
    <div className='uni__log__img'>
        <Image src={logo12} alt=''/>
       
    </div>

      </div>
     
      </Carousel>
  </div>
  <div className='status__right__row '>
 <Carousel
        swipeable={true}
        draggable={true}
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        
        transitionDuration={2000}
        customTransition={"ease 2000ms"}

        removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
        
      >
      <div className='uni__logo__box'>
    <div className='uni__log__img'>
        <Image src={logo13} alt=''/>
      
    </div>

      </div>
<div className='uni__logo__box'>
    <div className='uni__log__img'>
        <Image src={logo14} alt=''/>
      
    </div>

      </div>
      <div className='uni__logo__box'>
    <div className='uni__log__img'>
        <Image src={logo15} alt=''/>
      
    </div>

      </div>
      <div className='uni__logo__box'>
    <div className='uni__log__img'>
        <Image src={logo16} alt=''/>
       
    </div>

      </div>
    
    
     
      <div className='uni__logo__box'>
    <div className='uni__log__img'>
        <Image src={logo20} alt=''/>
       
    </div>

      </div>
     
      </Carousel>
  </div>
  <div className='status__right__row '>
 <Carousel
        swipeable={true}
        draggable={true}
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        
        transitionDuration={2000}
        customTransition={"ease 2000ms"}

        removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
        
      >
      <div className='uni__logo__box'>
    <div className='uni__log__img'>
        <Image src={logo17} alt=''/>
      
    </div>

      </div>
<div className='uni__logo__box'>
    <div className='uni__log__img'>
        <Image src={logo18} alt=''/>
      
    </div>

      </div>
      <div className='uni__logo__box'>
    <div className='uni__log__img'>
        <Image src={logo19} alt=''/>
      
    </div>

      </div>
      <div className='uni__logo__box'>
    <div className='uni__log__img'>
        <Image src={logo20} alt=''/>
       
    </div>

      </div>
    
    
     
   
      <div className='uni__logo__box'>
    <div className='uni__log__img'>
        <Image src={logo21} alt=''/>
       
    </div>

      </div>
      </Carousel>
  </div>
      </>
    
  );
}
