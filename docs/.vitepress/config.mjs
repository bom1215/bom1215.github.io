import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "eng",
  title: "Junbeom Lee",
  description: "hello",
  lastUpdated: true,
  markdown: {
    math: true,
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "About", link: "about/me" },
      { text: "Post", link: "posts/1/content" },
      { text: "Portfolio", link: "portfolio/woorinara" },
    ],

    sidebar: {
      "/about/": [
        {
          text: "About",
          // items: [
          //   {
          //     text: "example",
          //     link: "portfolio/woorinara",
          //   },
          // ],
        },
      ],
      "/portfolio/": [
        {
          text: "Visa assistant chatbot",
          items: [
            {
              text: "example",
              link: "portfolio/woorinara",
            },
          ],
        },
      ],
      "/posts/": [
        {
          text: "Deep Learning",
          items: [
            {
              text: "Numerical differentiation",
              link: "posts/1/content",
            },
          ],
        },
      ],
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/bom1215/" },
      { icon: "linkedin", link: "https://www.linkedin.com/in/tbeom15/" },
    ],
    lastUpdated: {
      text: "Last Updated",
      formatOptions: {
        dateStyle: "full",
        timeStyle: "medium",
      },
    },
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2025-Present Junbeom Lee",
    },
    search: {
      provider: "local",
    },
    // editLink: {
    //   pattern: "https://github.com/vuejs/vitepress/edit/main/docs/:path",
    // },
  },
});
