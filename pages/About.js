import React from 'react';
import Navbar from '../components/Navbar';
import Image from 'next/image'
import admission from '../assets/images/admission.JPG'
import mission from '../assets/images/black-bg.png'
import dots from '../assets/images/dots-white.png'
import Footer from '../components/Footer' 
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import { BusinessCenter, LocalLibrary } from '@material-ui/icons';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import DomainIcon from '@mui/icons-material/Domain';
import Head from 'next/head'
import SchoolIcon from '@mui/icons-material/School';
export default function About() {
  return (
  <>
   <Head>
        <title>  About</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
  <Navbar/>
<div className='about'>
<div className='about__header'>
    <h2>ABOUT  </h2>
</div>

<div className='about__content'>
 <div className='about__text grid gap-5 lg:gap-10 grid-cols-1 md:grid-cols-3'>
<div className='about__text__left'>
    <Image src={admission}/>
</div>

<div className='about__text__right col-span-2'>
 <h2>Jamia Madeenathunnoor</h2>
 <p>
   
     Markaz Garden Group of Institutions was established on the onset of these millennia by blending the religious wisdom and secular studies with a sake to enable Islamic renaissance possible. Jamia Madeenathunnoor is the chief institution under Markaz Garden Group of Institutions. Currently Jamia Madeenathunnoor has become an ensemble of multilayered educational system covering higher secondary studies, bachelors and post-graduation levels. Spread over a dozen of departments, more than three hundred students are pursuing their studies here. The institution is also providing residential facilities on the campus for students doing their courses in various disciplines and subjects. 
 </p>
</div>
 </div>

{/* <<<<<<< MISSSION >>>>>>>>>> */}
 <div className='mission__row gap-10 grid lg:grid-cols-2'>
<div className='vision'>
    <h2>OUR VISSION</h2>
    <p>To metamorphose into a unique Centre of Excellence, where, a cadre of spiritually holistic, professionally competent, intellectually vibrant scholars are molded & groomed, to meet the challenges of future.</p>
    <div className='vision__img'>
    <Image src={dots} />
    </div>

</div>
<div className='mission'>
<h2>OUR MISSION</h2>
    <p>Arrive at the threshold of new world driven by traditional learning, wisdom and modern trends. Inspire innovative & out of the box thoughts through benchmarked curriculum, there by leading the community and nation to the apex of Islamic wisdom and culture.</p>
    <div className='mision__img'>
    <Image src={dots} />
    </div>

</div>
 </div>



{/*<<<<<<<<<< CURRENT STATUS >>>>>>>>>> */}

<div className='about__status'>
    <div className='about__status__row gap-5 lg:gap-10 grid grid-cols-1 lg:grid-cols-3'>
  
   <div className=' about__status__item  flex'>
   <div className='rounded-full about__status__circle'>
  <DomainIcon  id='about__status__icons'/>
  </div>
  <p>19</p>
  <h6>CAMPUSES</h6>
   </div>
   <div className=' about__status__item flex'>
   <div className='rounded-full about__status__circle'>
  <SchoolIcon  id='about__status__icons'/>
  </div>
  <p>612</p>
  <h6>DEGREE STUDENTS</h6>
   </div>
   <div className=' about__status__item flex'>
   <div className='rounded-full about__status__circle'>
  <PeopleAltIcon  id='about__status__icons'/>
  </div>
  <p>1267</p>
  <h6>STUDENTS</h6>
   </div>
    </div>
    <div className='about__status__second__row gap-5 lg:gap-10 grid grid-cols-1 lg:grid-cols-3'>
   <div className=' about__status__item flex'>
   <div className='rounded-full about__status__circle'>
  <LocalLibrary  id='about__status__icons'/>
  </div>
  <p>28</p>
  <h6>MUTHAWAL STUDENTS</h6>
   </div>
   <div className=' about__status__item flex'>
   <div className='rounded-full about__status__circle'>
  <PeopleAltIcon  id='about__status__icons'/>
  </div>
  <p>559</p>
  <h6>HS STUDENTS</h6>
   </div>
   <div className=' about__status__item flex'>
   <div className='rounded-full about__status__circle'>
  <SchoolIcon  id='about__status__icons'/>
  </div>
  <p>68</p>
  <h6>PG STUDENTS</h6>
   </div>
    </div>
</div>

{/* <<<<<<<< LEADER SHIP >>>>>>>>>>>>>> */}
 {/* <div className='leadership__row'>
     <h2>MEET OUR LEADERSHIP</h2>

     <div className='leadership__first__row lg:gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
<div className='leadership__box'>
  <div className='leadership__img'>
      <Image src={apUsthad} />
      <img src={apUsthad}/>
  </div>
</div>
<div className='leadership__box'>

<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP5wlVT0XVhgVzzjZ0I40AKUSm8UEW76GA6g&usqp=CAU' />
</div>
<div className='leadership__box'>
<div className='leadership__img'>
    <Image src={mah}/>
    </div>
</div>
<div className='leadership__box'>

</div>
     </div>
     <div className='leadership__first__row grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>

     </div>
 </div> */}
</div>

</div>
<Footer/>
  </>
  );
}
