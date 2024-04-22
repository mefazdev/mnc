import React, { useEffect, useState } from "react";
import Link from "next/link";
import formatDate from "../functions/formatDate";

export default function News() {
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
    <div className=" px-4 md:px-0 md:w-10/12 m-auto  pt-10 md:pt-1 pb-28">
      <h6 className=" text-xl md:text-3xl font-bold  ">What&apos;s New </h6>
      

      <div className="grid lg:grid-cols-3 gap-5 mt-5">
        {data?.map((d, i) => {
          const publishedAt = formatDate(new Date(d?.publishedAt));

          if (i < 3 && d?.isPublished) {
            return (
              <div
                key={i}
                className="p-4  w-full shadow-lg rounded-md  hover:-translate-y-3 transition ease-linear duration-150"
              >
                <div
                  className="w-full h-60 rounded-md relative"
                  style={{
                    backgroundImage: `url(${d?.image})`,
                    backgroundSize: "cover",
                  }}
                >
                  <div className="bg-customgreen w-fit py-1 px-2 h-fit absolute right-1 bottom-1 rounded">
                    <p className="text-sm  font-sa text-white">{publishedAt}</p>
                  </div>
                </div>
                <div className="mt-4">
                  <h4 className="text-lg text-gray-600 font-semibol leading-5 h-11 overflow-hidden  ">
                    {d?.title}
                  </h4>

                  <div className="border-t mt-3  py-2 cursor-pointer bg-white text-customgreen transition-colors hover:bg-customgreen  hover:text-white duration-300 ease-linear ">
                    <Link href={`/news/${d?.slug}`}>
                      <p className="font-sans  text-center">Read</p>
                    </Link>
                  </div>
                </div>
              </div>
            );
          } else {
            return;
          }
        })}
      </div>
    </div>
  );
}
