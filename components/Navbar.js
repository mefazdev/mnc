import React from "react";
import logo from "../assets/images/LOGO-3.png";
import caligraphy from "../assets/images/caligraphy.png";
import Image from "next/image";
import Link from "next/link";
// import NavLink from 'next/navlink'
import { useRouter } from "next/router";
 
import { useEffect, useState } from "react";
 

import { clsx } from "clsx";
import MobNav from "./MobNav";
import { BsArrowRight } from "react-icons/bs";
import { MdArrowDropDown, MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import { AiOutlineMenu } from "react-icons/ai";

export default function Navbar() {
  const [collapse, setCollapse] = useState(false);

  const router = useRouter();
  const [changeNav, setChangeNav] = useState(false);

  const [navScroll, setNavScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setNavScroll(true);
      } else {
        setNavScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const changeNavBar = () => {
    if (window.scrollY >= 5) {
      setChangeNav(true);
    }
    if (window.scrollY < 5) {
      setChangeNav(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNavBar);
  });

  return (
    <div>
      <div
        className={clsx(
          "hidden lg:grid fixed px-4 lg:px-0 left-0 w-full m-auto z-50 transition ease-linear duration-200",
          {
            "top-0    ": navScroll,
            "top-5": !navScroll,
          }
        )}
      >
        <div
          className={clsx(
            "transition  ease-linear duration-200 flex justify-between",
            {
              "bg-black/60 backdrop-blur-lg px-8 bg-opacity-95  py-1":
                navScroll,
              "bg-black/10 backdrop-blur-md w-11/12 px-4 pl-2 mx-auto rounded":
                !navScroll,
            }
          )}
        >
          <div className=" flex w-full justify-between items-center py-1 ">
            <div className="flex gap-2">
              <div className="bg-white p-0.5 rounded-md">
                <div className=" h-11 w-14 relative rounded">
                  <Link passHref href="/">
                    <Image
                      src={logo}
                      className="rounded"
                      alt=""
                      layout="fill"
                    />
                  </Link>
                </div>
              </div>
              <div className=" h-12 w-32 relative rounded mt-1">
                <Link passHref href="/">
                  <Image src={caligraphy} alt="" layout="fill" />
                </Link>
              </div>
            </div>

            <span className="lg:hidden">
              <AiOutlineMenu
                id="menu__icon"
                onClick={() => setCollapse(!collapse)}
              />
            </span>
          </div>

          <div className="text-white col-span-2 hidden  lg:flex justify-end  relative   ">
            <div className="flex gap-3 items-center">
              <Link passHref href="/">
                <span className="group">
                  <h3
                    className={
                      router.pathname == "/"
                        ? " cursor-pointer"
                        : "  cursor-pointer"
                    }
                  >
                    HOME
                  </h3>

                  <div
                    className={
                      router.pathname === "/"
                        ? "bg-secondary rounded-full h-0.5    group-hover:block"
                        : "bg-secondary rounded-full  h-0.5   hidden   group-hover:block"
                    }
                  ></div>
                </span>
              </Link>

              <div className=" group cursor-pointer relative ">
                <div className="flex   items-center">
                  <h3>ABOUT</h3>
                  <MdKeyboardArrowDown className="text-lg" />
                </div>
                <div
                  className={
                    router.pathname == "/About" ||
                    router.pathname == "/Senate" ||
                    router.pathname == "/Academic" ||
                    router.pathname == "/Exicutive" ||
                    router.pathname == "/Finance"
                      ? "bg-secondary rounded-full h-0.5    group-hover:block absolute bottom-0 w-full"
                      : ""
                  }
                ></div>
                <span style={{ textAlign: "left", zIndex: "1" }}>
                  <ul className="dropdown-menu   absolute hidden   group-hover:block  text-gray-700 pt-2">
                    <span className="development__head cursor-pointer group">
                      <div className="flex rounded-t ">
                        <Link passHref href="/About">
                          <div
                            style={{ minWidth: "100%" }}
                            className={
                              router.pathname == "/About"
                                ? "bg-primary  py-2"
                                : "bg-navbg hover:bg-primary  py-2"
                            }
                          >
                            <li className=" px-4 block whitespace-no-wrap text-sm ">
                              <p> OVERVIEW</p>
                            </li>
                          </div>
                        </Link>

                        {/* <ArrowRightIcon id="service__group__arrow" /> */}
                      </div>
                    </span>
                    <span className="design__head">
                      <div
                        className={
                          router.pathname == "/Senate" ||
                          router.pathname == "/Academic" ||
                          router.pathname == "/Exicutive" ||
                          router.pathname == "/Finance"
                            ? "bg-primary  flex rounded-b      py-2"
                            : "flex rounded-b   bg-navbg hover:bg-primary     py-2"
                        }
                      >
                        <li className=" px-4 block whitespace-no-wrap text-sm ">
                          <p>LEADERSHIP</p>
                        </li>
                        <MdKeyboardArrowRight className="text-white" />
                      </div>
                      <ul className="design__list">
                        <Link passHref href="/Senate">
                          <li
                            className={
                              router.pathname === "/Senate"
                                ? " bg-primary  pt-3 py-2 px-2 block whitespace-no-wrap text-sm"
                                : "bg-navbg hover:bg-primary  pt-3 py-2 px-2 block whitespace-no-wrap text-sm"
                            }
                            // className=" "
                          >
                            SENATE
                          </li>
                        </Link>

                        <Link passHref href="/Academic">
                          <li
                            className={
                              router.pathname === "/Academic"
                                ? " bg-primary  pt-3 py-2 px-2 block whitespace-no-wrap text-sm"
                                : "bg-navbg hover:bg-primary  pt-3 py-2 px-2 block whitespace-no-wrap text-sm"
                            }
                          >
                            ACADEMIC COUNCIL
                          </li>
                        </Link>
                        <Link passHref href="/Exicutive">
                          <li
                            className={
                              router.pathname === "/Exicutive"
                                ? " bg-primary  pt-3 py-2 px-2 block whitespace-no-wrap text-sm"
                                : "bg-navbg hover:bg-primary  pt-3 py-2 px-2 block whitespace-no-wrap text-sm"
                            }
                          >
                            EXECUTIVE COUNCIL
                          </li>
                        </Link>
                        <Link passHref href="/Finance">
                          <li
                            className={
                              router.pathname === "/Finance"
                                ? " bg-primary  pt-3 py-2 px-2 block whitespace-no-wrap text-sm rounded-b"
                                : "bg-navbg rounded-b hover:bg-primary  pt-3 py-2 px-2 block whitespace-no-wrap text-sm"
                            }
                          >
                            FINANCE COMMITTEE
                          </li>
                        </Link>
                      </ul>
                    </span>
                  </ul>
                </span>
              </div>
              {/* Programmes */}
              <div className="relative group ">
                <div className="flex items-center cursor-pointer  relative ">
                  <Link passHref href="/Programmes">
                    <h3>PROGRAMMES</h3>
                  </Link>

                  <MdKeyboardArrowDown className="text-lg" />

                  <div className="dorpdown__di absolute -ml-5 mt-2 ">
                    <ul className="dropdown-menu absolute hidden   group-hover:block  text-gray-700 pt-6">
                      <span className="development__head cursor-pointer group">
                        <Link passHref href="/Programmes/Hs">
                          <div
                            style={{ minWidth: "150px" }}
                            className={
                              router.pathname == "/Programmes/Hs"
                                ? "bg-primary py-2"
                                : "bg-navbg hover:bg-primary py-2"
                            }
                          >
                            <li className=" px-4 block whitespace-no-wrap text-sm ">
                              HS PROGRAMMES
                            </li>
                          </div>
                        </Link>
                        <Link passHref href="/Programmes/Hss">
                          <div
                            style={{ minWidth: "160px" }}
                            className={
                              router.pathname == "/Programmes/HSS"
                                ? "bg-primary py-2"
                                : "bg-navbg hover:bg-primary py-2"
                            }
                          >
                            <li className=" px-4 block whitespace-no-wrap text-sm ">
                              HSS PROGRAMMES
                            </li>
                          </div>
                        </Link>
                        <Link passHref href="/Programmes/Bs">
                          <div
                            style={{ minWidth: "150px" }}
                            className={
                              router.pathname == "/Programmes/Bs"
                                ? "bg-primary py-2 rounded-b"
                                : "bg-navbg hover:bg-primary py-2 rounded-b"
                            }
                          >
                            <li className=" px-4 block whitespace-no-wrap text-sm ">
                              BS PROGRAMMES
                            </li>
                          </div>
                        </Link>
                      </span>
                    </ul>
                  </div>
                </div>
                {/* <div
                  className={
                    router.pathname == "/HsProgrammes" ||
                    router.pathname == "/HsProgrammes"
                      ? "bg-secondary rounded-full h-0.5    group-hover:block absolute bottom-0 w-full"
                      : ""
                  }
                ></div> */}
              </div>
              {/* Campuses */}
              <div className="relative group ">
                <div className="flex items-center cursor-pointer  relative ">
                  <Link passHref href="/Programmes">
                    <h3> CAMPUSES</h3>
                  </Link>

                  <MdKeyboardArrowDown className="text-lg" />

                  <div className="dorpdown__di absolute -ml-5">
                    <ul className="dropdown-menu absolute hidden   group-hover:block  text-gray-700 pt-6">
                      <span className="development__head cursor-pointer group">
                        <Link passHref href="/campuses/OnCampuses">
                          <div
                            style={{ minWidth: "150px" }}
                            className={
                              router.pathname == "/campuses/OnCampuses"
                                ? "bg-primary py-2"
                                : "bg-navbg hover:bg-primary py-2"
                            }
                          >
                            <li className=" px-4 block whitespace-no-wrap text-sm ">
                              ON-CAMPUSES
                            </li>
                          </div>
                        </Link>
                        <Link passHref href="/campuses/Science">
                          <div
                            style={{ minWidth: "160px" }}
                            className={
                              router.pathname == "/campuses/Science"
                                ? "bg-primary py-2"
                                : "bg-navbg hover:bg-primary py-2"
                            }
                          >
                            <li className=" px-4 block whitespace-no-wrap text-sm ">
                              SCIENCE ACADEMY
                            </li>
                          </div>
                        </Link>
                        <Link passHref href="/campuses/Erthunnabavi">
                          <div
                            style={{ minWidth: "150px" }}
                            className={
                              router.pathname == "/campuses/Erthunnabavi"
                                ? "bg-primary py-2 rounded-b"
                                : "bg-navbg hover:bg-primary py-2 rounded-b"
                            }
                          >
                            <li className=" px-4 block whitespace-no-wrap text-sm ">
                              ERTHUNNABAVI CAMPUSES
                            </li>
                          </div>
                        </Link>
                      </span>
                    </ul>
                  </div>
                </div>
                <div
                  className={
                    router.pathname == "/campuses/OnCampuses" ||
                    router.pathname == "/campuses/ScienceCampuses" ||
                    router.pathname == "/campuses/Erthunnabavi"
                      ? "bg-secondary rounded-full h-0.5    group-hover:block absolute bottom-0 w-full"
                      : ""
                  }
                ></div>
              </div>

              {/* <span className="flex group cursor-pointer ml-4 ">
              <h3>MEDIA</h3>
              <ArrowDropDownIcon id="dropdown__icon" />

              <div className="dorpdown__div">
                <ul className="dropdown-menu   absolute hidden   group-hover:block  text-gray-700 pt-6">
                  <span className="development__head cursor-pointer group">
                    <Link href="/Blogs">
                      <div
                        className={
                          router.pathname == "/Blogs"
                            ? "bg-green-800 py-2"
                            : "bg-navbg hover:bg-green-800 py-2"
                        }
                      >
                        <li className=" px-4 block whitespace-no-wrap text-sm ">
                          NEWS
                        </li>
                      </div>
                    </Link>

                    <div
                      className={
                        router.pathname == "/Images"
                          ? "bg-green-800 py-2"
                          : "bg-navbg hover:bg-green-800 py-2"
                      }
                    >
                      <li className=" px-4 block whitespace-no-wrap text-sm ">
                        IMAGES
                      </li>
                    </div>
                    <div
                      style={{ minWidth: "150px" }}
                      className={
                        router.pathname == "/Videos"
                          ? "bg-green-800 py-2"
                          : "bg-navbg hover:bg-green-800 py-2"
                      }
                    >
                      <li className=" px-4 block whitespace-no-wrap text-sm ">
                        VIDEOS
                      </li>
                    </div>
                  </span>
                </ul>
              </div>
            </span> */}
           
              <span className=" group">
                <a href="https://manager.jamiamadeenathunnoor.org/">
                  <h3 className="whitespace-nowrap">STAFF PANEL</h3>
                </a>

                <div className="bg-secondary rounded-full h-0.5    hidden   group-hover:block"></div>
              </span>
              <Link passHref href="/Alumni">
                <span className="group">
                  <h3
                    className={
                      router.pathname == "/Alumni"
                        ? " cursor-pointer"
                        : "  cursor-pointer"
                    }
                  >
                    ALUMNI
                  </h3>

                  <div
                    className={
                      router.pathname === "/Alumni"
                        ? "bg-secondary rounded-full h-0.5     group-hover:block"
                        : "bg-secondary rounded-full h-0.5   hidden   group-hover:block"
                    }
                  ></div>
                </span>
              </Link>

              {/* News */}
              <Link passHref href="/Newses">
                <span className="group">
                  <h3
                    className={
                      router.pathname == "/Newses"
                        ? " cursor-pointer"
                        : "  cursor-pointer"
                    }
                  >
                    UPDATES
                  </h3>

                  <div
                    className={
                      router.pathname === "/Newses"
                        ? "bg-secondary rounded-full h-0.5     group-hover:block"
                        : "bg-secondary rounded-full h-0.5   hidden   group-hover:block"
                    }
                  ></div>
                </span>
              </Link>
              <Link passHref href="/Contact">
                <span className="group">
                  <h3
                    className={
                      router.pathname == "/Contact"
                        ? " cursor-pointer"
                        : "  cursor-pointer"
                    }
                  >
                    CONTACT
                  </h3>

                  <div
                    className={
                      router.pathname === "/Contact"
                        ? "bg-secondary rounded-full h-0.5     group-hover:block"
                        : "bg-secondary rounded-full h-0.5   hidden   group-hover:block"
                    }
                  ></div>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <MobNav />
    </div>
  );
}



