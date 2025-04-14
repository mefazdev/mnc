// import React, { useEffect, useState } from "react";
// import formatDate from "../../functions/formatDate";

// import { useRouter } from "next/router";
// import Navbar from "../../components/Navbar";

// import { Swiper, SwiperSlide } from "swiper/react";

// import "swiper/css";

// import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// export default   function News() {
//   const [post,setPost] = useState({})
//   const router = useRouter()
//   const slug = router.query.slug
//   const publishedAt = formatDate(new Date(post?.publishedAt));
//   const getData = async ()=>{
//     try {
//         const res = await fetch(
//             `${process.env.NEXT_PUBLIC_PORT}/api/news/view/${slug}`,
//             {}
//           );

//           const { data } = await res.json();
//            setPost(data[0])
//     } catch (error) {

//     }
//   }
//   useEffect(()=>{
//     getData()
//   },[slug])

//   const [poster, setPoster] = useState([])
//   const getPoster = async  ()=>{
//     try {
//       const res = await fetch(`${process.env.NEXT_PUBLIC_PORT}/api/poster`, {});
//       const {data} = await res.json();
//       setPoster(data)
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   useEffect(()=>{
//     getPoster()
//   },[])
//   return (
//     <div>
//         <Navbar/>
//         <div className="px-4 lg:px-0 lg:w-10/12 m-auto pt-12   pb-28 border-b">

//       <div className=" grid lg:grid-cols-3 gap-9  mt-10 lg:mt-24 m-auto">
//         <div className="lg:col-span-2">
//         <h1 className="font-bold text-lg lg:text-2xl text-center"> {post?.title}</h1>
//         <h6 className="text-center mt-3 text-gray-600">
//           {publishedAt}
//         </h6>

//         <div className="mt-10">
//           <img
//             src={post?.image}
//             alt=""
//             className="m-auto w-fit"
//           />
//         </div>

//         <div
//           dangerouslySetInnerHTML={{ __html: post?.content }}
//           className="mt-10"
//         />
//         </div>
//         <div className="hidden lg:flex lg:mt-80 w-10/12 m-auto">
//         {poster.length ?    <Swiper
//         className="mySwiper"

//         centeredSlidesBounds
//         slidesPerView={1}

//         loop={true}
//         autoplay={{
//           delay: 2500,
//           disableOnInteraction: false,
//         }}

//         // navigation={true}
//         modules={[Autoplay ]}
//       >
//         {poster?.map((d, i) => {
//           return (
//             <SwiperSlide key={i}>
//               <div>
//                 <img src={d.image} alt="" />
//               </div>
//             </SwiperSlide>
//           );
//         })}
//       </Swiper> : ''}
//       </div>
//       </div>
//     </div>
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import {
  FaCalendarAlt,
  FaShareAlt,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaWhatsapp,
  FaArrowLeft,
} from "react-icons/fa";
 
import { useRouter } from "next/router";
import formatDate from "../../functions/formatDate";

import Navbar from "../../components/Navbar";
 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
const NewsDetailPage = () => {
  const [news, setNews] = useState({});
  const [newsItems, setNewsItems] = useState([]);
  const [posters, setPosters] = useState([]);
  const router = useRouter();
  const slug = router.query.slug;
  const publishedAt = formatDate(new Date(news?.publishedAt));
  const getNews = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_PORT}/api/news/view/${slug}`,
        {}
      );

      const { data } = await res.json();
      setNews(data[0]);
    } catch (error) {}
  };


    const getNewsItems = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_PORT}/api/news`, {});
        const { data } = await res.json();
        setNewsItems(data);
      } catch (error) {
        console.log(error);
      }
    };
  
    useEffect(() => {
    
      getNewsItems()
    }, []);
  useEffect(() => {
    getNews();
  }, [slug]);


  const getPoster = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_PORT}/api/poster`, {});
      const { data } = await res.json();
      setPosters(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPoster();
  }, []);

  
 
  // Slider settings
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Button */}
      <div className="container mx-auto px-4 pt-6">
        <Link href="/Newses"><button className="flex items-center text-primary hover:text-primary/80 font-medium">
          <FaArrowLeft className="mr-2" /> Back to Newses
        </button></Link>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* News Content - Left Side */}
          <div className="lg:w-2/3">
            {/* News Header */}
            <div className="mb-6">
              {/* <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-3">
                {news.category}
              </span> */}
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
                {news?.title}
              </h1>
              <div className="flex items-center text-gray-500">
                <FaCalendarAlt className="mr-2" />
                <span className="mr-4">{publishedAt}</span>
                {/* <IoMdTime className="mr-2" />
                <span>{news.time}</span> */}
              </div>
            </div>

            {/* News Image */}
            <div className="relative h-96 w-full mb-6 rounded-xl overflow-hidden">
              {news?.image && <Image
                src={news?.image}
                alt={news?.title}
                layout="fill"
                className="object-cover object-top"
              />}
            </div>

            {/* News Content */}
            <div
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: news?.content }}
            />

            {/* Share Options */}
            <div className="mt-12 pt-6 border-t border-gray-200">
            {/* <WhatsappShareButton
            url={`${process.env.NEXT_PUBLIC_PORT}/news/${slug}`}
          >
            <WhatsappIcon size={25} round={true} />
          </WhatsappShareButton> */}
              <h3 className="flex items-center text-lg font-bold text-gray-800 mb-4">
                <FaShareAlt className="mr-2 text-primary" />
                Share this news
              </h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors"
                >
                  <FaFacebook />
                </a>
                <a
                  href="#"
                  className="bg-blue-400 text-white p-3 rounded-full hover:bg-blue-500 transition-colors"
                >
                  <FaTwitter />
                </a>
                <a
                  href="#"
                  className="bg-blue-700 text-white p-3 rounded-full hover:bg-blue-800 transition-colors"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="#"
                  className="bg-green-500 text-white p-3 rounded-full hover:bg-green-600 transition-colors"
                >
                  <FaWhatsapp />
                </a>
              </div>
            </div>
          </div>

          {/* Right Sidebar - Achievements Slider */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-6">
              <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="bg-primary text-white p-2 rounded mr-3">
                  <FaCalendarAlt />
                </span>
                Our Achievements
              </h2>

              <Slider {...sliderSettings}>
                {posters.map((poster) => (
                  <div key={poster.imgId} className="px-2">
                    <div className="relative h-96 w-full rounded-lg overflow-hidden mb-4">
                 <Image
                        src={poster.image}
                        alt={'achievement'}
                        layout="fill"
                        className="object-cover"
                      />
                    </div>
                  
                  </div>
                ))}
              </Slider>

              {/* Related News */}
              <div className="mt-10">
                <h3 className="text-lg font-bold text-gray-800 mb-4">
                  More News
                </h3>
                <div className="space-y-4">
                  {newsItems?.map((item,i) => (
                    i < 6 && item._id !== news?._id && 
                    <Link key={item._id} href={`/news/${item.slug}`} className='cursor-pointer'>
                      <div
              
                    className="flex items-start hover:bg-gray-50 p-2 rounded-lg transition-colors"
                  >
                    <div className="relative h-16 w-16 flex-shrink-0 rounded-md overflow-hidden mr-4">
                      {item?.image && <Image
                        src={item?.image}
                        alt="Related news"
                        layout="fill"
                        className="object-cover"
                      />}
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">
                         {item.title}
                   
                      </h4>
                      <p className="text-sm text-gray-500">{formatDate(new Date(item?.publishedAt))}</p>
                    </div>
                  </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetailPage;
