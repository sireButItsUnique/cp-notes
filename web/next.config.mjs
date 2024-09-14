import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
	// Configure pageExtensions to include md and mdx
	pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
	// Optionally, add any other Next.js config below
	reactStrictMode: true,
};

const withMDX = createMDX({
	// Add markdown plugins here, as desired
})

// Merge MDX config with Next.js config
export default withMDX(nextConfig)