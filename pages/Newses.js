 
import React, { useEffect, useState } from "react";

import Link from "next/link";
import formatDate from '../functions/formatDate'
import Navbar from "../components/Navbar";
import Image from "next/image";
 
export default function Component() {
  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_PORT}/api/news`, {});
      const { data } = await res.json();
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div  >
       <Navbar/>
     <div className="pt-24 px-4 md:px-0 md:w-11/12 m-auto">
     <div className="   rounded-xl lg:rounded-xl py-2   lg:py-5 relative shadow-sm ">
        <div className="bg-white  rounded-3xl invisible lg:visible   ml-3    px-2 p-1 w-fit text-sm lg:text-md  ">
       
        </div>

        <h1 className="text-center  text-xl lg:text-2xl text-gray-800 font-bold">
       NEWS
        </h1>
      </div>
      <div className=" mt-10 lg:mt-14 lg:w-10/12 m-auto  ">
        {data?.map((d, i) => {
          const publishedAt = formatDate(new Date(d?.publishedAt));
          if (d?.isPublished) {
            return (
              <div
                key={i}
                className="grid  lg:grid-cols-3 gap-4 lg:gap-9 border-b pb-8 mt-10"
              >
                {/* <div className="h-full">
                  <img
                    src={d?.image}
                    alt=""
                  />
                </div> */}
                 <div className="relative h-[400px] overflow-hidden rounded-lg">
                                  {d?.image && (
                                    <Image
                                      src={d?.image}
                                      className="object-cover rounded-lg transform transition-transform duration-1000  hover:scale-110 overflow-hidden"
                                      alt=""
                                      layout="fill"
                                    />
                                  )}
                
                                 
                                </div>

                <div className="lg:col-span-2">
                  <h2 className="font-sans font-semibold lg:font-bold  lg:text-xl  ">
                    {d?.title}
                  </h2>
                  <h5 className=" text-sm lg:text-md text-gray-500 mt-2">
                    {publishedAt} | Admin
                  </h5>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: d?.content.slice(0, 600),
                    }}
                  />
                  <Link href={`news/${d?.slug}`}>
                    <button className="text-sm lg:text-base font-bold mt-2 lg:mt-3">
                      READ MORE
                    </button>
                  </Link>
                </div>
              </div>
            );
          }
        })}
      </div>
     </div>
    </div>
  );
}
