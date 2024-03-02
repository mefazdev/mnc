import React from "react";
import logo from "../assets/images/LOGO-2.png";
import caligraphy from "../assets/images/caligraphy.png";
import Image from "next/image";
import Link from "next/link";
// import NavLink from 'next/navlink'
import { useRouter } from "next/router";
import MenuIcon from "@material-ui/icons/Menu";
import { useEffect, useState } from "react";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import CloseIcon from "@mui/icons-material/Close";

export default function Navbar() {
  const [collapse, setCollapse] = useState(false);
  const [about, setAbout] = useState(false);
  const [media, setMedia] = useState(false);
  const [programmes, setProgrammes] = useState(false);
  const [campuses, setCampuses] = useState(false);
  const router = useRouter();
  const [changeNav, setChangeNav] = useState(false);
  const [leaderSHip, setLeaderShip] = useState(false);
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

  const controlAbout = () => {
    setProgrammes(false);
    setMedia(false);
    setAbout(!about);
    setCampuses(false);
    setLeaderShip(false);
  };
  const controlProgrammes = () => {
    setAbout(false);
    setMedia(false);
    setProgrammes(!programmes);
    setCampuses(false);
  };
  const controlMedia = () => {
    setAbout(false);
    setProgrammes(false);
    setMedia(!media);
    setCampuses(false);
  };

  const controlLeaderShip = () => {
    setLeaderShip(!leaderSHip);
    // setAbout(false)
  };

  const controlCampuses = () => {
    setCampuses(!campuses);
    setMedia(false);
    setAbout(false);
    setProgrammes(false);
  };
  return (
    <div
      //  className={changeNav ? "navbar__on__scroll" : "navbar"}
      className="navbar__on__scroll w-full"
    >
      <div className="grid  lg:grid-cols-3  w-11/12 m-auto">
        <div className=" flex w-full justify-between items-center ">
          <div className="flex">
            <div className="nav__logo rounded">
              <Link href="/">
                <Image src={logo} className="rounded" alt="" />
              </Link>
            </div>
            <div className="nav__name">
              <Link href="/">
                <Image src={caligraphy} alt="" />
              </Link>
            </div>
          </div>

          <span className="lg:hidden">
            <MenuIcon id="menu__icon" onClick={() => setCollapse(!collapse)} />
          </span>
        </div>

        <div className="navbar__right  col-span-2 hidden  lg:flex justify-end  relative   ">
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
                            <p
                            // className={
                            //   router.pathname == "/About"
                            //     ? "active__dropdown"
                            //     : ""
                            // }
                            >
                              {" "}
                              JAMIA
                            </p>
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
                            router.pathname === "/Finance   "
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
                <h3>STAFF PANEL</h3>
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

      {/* <<<<<<<<< COLLAPSE>>>>>>>>>>>>>> */}

      {collapse ? (
        <div className="nav__collapse lg:hidden text-white  pt-3  text- ">
          <Link href="/">
            <div className=" border-b border-gray-800 p-2 pl-6 ">
              <p>HOME</p>
            </div>
          </Link>

          <div className="border-b border-gray-800 p-2 pl-6  flex relative">
            <div className="flex " onClick={() => controlAbout()}>
              <p>ABOUT</p>
              <ArrowRightIcon className="mt-0.5" />
            </div>

            {about ? (
              <div className="bg-navbg  absolute w-11/12 mt-8  z-50">
                <Link href="/About">
                  <div className="bg-navbg p-3 border-b">
                    <p>JAMIA</p>
                  </div>
                </Link>

                <div className="bg-navbg p-3 flex" onClick={controlLeaderShip}>
                  <p>LEADERSHIP</p>
                  <ArrowRightIcon className="" />
                </div>
              </div>
            ) : (
              ""
            )}
            {leaderSHip ? (
              <div className=" absolute z-50 w-11/12   mt-32 border  bg-white text-black ">
                {/* <CloseIcon
                  style={{
                    position: "absolute",
                    right: "0",
                    marginRight: "5px",
                  }}
                  onClick={() => setLeaderShip(false)}
                /> */}
                <Link href="/Senate">
                  <div className="border-b p-3">
                    <p>SENATE</p>
                  </div>
                </Link>
                <Link href="/Academic">
                  <div className="border-b p-3">
                    <p>ACADEMIC COUNCIL</p>
                  </div>
                </Link>
                <Link href="/Exicutive">
                  <div className="border-b p-3">
                    <p>EXECUTIVE COUNCIL</p>
                  </div>
                </Link>
                <Link href="/Finance">
                  <div className="border-b p-3">
                    <p>FINANCE COMMITTEE</p>
                  </div>
                </Link>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="border-b border-gray-800 p-2 pl-6  flex relative">
            <div className="flex" onClick={() => controlProgrammes()}>
              <p>PROGRAMMES</p>
              <ArrowRightIcon className="mt-0.5" />
            </div>

            {programmes ? (
              <div className="z-50 absolute mt-9 bg-navbg w-11/12">
                 <Link href="/HsProgrammes">
                  <div className="p-3 border-b border-gray-400">
                    <p>HS PROGRAMMES</p>
                  </div>
                </Link>
                <Link href="/HssProgrammes">
                  <div className="p-3 border-b border-gray-400">
                    <p>HSS PROGRAMMES</p>
                  </div>
                </Link>
                <Link href="/BsProgrammes">
                  <div className="p-3  ">
                    <p>BS PROGRAMMES </p>
                  </div>
                </Link>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="border-b border-gray-800 p-2 pl-6  flex relative ">
            <div className="flex" onClick={() => controlCampuses()}>
              <p>CAMPUSES</p>
              <ArrowRightIcon className="mt-0.5" />
            </div>

            {campuses ? (
              <div className="z-50 absolute w-11/12 bg-navbg mt-10">
                <Link href="/campuses/OnCampuses">
                  <div className="p-3 border-b border-gray-400">
                    <p>ON-CAMPUSES</p>
                  </div>
                </Link>
                <Link href="/campuses/ScienceCampuses">
                  <div className="p-3 border-b border-gray-400">
                    <p>SCIENCE ACADEMY</p>
                  </div>
                </Link>
                <Link href="/campuses/Erthunnabavi">
                  <div className="p-3">
                    <p>ERTHUNNABAVI</p>
                  </div>
                </Link>
              </div>
            ) : (
              ""
            )}
          </div>

          {/* <div className="collapse_row flex">
            <div className="flex" onClick={() => controlMedia()}>
              <p>MEDIA</p>
              <ArrowRightIcon id="collapse__arrow" />
            </div>

            {media ? (
              <div className="collapse__collapse">
                <Link href="/Blog">
                  <div className="collapse_collapse__row">
                    <p>NEWS & EVENTS</p>
                  </div>
                </Link>

                <div className="collapse_collapse__row">
                  <p>IMAGES</p>
                </div>
                <div className="collapse_collapse__row">
                  <p>VIDEOS</p>
                </div>
              </div>
            ) : (
              ""
            )}
          </div> */}
          <a href="https://manager.jamiamadeenathunnoor.org/">
            <div className="border-b border-gray-800 p-2 pl-6">
              <p>STAFF PANEL</p>
            </div>
          </a>

          <Link href="/Alumni">
            <div className="border-b border-gray-800 p-2 pl-6">
              <p>ALUMNI</p>
            </div>
          </Link>

          <Link href="Contact">
            <div className=" border-b border-gray-800 p-2 pl-6 ">
              <p>CONTACT</p>
            </div>
          </Link>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
