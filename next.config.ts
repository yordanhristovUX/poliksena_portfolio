import type { NextConfig } from 'next';
import createMDX from '@next/mdx';

// @next/mdx is used only for .mdx page files (if any).
// Content MDX (blog, work) is rendered via next-mdx-remote/rsc which
// applies remark/rehype plugins at render time — no build-time config needed.
const withMDX = createMDX({});

const nextConfig: NextConfig = {
  pageExtensions: ['ts', 'tsx', 'mdx'],
};

export default withMDX(nextConfig);
