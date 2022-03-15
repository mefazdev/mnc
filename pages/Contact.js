import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LocationOnIcon from '@material-ui/icons/LocationOn';

import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import PhoneIcon from '@material-ui/icons/Phone';
import garden from '../assets/images/garden.JPG'
import Head from 'next/head';
 
export default function Contact() {
  return (
      <>
       <Head>
        <title> Contact</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
        <div className='contact'>
 <div className='contact__header'>
 
    <h2>CONTACT </h2>

       </div>

       <div className='contact__content '>
<div className='contact__row  grid lg:grid-cols-3'>
<div className='contact__row__left'>
<div className='flex contact__row__div'>
    <LocationOnIcon id='contact__icon'/>
    <div className='ml-3'>
    <h4>JAMIA MADEENATHUNNOOR</h4>
    <h6>Poonoor, Unnikulam(PO)</h6>
    <h6>Kozhikode, Kerala</h6>
    <h6>India - PIN: 673 574</h6>
    </div>
</div>
<div className='flex contact__row__div'>
    <PhoneIcon id='contact__icon'/>
    <div className='ml-3'>
        <h6>0495 2963484</h6>
        {/* <h6>0495 2963484</h6> */}
    </div>
</div>
<div className='flex contact__row__div'>
    <AlternateEmailIcon id='contact__icon'/>
    <div className='ml-3'>
        <h6>info@markazgarden.com</h6>
        {/* <h6>info@markazgarden.com</h6> */}
    </div>
</div>
</div>
<div className='contact__row__center'>

</div>
<div className='contact__row__right '>
<h5>Get in touch</h5>
<div>
    <form>
        <input placeholder='Name'/>
        <input placeholder='Email'/>
        <input placeholder='Phone'/>
        <textarea rows='3' placeholder='Message'/>
        <button >SEND</button>
        
    </form>
</div>
</div>     
</div>
<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15642.429655451811!2d75.9051301!3d11.4360147!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf60ace6147523af3!2sMarkaz%20Garden!5e0!3m2!1sen!2sin!4v1642778170307!5m2!1sen!2sin"
         width="100%"
         height="450"
         style={{ border: 0, allowfullscreen: "", loading: "lazy" }}
        ></iframe>
       </div>
       
        </div>
        <Footer/>
      </>

  );
}
