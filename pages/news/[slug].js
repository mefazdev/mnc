import React, { useEffect, useState } from "react";
import formatDate from "../../functions/formatDate";
// import  { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";
// import blogimg from '../../../assets/images/blog.jpg'
import Link from "next/link";
import { useRouter } from "next/router";
import Navbar from "../../components/Navbar";



// async function getData(slug) {
//   const res = await fetch(
//     `${process.env.NEXT_PUBLIC_PORT}/api/news/view/${slug}`,
//     {}
//   );

//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }

//   return res.json();
// }

 

// export async function generateMetadata(
//   { params, searchParams } ,
//   parent 
// )  {
//   // read route params
//   const slug = params.slug;

//   // fetch data
//   const data = await fetch(
//     `${process.env.NEXT_PUBLIC_PORT}/api/news/view/${slug}`,
//     {}
//   ).then((res) => res.json());
//   const post = data?.data[0];
//   // optionally access and extend (rather than replace) parent metadata
//   const previousImages = (await parent).openGraph?.images || [];

//   return {
//     title: post.title,
//     openGraph: {
//       images: [post?.image, ...previousImages],
//     },
//   };
// }

export default   function News( ) {
  const [post,setPost] = useState({})
  const router = useRouter()
  const slug = router.query.slug
  const publishedAt = formatDate(new Date(post?.publishedAt));
  const getData = async ()=>{
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_PORT}/api/news/view/${slug}`,
            {}
          );
        
          const { data } = await res.json();
           setPost(data[0])
    } catch (error) {
        
    }
  }
  useEffect(()=>{
    getData()
  },[slug])


  const test = ()=>{
    console.log(data)
  }
  return (
    <div>
        <Navbar/>
        <div className="px-4 lg:px-0 lg:w-11/12 m-auto pt-12   pb-28 border-b">
        <button onClick={test}>CLCIK</button>
        
      <div className="  mt-10 lg:mt-24 lg:w-10/12 m-auto">
        <div className="">
        <h1 className="font-bold text-lg lg:text-2xl text-center"> {post?.title}</h1>
        <h6 className="text-center mt-3 text-gray-600">
          {publishedAt} | Admin
        </h6>

        <div className="mt-10">
          <img
            src={post?.image}
            alt=""
            className="m-auto w-fit"
          />
        </div>

        <div
          dangerouslySetInnerHTML={{ __html: post?.content }}
          className="mt-10"
        />
        </div>
        
      </div>      
    </div>
    </div>
  );
}

// export async function generateStaticParams() {
//   const posts = await fetch(
//     `${process.env.NEXT_PUBLIC_PORT}/api/publishedBlog`,
//     {}
//   ).then((res) => res.json());

//   return posts?.data?.map((post: any) => ({
//     slug: post.slug,
//   }));
// }
