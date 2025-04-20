// next.config.ts
import { execSync } from "child_process";
import type { NextConfig } from "next";

// Run at build time to grab “Month YYYY” of the latest commit
const lastUpdated = execSync("git log -1 --format='%cd' --date=format:'%B %Y'")
  .toString()
  .trim();

const nextConfig: NextConfig = {
  // Expose to the browser as NEXT_PUBLIC_…
  env: {
    NEXT_PUBLIC_LAST_UPDATED: lastUpdated,
  },

  reactStrictMode: true,
};

export default nextConfig;
