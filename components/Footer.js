import React from "react";
import SchoolIcon from "@material-ui/icons/School";
import CallIcon from "@material-ui/icons/Call";
import MailIcon from "@material-ui/icons/Mail";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import Link from "next/link";
export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__content lg:gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <div className="footer__address">
          <div className="flex">
            <SchoolIcon id="footer__icon" />
            <div className="pl-2">
              <h5>JAMIA MADEENATHUNNOOR</h5>
              <h6>
                Poonoor, Unnikulam(PO), Kozhikode, Kerala
                <br /> India - PIN: 673 574
              </h6>
              {/* <h5>CIN : U72900KL2016PTC047206</h5> */}
            </div>
          </div>
          <div className="flex footer__call">
            <CallIcon id="footer__icon" />
            <p>0495 2963484</p>
          </div>
          <div className="flex footer__mail">
            <MailIcon id="footer__icon" />
            <p>info@jamiamadeenathunoor.org</p>
          </div>
          <div className="flex footer__social">
            <a href="https://www.facebook.com/MarkazGardenofficial ">
              <FacebookIcon id="footer__social__icon" />
            </a>

            <a href="https://www.facebook.com/MarkazGardenofficial/">
              <InstagramIcon id="footer__social__icon" />
            </a>
            <a>
              <TwitterIcon id="footer__social__icon" />
            </a>

            <a href="https://www.youtube.com/c/GlocalMediaMarkazGarden">
              <YouTubeIcon id="footer__social__icon" />
            </a>
          </div>
          <div className="flex footer__input">
            <input placeholder="Subscribe our newsletter" />
            <span className="rounded-full">
              <ArrowForwardIcon id="footer__arrow" />
            </span>
          </div>
        </div>

        <div className="footer__menu lg:m-auto mt-10    lg:mt-0 ">
          <Link href="/Home">
            <h6>Home</h6>
          </Link>
          <Link href="/About">
            <h6>About</h6>
          </Link>

          {/* <Link href='/Blog'>
             <h6>News</h6>
             </Link> */}

          {/* <Link href='/News'><h6>Events</h6></Link> */}
          <a href="https://manager.jamiamadeenathunnoor.org/">
            <h6>Staff Panel</h6>
          </a>
          <Link href="/Contact">
            <h6>Contact us</h6>
          </Link>
        </div>
        <div className="footer__menu lg:m-auto   lg:mt-0 ">
          <Link href="/Programmes">
            <h6>Academics</h6>
          </Link>
          <Link href="/Faculty">
            <h6>Faculty profile</h6>
          </Link>

          <h6>Admission</h6>
          <Link href="/About">
            <h6>Vision & Mission</h6>
          </Link>

          {/* <Link href='/'><h6>Message of rector</h6></Link> */}
          {/* <Link href='/'><h6>Message of Chancellor</h6></Link> */}
        </div>
        <div className="footer__menu lg:m-auto  lg:mt-0 ">
          {" "}
          <Link href="/campuses/OnCampuses">
            <h6>On-Campuses</h6>
          </Link>

          <Link href="/campuses/ScienceCampuses">
            <h6>Science  Campuses</h6>
          </Link>

          <Link href="/campuses/Erthunnabavi">
            <h6>Erthunnabavi Campuses</h6>
          </Link>
       
         
          <Link href="/Alumni">
            <h6>Alumni</h6>
          </Link>
        
        </div>
      </div>

      <div className="footer___bottom  ">
        <div className="footer__bottom__content flex">
          {/* <div className='flex footer__bottom__left'>
      <Link href='/'><p>Home</p></Link>
    
    <p className='ml-1'>|</p>
    <Link href='/About'><p className='ml-1'>About </p></Link>
    
    <p className='ml-1'>|</p>
    <Link href='/Contact'><p className='ml-1'>Contact</p></Link>
    
    </div> */}
          <div className="footer__bottom__right">
            <p>
              ©2023. Powered by{" "}
              <a
                href="whatsapp://send?phone=+918606256402"
                data-action="share/whatsapp/share"
                style={{ textDecoration: "underline", cursor: "pointer" }}
              >
                {/* <p style={{textDecoration:'underline',cursor:'pointer'}} className="ml-2"> */}
                Booreact
                {/* </p> */}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
