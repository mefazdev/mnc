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
export default function Navbar() {
  const [collapse, setCollapse] = useState(false);
  const [about, setAbout] = useState(false);
  const [media, setMedia] = useState(false);
  const [programmes, setProgrammes] = useState(false);
  const router = useRouter();
  const [changeNav, setChangeNav] = useState(false);
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
  };
  const controlProgrammes = () => {
    setAbout(false);
    setMedia(false);
    setProgrammes(!programmes);
  };
  const controlMedia = () => {
    setAbout(false);
    setProgrammes(false);
    setMedia(!media);
  };
  return (
    <div className={changeNav ? "navbar__on__scroll" : "navbar"}>
      <div className="navbar__left ">
        <div className="navbar__left__div flex">
          <div className="flex">
            <div className="nav__logo">
              <Link href="/">
                <Image src={logo} />
              </Link>
            </div>
            <div className="nav__name">
              <Link href="/">
                <Image src={caligraphy} />
              </Link>
              {/* <h1>JAMIA MADEENTHUNNOOR</h1> */}
            </div>
          </div>

          <MenuIcon onClick={() => setCollapse(!collapse)} id="menu__icon" />
        </div>
      </div>

      <div className="navbar__right  flex">
        <div className="navbar__right__div flex">
          <Link href="/">
            <h3 className={router.pathname == "/" ? "active__nav" : ""}>
              HOME
            </h3>
          </Link>

          <span className="flex group cursor-pointer ">
            <h3>ABOUT</h3>
            <ArrowDropDownIcon id="dropdown__icon" />

            <div className="dorpdown__div">
              <ul className="dropdown-menu absolute hidden   group-hover:block  text-gray-700 pt-6">
                <span className="development__head cursor-pointer group">
                  <Link href="/About">
                    <div
                      className={
                        router.pathname == "/About"
                          ? "active__dropdown py-2"
                          : "service__group__span py-2"
                      }
                    >
                      <li className=" px-4 block whitespace-no-wrap text-sm ">
                        <p
                          className={
                            router.pathname == "/About"
                              ? "active__dropdown"
                              : ""
                          }
                        >
                          {" "}
                          JAMIA
                        </p>
                      </li>
                    </div>
                  </Link>
                  <Link href="/Faculty">
                    <div
                      className={
                        router.pathname == "/Faculty"
                          ? "active__dropdown py-2"
                          : "service__group__span py-2"
                      }
                    >
                      <li className=" px-4 block whitespace-no-wrap text-sm ">
                        FACULTY PROFILE
                      </li>
                    </div>
                  </Link>
                </span>
              </ul>
            </div>
          </span>
          <span className="flex group cursor-pointer ">
            <Link href="/Programmes">
              <h3>PROGRAMMES</h3>
            </Link>

            <ArrowDropDownIcon id="dropdown__icon" />

            <div className="dorpdown__div">
              <ul className="dropdown-menu absolute hidden   group-hover:block  text-gray-700 pt-6">
                <span className="development__head cursor-pointer group">
                  <Link href="/HsProgrammes">
                    <div
                      className={
                        router.pathname == "/HsProgrammes"
                          ? "active__dropdown py-2"
                          : "service__group__span py-2"
                      }
                    >
                      <li className=" px-4 block whitespace-no-wrap text-sm ">
                        HS PROGRAMMES
                      </li>
                    </div>
                  </Link>
                  <Link href="/BsProgrammes">
                    <div
                      className={
                        router.pathname == "/BsProgrammes"
                          ? "active__dropdown py-2"
                          : "service__group__span py-2"
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

          <span className="flex group cursor-pointer ">
            <h3>MEDIA</h3>
            <ArrowDropDownIcon id="dropdown__icon" />

            <div className="dorpdown__div">
              <ul className="dropdown-menu absolute hidden   group-hover:block  text-gray-700 pt-6">
                <span className="development__head cursor-pointer group">
                  <Link href="/Blogs">
                    <div
                      className={
                        router.pathname == "/Blogs"
                          ? "active__dropdown py-2"
                          : "service__group__span py-2"
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
                        ? "active__dropdown py-2"
                        : "service__group__span py-2"
                    }
                  >
                    <li className=" px-4 block whitespace-no-wrap text-sm ">
                      IMAGES
                    </li>
                  </div>
                  <div
                    className={
                      router.pathname == "/Videos"
                        ? "active__dropdown py-2"
                        : "service__group__span py-2"
                    }
                  >
                    <li className=" px-4 block whitespace-no-wrap text-sm ">
                      VIDEOS
                    </li>
                  </div>
                </span>
              </ul>
            </div>
          </span>

          <Link href="/Alumni">
            <h3>ALUMNI</h3>
          </Link>

          <Link href="/Contact">
            <h3>CONTACT </h3>
          </Link>
        </div>
      </div>

      {/* <<<<<<<<< COLLAPSE>>>>>>>>>>>>>> */}

      {collapse ? (
        <div className="nav__collapse">
          <Link href="/">
            <div className="collapse_row">
              <p>HOME</p>
            </div>
          </Link>

          <div className="collapse_row flex">
            <div className="flex" onClick={() => controlAbout()}>
              <p>ABOUT</p>
              <ArrowRightIcon id="collapse__arrow" />
            </div>

            {about ? (
              <div className="collapse__collapse">
                <Link href="/About">
                  <div className="collapse_collapse__row">
                    <p>JAMIA</p>
                  </div>
                </Link>
                <Link href="/Faculty">
                  <div className="collapse_collapse__row">
                    <p>FACULTY</p>
                  </div>
                </Link>
              </div>
            ) : (
              ""
            )}
          </div>

          <div className="collapse_row flex">
            <div className="flex" onClick={() => controlProgrammes()}>
              <p>PROGRAMMES</p>
              <ArrowRightIcon id="collapse__arrow" />
            </div>

            {programmes ? (
              <div className="collapse__collapse">
                <Link href="HsProgrammes">
                  <div className="collapse_collapse__row">
                    <p>HS</p>
                  </div>
                </Link>
                <Link href="BsProgrammes">
                  <div className="collapse_collapse__row">
                    <p>BS</p>
                  </div>
                </Link>
              </div>
            ) : (
              ""
            )}
          </div>

          <div className="collapse_row flex">
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
          </div>
          <Link href="/Alumni">
            <div className="collapse_row">
              <p>ALUMNI</p>
            </div>
          </Link>
          <Link href="Contact">
            <div className="collapse_row">
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
