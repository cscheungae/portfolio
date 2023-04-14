import type { GatsbyConfig } from 'gatsby';
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Billy Cheung | Frontend Engineer`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        accessToken: process.env.contentful_accessToken,
        spaceId: process.env.contentful_spaceId,
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sass',
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [
          `https://fonts.googleapis.com`,
          `https://fonts.gstatic.com`,
        ],
        web: [
          {
            name: `Roboto`,
            file: `https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap`,
          },
          {
            name: `Oswald`,
            file: `https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap`,
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-favicons',
      options: {
        logo: './src/images/icon.png',
        appName: 'Billy Cheung',
        background: '#fff',
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          yandex: false,
          windows: false,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Billy Cheung',
        short_name: 'billyCheung',
        start_url: '/',
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: 'standalone',
        icon: 'src/images/coding.svg', // This path is relative to the root of the site.
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        crossOrigin: `use-credentials`,
      },
    },
  ],
};

export default config;
