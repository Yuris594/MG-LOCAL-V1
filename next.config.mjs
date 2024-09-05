/** @type {import('next').NextConfig} */
  const nextConfig = {
      output: 'export',
      
      async rewrites() {
        return [
          {
            source: "/:path*",
            destination: `http://172.20.20.3:8001/:path*`, 
           
          },
        ]
      },

  }

  export default nextConfig;



   
