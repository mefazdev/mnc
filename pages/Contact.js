// import React from 'react';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import LocationOnIcon from '@material-ui/icons/LocationOn';

// import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
// import PhoneIcon from '@material-ui/icons/Phone';
 
// import Head from 'next/head';
 
// export default function Contact() {
//   return (
//       <>
//        <Head>
//         <title> Contact</title>
//         <meta name="description" content="" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//       <Navbar/>
//         <div className='contact'>
//  <div className='contact__header'>
 
//     <h2>CONTACT </h2>

//        </div>

//        <div className='contact__content pb-40'>
// <div className='contact__row  grid lg:grid-cols-3'>
// <div className='contact__row__left'>
// <div className='flex contact__row__div'>
//     <LocationOnIcon id='contact__icon'/>
//     <div className='ml-3'>
//     <h4 className='text-white'>JAMIA MADEENATHUNNOOR</h4>
//     <h6 className='text-white'>Poonoor, Unnikulam(PO)</h6>
//     <h6 className='text-white'>Kozhikode, Kerala</h6>
//     <h6 className='text-white'>India - PIN: 673 574</h6>
//     </div>
// </div>
// <div className='flex contact__row__div'>
//     <PhoneIcon id='contact__icon'/>
//     <div className='ml-3'>
//         <h6 className='text-white'>0495 2963484</h6>
//         {/* <h6>0495 2963484</h6> */}
//     </div>
// </div>
// <div className='flex contact__row__div'>
//     <AlternateEmailIcon id='contact__icon'/>
//     <div className='ml-3'>
//         <h6 className='text-white'>info@jamiamadeenathunnoor.org</h6>
//         {/* <h6>info@markazgarden.com</h6> */}
//     </div>
// </div>
// </div>
// <div className='contact__row__center'>

// </div>
// <div className='contact__row__right '>
// <h5 className='text-white text-xl'>Get in touch</h5>
// <div>
//     <form>
//         <input placeholder='Name'/>
//         <input placeholder='Email'/>
//         <input placeholder='Phone'/>
//         <textarea rows='3' placeholder='Message'/>
//         <button >SEND</button>
        
//     </form>
// </div>
// </div>     
// </div>
// <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15642.429655451811!2d75.9051301!3d11.4360147!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf60ace6147523af3!2sMarkaz%20Garden!5e0!3m2!1sen!2sin!4v1642778170307!5m2!1sen!2sin"
//          width="100%"
//          height="450"
//          style={{ border: 0, allowfullscreen: "", loading: "lazy" }}
//         ></iframe>
//        </div>
       
//         </div>
//         <Footer/>
//       </>

//   );
// }

import React from 'react';
import Image from 'next/image';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ContactPage = () => {
  const socialLinks = [
    { icon: <FaFacebook className="text-xl" />, url:"https://www.facebook.com/profile.php?id=100085673749100", name: "Facebook" },
    { icon: <FaTwitter className="text-xl" />, url: "https://www.instagram.com/jamia_madeenathunnoor/", name: "Twitter" },
    { icon: <FaInstagram className="text-xl" />, url: "#", name: "Instagram" },
    { icon: <FaYoutube className="text-xl" />, url: "https://www.youtube.com/c/GlocalMediaMarkazGarden", name: "YouTube" },
    { icon: <FaLinkedin className="text-xl" />, url: "#", name: "LinkedIn" }
  ];

  const departments = [
    { name: "Admissions", email: "info@jamiamadeenathunoor.org", phone: "8086 798 8392" },
    { name: "Academic Office", email: "info@jamiamadeenathunoor.org", phone: "0495 2963484" },
    { name: "Student Affairs", email: "info@jamiamadeenathunoor.org", phone: "0495 2963484" },
    { name: "Alumni Relations", email: "om.prism@gmail.com", phone: "+91 9048 338 225" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
        <Navbar/>
      {/* Hero Section */}
      <div className="relative  bg-gradient-to-r from-primary to-primary/80   pt-52 pb-24 ">
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div className='mt-10'>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Contact Us</h1>
            <p className="text-xl text-white">Get in touch with JMN</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Information - Left Side */}
          <div className="lg:w-1/2">
            <div className="bg-white rounded-xl shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <FaMapMarkerAlt className="text-red-500 mr-3" />
                Our Address
              </h2>
              <address className="not-italic text-gray-700 space-y-4">
                <p className="text-lg font-semibold">JAMIA MADEENATHUNNOOR</p>
                <p>Poonoor, Unnikulam(PO)</p>
                <p>Kozhikode, Kerala</p>
                <p>India - PIN: 673 574</p>
                <p className="flex items-center mt-4">
                  <FaPhone className="text-secondary mr-3" />
                  <a href="tel:04952963484" className="hover:text-blue-600">0495 2963484</a>
                </p>
                <p className="flex items-center">
                  <FaEnvelope className="text-secondary mr-3" />
                  <a href="mailto:info@jamiamadeenathunnoor.org" className="hover:text-blue-600">info@jamiamadeenathunnoor.org</a>
                </p>
                <p className="flex items-center">
                  <FaClock className="text-secondary mr-3" />
                  Office Hours: 9:00 AM - 5:00 PM (Monday to Saturday)
                </p>
              </address>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-xl shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Connect With Us</h2>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-100 hover:bg-blue-100 text-primary/80 p-4 rounded-full transition-colors"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Department Contacts */}
            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Department Contacts</h2>
              <div className="space-y-4">
                {departments.map((dept, index) => (
                  <div key={index} className="border-b border-gray-200 pb-4 last:border-0">
                    <h3 className="font-bold text-gray-800">{dept.name}</h3>
                    <p className="flex items-center text-gray-600">
                      <FaPhone className="mr-2 text-sm" />
                      <a href={`tel:${dept.phone.replace(/\s/g, '')}`} className="hover:text-blue-600">{dept.phone}</a>
                    </p>
                    <p className="flex items-center text-gray-600">
                      <FaEnvelope className="mr-2 text-sm" />
                      <a href={`mailto:${dept.email}`} className="hover:text-blue-600">{dept.email}</a>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Map and Contact Form */}
          <div className="lg:w-1/2">
            {/* Google Map */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
              <h2 className="text-xl font-bold text-gray-800 p-6 pb-0">Our Location</h2>
              <div className="aspect-w-16 aspect-h-9 h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15642.429655451811!2d75.9051301!3d11.4360147!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf60ace6147523af3!2sMarkaz%20Garden!5e0!3m2!1sen!2sin!4v1642778170307!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Jamia Madeenathunnoor Location"
                ></iframe>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-gray-700 mb-2">Subject</label>
                  <select
                    id="subject"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select a subject</option>
                    <option value="admission">Admission Inquiry</option>
                    <option value="academic">Academic Question</option>
                    <option value="general">General Inquiry</option>
                    <option value="feedback">Feedback/Suggestion</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                  <textarea
                    id="message"
                    rows="4"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-primary hover:bg-primary/80 text-white px-6 py-3 rounded-lg font-medium w-full transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default ContactPage;
