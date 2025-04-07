
// next.config.js

const nextConfig = {
  // reactStrictMode: true,
  env: {
    MONGO_URI:
      "mongodb+srv://jmn:JDjLYo6wWCB7b0KI@cluster0.s9qqet0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
  },
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: 'https',
  //       hostname: 'res.cloudinary.com',
  //       port: '',
  //       pathname: '/**',  
  //     },
  //   ],
  // },
  images: {
    domains: ['res.cloudinary.com'],
  },
};

module.exports = nextConfig;


//  module.exports = {
//   reactStrictMode: true,
//   env: {
//     MONGO_URI:
 
//       "mongodb+srv://jmn:JDjLYo6wWCB7b0KI@cluster0.s9qqet0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
     
//   },

   
// };

 
 
// const nextConfig = {
//     images: {
//         remotePatterns: [
//           {
//             protocol: 'https',
//             hostname: 'res.cloudinary.com',
//             port: '',
//             pathname: '/**',  
//           },
//         ],
//       },
// };

// module.exports = nextConfig;

