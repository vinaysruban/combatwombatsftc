import withPWAInit from "next-pwa";

/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
};

const withPWA = withPWAInit({
  dest: "public",
});

export default withPWA(nextConfig);
