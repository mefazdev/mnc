import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
export default function Posters({poster}) {
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
    <div>     <Carousel
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
             {poster.map((d)=>(
             <div>
             <img src={d.image} alt="" />
           </div>
             ))}
             
            
            </Carousel></div>
  )
}
