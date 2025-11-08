/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  transpilePackages: [
    "uploadthing", 
    "@uploadthing/react", 
    "@uploadthing/shared", 
    "@uploadthing/mime-types" 
  ],
  turbopack: {
    resolveAlias: {
      '@uploadthing/react/native': '@uploadthing/react',
    },
    resolveExtensions: ['.ts', '.tsx', '.js', '.jsx', '.mjs', '.cjs'],
  },
};

export default nextConfig;