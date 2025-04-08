import React from "react";
import logo from "../assets/images/LOGO-3.png";
import caligraphy from "../assets/images/caligraphy.png";
import Image from "next/image";
import Link from "next/link";
// import NavLink from 'next/navlink'
import { useRouter } from "next/router";
import MenuIcon from "@material-ui/icons/Menu";
import { useEffect, useState } from "react";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

import { clsx } from "clsx";
import MobNav from "./MobNav";

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
              "bg-black/20 backdrop-blur-md w-11/12 px-4 pl-2 mx-auto rounded":
                !navScroll,
            }
          )}
        >
          <div className=" flex w-full justify-between items-center py-1">
            <div className="flex gap-2">
              <div className="bg-white p-0.5 rounded-md">
                <div className=" h-11 w-14 relative rounded">
                  <Link href="/">
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
                <Link href="/">
                  <Image src={caligraphy} alt="" layout="fill" />
                </Link>
              </div>
            </div>

            <span className="lg:hidden">
              <MenuIcon
                id="menu__icon"
                onClick={() => setCollapse(!collapse)}
              />
            </span>
          </div>

          <div className="navbar__right text-sm col-span-2 hidden  lg:flex justify-end  relative   ">
            <div className=" flex w-fit   h-5">
              <Link href="/">
                <span className="group">
                  <h3
                    className={
                      router.pathname == "/"
                        ? "text-green-600 cursor-pointer font-semibold"
                        : "  cursor-pointer"
                    }
                  >
                    HOME
                  </h3>

                  <div
                    className={
                      router.pathname === "/"
                        ? ""
                        : "bg-green-500 h-1   hidden   group-hover:block"
                    }
                    // className="bg-green-600 h-1   hidden   group-hover:block"
                  ></div>
                </span>
              </Link>

              <span className=" group cursor-pointer ml-4 ">
                <div className="flex">
                  <h3
                    className={
                      router.pathname == "/About" ||
                      router.pathname == "/Senate" ||
                      router.pathname == "/Academic" ||
                      router.pathname == "/Exicutive" ||
                      router.pathname == "/Finance"
                        ? "text-green-600 font-semibold"
                        : ""
                    }
                  >
                    ABOUT
                  </h3>
                  <ArrowDropDownIcon id="dropdown__icon" />
                </div>

                <span style={{ textAlign: "left", zIndex: "1" }}>
                  <ul className="dropdown-menu   absolute hidden   group-hover:block  text-gray-700 pt-2">
                    <span className="development__head cursor-pointer group">
                      <div className="flex rounded-t ">
                        <Link href="/About">
                          <div
                            style={{ minWidth: "100%" }}
                            className={
                              router.pathname == "/About"
                                ? "bg-green-800 py-2"
                                : "bg-navbg hover:bg-green-800 py-2"
                            }
                          >
                            <li className=" px-4 block whitespace-no-wrap text-sm ">
                              <p> JAMIA</p>
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
                            ? "bg-green-800 flex rounded-b  service__group__spa      py-2"
                            : "flex rounded-b   bg-navbg hover:bg-green-800     py-2"
                        }
                      >
                        <li className=" px-4 block whitespace-no-wrap text-sm ">
                          <p>LEADERSHIP</p>
                        </li>
                        <ArrowRightIcon style={{ color: "#fff" }} />
                      </div>
                      <ul className="design__list">
                        <Link href="/Senate">
                          <li
                            className={
                              router.pathname === "/Senate"
                                ? " bg-green-800 pt-3 py-2 px-2 block whitespace-no-wrap text-sm"
                                : "bg-navbg hover:bg-green-800 pt-3 py-2 px-2 block whitespace-no-wrap text-sm"
                            }
                            // className=" "
                          >
                            SENATE
                          </li>
                        </Link>

                        <Link href="/Academic">
                          <li
                            className={
                              router.pathname === "/Academic"
                                ? " bg-green-800 pt-3 py-2 px-2 block whitespace-no-wrap text-sm"
                                : "bg-navbg hover:bg-green-800 pt-3 py-2 px-2 block whitespace-no-wrap text-sm"
                            }
                          >
                            ACADEMIC COUNCIL
                          </li>
                        </Link>
                        <Link href="/Exicutive">
                          <li
                            className={
                              router.pathname === "/Exicutive"
                                ? " bg-green-800 pt-3 py-2 px-2 block whitespace-no-wrap text-sm"
                                : "bg-navbg hover:bg-green-800 pt-3 py-2 px-2 block whitespace-no-wrap text-sm"
                            }
                          >
                            EXECUTIVE COUNCIL
                          </li>
                        </Link>
                        <Link href="/Finance">
                          <li
                            className={
                              router.pathname === "/Finance"
                                ? " bg-green-800 pt-3 py-2 px-2 block whitespace-no-wrap text-sm rounded-b"
                                : "bg-navbg rounded-b hover:bg-green-800 pt-3 py-2 px-2 block whitespace-no-wrap text-sm"
                            }
                          >
                            FINANCE COMMITTEE
                          </li>
                        </Link>
                      </ul>
                    </span>
                  </ul>
                </span>
              </span>

              <span className="flex group cursor-pointer  ml-4">
                <Link href="/Programmes">
                  <h3
                    className={
                      router.pathname == "/HsProgrammes" ||
                      router.pathname == "/HsProgrammes"
                        ? "text-green-600 font-semibold"
                        : ""
                    }
                  >
                    PROGRAMMES
                  </h3>
                </Link>

                <ArrowDropDownIcon id="dropdown__icon" />

                <div className="dorpdown__div">
                  <ul className="dropdown-menu absolute hidden   group-hover:block  text-gray-700 pt-6">
                    <span className="development__head cursor-pointer group">
                      <Link href="/HsProgrammes">
                        <div
                          style={{ minWidth: "150px" }}
                          className={
                            router.pathname == "/HsProgrammes"
                              ? "bg-green-800 py-2"
                              : "bg-navbg hover:bg-green-800 py-2"
                          }
                        >
                          <li className=" px-4 block whitespace-no-wrap text-sm ">
                            HS PROGRAMMES
                          </li>
                        </div>
                      </Link>
                      <Link href="/HssProgrammes">
                        <div
                          style={{ minWidth: "160px" }}
                          className={
                            router.pathname == "/HssProgrammes"
                              ? "bg-green-800 py-2"
                              : "bg-navbg hover:bg-green-800 py-2"
                          }
                        >
                          <li className=" px-4 block whitespace-no-wrap text-sm ">
                            HSS PROGRAMMES
                          </li>
                        </div>
                      </Link>
                      <Link href="/BsProgrammes">
                        <div
                          style={{ minWidth: "150px" }}
                          className={
                            router.pathname == "/BsProgrammes"
                              ? "bg-green-800 py-2 rounded-b"
                              : "bg-navbg hover:bg-green-800 py-2 rounded-b"
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
              </span>

              <span className="flex group cursor-pointer ml-4 ">
                <h3
                  className={
                    router.pathname == "/campuses/OnCampuses" ||
                    router.pathname == "/campuses/ScienceCampuses" ||
                    router.pathname == "/campuses/Erthunnabavi"
                      ? "text-green-600 font-semibold"
                      : ""
                  }
                >
                  CAMPUSES
                </h3>
                <ArrowDropDownIcon id="dropdown__icon" />

                <div className="dorpdown__div">
                  <ul className="dropdown-menu absolute hidden   group-hover:block  text-gray-700 pt-6">
                    <span className="development__head cursor-pointer group">
                      <Link href="/campuses/OnCampuses">
                        <div
                          className={
                            router.pathname == "/campuses/OnCampuses"
                              ? "bg-green-800 py-2"
                              : "bg-navbg hover:bg-green-800 py-2"
                          }
                        >
                          <li className=" px-4 block whitespace-no-wrap text-sm ">
                            ON-CAMPUSES
                          </li>
                        </div>
                      </Link>
                      <Link href="/campuses/ScienceCampuses">
                        <div
                          className={
                            router.pathname == "/campuses/ScienceCampuses"
                              ? "bg-green-800 py-2"
                              : "bg-navbg hover:bg-green-800 py-2"
                          }
                        >
                          <li className=" px-4 block whitespace-no-wrap text-sm ">
                            SCIENCE ACADEMY
                          </li>
                        </div>
                      </Link>
                      <Link href="/campuses/Erthunnabavi">
                        <div
                          style={{ minWidth: "210px" }}
                          className={
                            router.pathname == "/campuses/Erthunnabavi"
                              ? "bg-green-800 py-2 rounded-b"
                              : "bg-navbg hover:bg-green-800 py-2 rounded-b"
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
              </span>

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

              <span className="ml-3 group">
                <a href="https://manager.jamiamadeenathunnoor.org/">
                  <h3 className="whitespace-nowrap">STAFF PANEL</h3>
                </a>

                <div className="bg-green-600 h-1   hidden   group-hover:block"></div>
              </span>
              <span className="ml-3 group cursor-pointer">
                <Link href="/Alumni" className="ml-4">
                  <h3
                    className={
                      router.pathname == "/Alumni"
                        ? "text-green-600 cursor-pointer font-semibold"
                        : "  cursor-pointer"
                    }
                  >
                    ALUMNI
                  </h3>
                </Link>
                <div className="bg-green-600 h-1   hidden   group-hover:block"></div>
              </span>
              <span className="ml-3 group cursor-pointer">
                <Link href="/Newses" className="ml-4">
                  <h3
                    className={
                      router.pathname == "/Newses"
                        ? "text-green-600 cursor-pointer font-semibold"
                        : "  cursor-pointer"
                    }
                  >
                    NEWS
                  </h3>
                </Link>
                <div className="bg-green-600 h-1   hidden   group-hover:block"></div>
              </span>
              <span className="ml-4 cursor-pointer  group">
                {" "}
                <Link href="/Contact">
                  <h3
                    className={
                      router.pathname == "/Contact"
                        ? "text-green-600 cursor-pointer font-semibold"
                        : "  cursor-pointer"
                    }
                  >
                    CONTACT{" "}
                  </h3>
                </Link>
                <div className="bg-green-600 h-1   hidden   group-hover:block"></div>
              </span>
            </div>
          </div>
        </div>
      </div>
      <MobNav />
    </div>
  );
}
