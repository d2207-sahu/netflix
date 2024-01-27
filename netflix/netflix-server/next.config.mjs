/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        // matching all API routes
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Credentials', value: 'false' },
          { key: 'Access-Control-Allow-Origin', value: '*' },
          // { key: 'Access-Control-Allow-Origin', value: 'https://netflix-divyanshu.vercel.app, http://localhost:3001, http://localhost:3000' },
          { key: 'Access-Control-Allow-Methods', value: 'GET,DELETE,PATCH,POST,PUT' },
          {
            key: 'Access-Control-Allow-Headers',
            value: 'Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date'
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
