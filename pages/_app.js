import '../styles/globals.css'
import '../styles/navbar.css'
import '../styles/home.css'
import '../styles/footer.css'
import '../styles/about.css'
import '../styles/programmes.css'
import '../styles/contact.css'
import '../styles/blogs.css'
import '../styles/status.css'
import '../styles/alumni.css'
import '../styles/blog.css'
import '../styles/faculty.css'
import '../styles/we.css'
import '../styles/result.css'
import '../styles/events.css'
import Head from 'next/head'
import Script from 'next/script'
function MyApp({ Component, pageProps }) {


  return(
  <>
   <Head>
       {/* <style>
       @import url(&quot;https://fonts.googleapis.com/css2?family=Heebo:wght@200;300;400;500&family=Poppins:wght@100;200;400&family=Quicksand&family=Roboto:wght@100&display=swap&quot;);

       </style> */}
        

       <style>
  @import url(&apos;https://fonts.googleapis.com/css2?family=Aboreto&family=Charis+SIL:wght@700&family=Inconsolata:wght@500&family=Josefin+Sans&family=Margarine&family=Montserrat:wght@300&family=Nunito&family=Roboto&family=Rubik:ital,wght@0,400;1,300&family=Space+Mono:wght@400;700&family=Ubuntu+Condensed&display=swap&apos;);
</style>
      </Head>

      
    <Script strategy="lazyOnload" id='analytics'>
        {` window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-KBB4S1YKTW');

  `}
      </Script>
   <Component {...pageProps} />
  </>
  
  )
}

export default MyApp
