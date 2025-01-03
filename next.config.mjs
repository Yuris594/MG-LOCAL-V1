/** @type {import('next').NextConfig} */
  const nextConfig = {
    images: {
      unoptimized: true,
    },
    
    output: 'export',

    /*async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: 'http://172.20.20.3:8001/:path*',
        },
      ]
    },*/
  }

  export default nextConfig;



   
