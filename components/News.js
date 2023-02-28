// import React from 'react';
// import axios from "axios";
// import Link from "next/link";
// import moment from "moment";
// import { useEffect, useState } from "react";
// import cookies from "js-cookie";
// import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
// export default function News() {
//     const [blog, setBlog] = useState([]);
//     const fetchData = () => {
//         axios
//           .get(
//             `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/blogs?_sort=published_at:desc`
//           )
//           .then((response) => {
//             setBlog(response.data);
//           });
//       };
//       useEffect(() => {
//         fetchData();
  
//       }, []);
        
//   return(
//        <div className='home__news'>
//            <div className='home__news__head'>
//            <h2>NEWS</h2>
//            </div>
// {/* <button onClick={()=>console.log(blog)}>click</button> */}
//            <div className='home__news__content__row lg:flex'>
//                <div className='home__news__content gap-10    grid lg:grid-cols-3'>

//   {blog.map((data,index)=>{
//        const date = moment(data.date).format("MMM DD YYYY");
//       return(
//  <Link key={index} href="/Blog">
//      <div className='news__box'
//       onClick={() => cookies.set("blogId", data.slug)}
//      >
//  <div className='news__box__img'>
//  <img
//                         src={`${data.thumbnail.url}`}
//                         alt="Mobile application development companies in Kerala"
//                       />
//      <div className='news__box__text'>
//         <p>{date}</p>
//         <h4>{data.title}</h4>
       
//      </div>
//  </div>
// </div>
// </Link>
//       )
//   })}





//                </div>

//                <div className='home__news__more invisible lg:visible'>
//                    <Link href='/Blogs'>
//                    <div className='home__news__more__round'>
//                        <ArrowForwardIcon id='news__more__icon'/>
//                    </div>
//                    </Link>
                 
//                </div>
//            </div>
//            <Link href='/Blogs'>
//            <p className='lg:invisible home__news__more__p'>LOAD MORE</p>
//            </Link>
          
         
//   </div>
  
  
//   );
// }

import axios from "axios";
import Link from "next/link";
import moment from "moment";
import { useEffect, useState } from "react";
import cookies from "js-cookie";

import React from "react";

export default function Blogs() {

  const [blog, setBlog] = useState([]);
    const fetchData = () => {
        axios
          .get(
            `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/blogs?_sort=published_at:desc`
          )
          .then((response) => {
            setBlog(response.data);
          });
      };
      useEffect(() => {
        // fetchData();
  
      }, []);
  return (
    
    <div className="hm__blogs">
      <div className="hm__blogs__content">
        <div className="hm__blogs__head">
          <h3>What&apos;s new</h3>
        </div>
        <div className="hm__blogs__row grid gap-5 lg:grid-cols-2">

        {blog.map((data,index)=>{
       const date = moment(data.date).format("MMM DD YYYY");
       const content = data.content.slice(0,250)
       if(index < 6 ){

       
return(
  <Link key={index} href="/Blog">
       
<div      onClick={() => cookies.set("blogId", data.slug)} className="hm__blogs__box grid gap-5 lg:grid-cols-3">
            <div className="hm__blogs__box__left">
             <img src= {data.thumbnail.url} />          <div className="hm__blogs__box__more">
                {/* <Link href="/News"> */}
                  <h4>Read more</h4>
                {/* </Link> */}
              </div>
            </div>
            <div className="lg:col-span-2">
              <h3>
                {data.title}
              </h3>
              <p>
               {content}
              </p>
            </div>
          </div>
          </Link>
)}
        })}
          
          
        </div>
       
       {/* <div className="blogs__more__btn">
         <button>View more</button>
       </div> */}
      </div>
    </div>
  );
}
