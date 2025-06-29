import type { NextConfig } from "next";
import { PHASE_PRODUCTION_BUILD } from 'next/constants';

const configFnc = (phase: string) => {
  const isProd = phase === PHASE_PRODUCTION_BUILD;

  const env = {
    IS_PROD: isProd.toString(),
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    VERSION: require('./package.json').version,
  };

  const nextConfig: NextConfig = {
    /* config options here */
    reactStrictMode: false,
    output: "standalone",
    // images: {
    //   unoptimized: true,
    // },
    env,
  }

  return nextConfig;
}

export default configFnc;
