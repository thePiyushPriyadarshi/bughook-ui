import type { NextConfig } from "next";

import { createContentlayerPlugin } from 'next-contentlayer2'

/** @type {import('next').NextConfig} */
const nextConfig:NextConfig = {
  // your config options here
}
const withContentlayer = createContentlayerPlugin({
  // Additional Contentlayer config options
})
export default withContentlayer(nextConfig)

