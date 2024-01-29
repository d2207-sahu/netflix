/** @type {import('next').NextConfig} */
// const allowedOrigins = ['http://127.0.0.1:8020', 'http://localhost:8020', 'http://127.0.0.1:9000', 'http://localhost:9000'];
//   const origin = req.headers.origin;
//   if (allowedOrigins.includes(origin)) {
//        res.setHeader('Access-Control-Allow-Origin', origin);
//   }
//   //res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:8020');
//   res.header('Access-Control-Allow-Methods', 'GET, OPTIONS');
//   res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//   res.header('Access-Control-Allow-Credentials', true);
const nextConfig = {
  async headers() {
    return [
      {
        // matching all API routes
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
          { key: 'Access-Control-Allow-Origin', value: 'http://localhost:3000' },
          // { key: 'Access-Control-Allow-Origin', value: 'https://netflix-divyanshu.vercel.app, http://localhost:3001, http://localhost:3000' },
          { key: 'Access-Control-Allow-Methods', value: 'GET,DELETE,PATCH,POST,PUT' },
          {
            key: 'Access-Control-Allow-Headers',
            value: 'Accept, Accept-Version, Content-Length, Content-MD5, Content-Type. Authorization, Date'
          }
        ]
      },
    //   {
    //     source: '/api/special-data',
    //     headers: [
    //       { key: 'Access-Control-Allow-Credentials', value: 'false' },
    //       { key: 'Access-Control-Allow-Origin', value: 'http://localhost:3001' },
    //       { key: 'Access-Control-Allow-Origin', value: 'https://netflix-divyanshu.vercel.app' },
    //       { key: 'Access-Control-Allow-Methods', value: 'GET,DELETE,PATCH,POST,PUT' },
    //       {
    //         key: 'Access-Control-Allow-Headers',
    //         value: 'Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date'
    //       }
    //     ]
    //   }
    ];
  }
};

export default nextConfig;
