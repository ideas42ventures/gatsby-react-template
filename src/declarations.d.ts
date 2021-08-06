// This file is used to hold ambient type declarations, as well as type shims
// for npm module without type declarations, and assets files.

// For example, to shim modules without declarations, use:
// declare module "package-without-declarations"

// And to shim assets, use (one file extension per `declare`):
// declare module "*.png"

interface DefaultPageProps {
  location: {
    pathname: string;
    search?: string;
  };
  data: {
    site: {
      siteMetadata: {
        siteUrl: string;
      };
    };
  };
}

interface ChildImageSharp {
  childImageSharp: {
    gatsbyImageData: {
      layout: Layout;
      placeholder: { fallback: string };
      images: {
        fallback: { src: string; srcSet: string; sizes: string };
        sources: { srcSet: string; type: string; sizes: string }[];
      };
      width: number;
      height: number;
    };
  };
  name: string;
}
