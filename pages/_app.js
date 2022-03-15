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
import Head from 'next/head'

function MyApp({ Component, pageProps }) {


  return(
  <>
   <Head>
       <style>
       @import url(&quothttps://fonts.googleapis.com/css2?family=Heebo:wght@200;300;400;500&family=Poppins:wght@100;200;400&family=Quicksand&family=Roboto:wght@100&display=swap&quot);

       </style>
      </Head>
   <Component {...pageProps} />
  </>
  
  )
}

export default MyApp
