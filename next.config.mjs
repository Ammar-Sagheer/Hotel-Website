/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lbfljykaafwfbrgubfwg.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/cabin-images/**",
      },
    ],
  },
  output: "export", //to export the website as static files, so it can be hosted on any static hosting service like Netlify, Vercel, GitHub Pages, etc. (Static Site Generation)
};

export default nextConfig;
