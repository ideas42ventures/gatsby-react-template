/// <reference lib="dom" />
import * as React from "react";
import { Helmet } from "react-helmet";
import { graphql, StaticQuery } from "gatsby";

import HelloWorld from "@/components/HelloWorld";

// markup
const IndexPage: React.FC<DefaultPageProps> = ({ location, data }) => {
  const pageTitle = "Test Title";

  return (
    <main>
      <Helmet htmlAttributes={{ lang: "en" }}>
        <meta charSet="utf-8" />
        <title>{pageTitle}</title>
        <meta
          property="og:url"
          content={data.site.siteMetadata.siteUrl + location.pathname}
        />
        <meta property="og:title" content={pageTitle} />
        <meta name="twitter:title" content={pageTitle} />
      </Helmet>
      <HelloWorld />
    </main>
  );
};

export default (props: DefaultPageProps): React.ReactNode => (
  <StaticQuery
    query={graphql`
      query IndexPageQuery {
        site {
          siteMetadata {
            siteUrl
          }
        }
      }
    `}
    render={(data) => <IndexPage data={data} {...props} />}
  />
);
