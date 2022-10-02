import nextMdx from "@next/mdx";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import { remarkCodeHike } from "@code-hike/mdx";
import theme from "shiki/themes/nord.json" assert { type: "json" };

/**
 * Rewrites and redirects are handled by
 * apps/www nextjs config
 *
 * Do not add them in this config
 */

const withMDX = nextMdx({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [[remarkCodeHike, { theme, autoImport: false }], remarkGfm],
    rehypePlugins: [rehypeSlug],
  },

  options: {
    // This is required for `MDXProvider` component
    providerImportSource: "@mdx-js/react",
  },
});

// /** @type {NextConfig} */
const nextConfig = {
  // Append the default value with md extensions
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  reactStrictMode: true,
  swcMinify: true,
};

// next.config.js
export default () => {
  const plugins = [withMDX];
  return plugins.reduce((acc, next) => next(acc), nextConfig);
};
