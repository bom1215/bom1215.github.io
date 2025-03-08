import { defineConfig } from "vitepress";

const replacePlaceholders = (obj, lang) => {
  if (Array.isArray(obj)) {
    return obj.map((item) => replacePlaceholders(item, lang));
  } else if (typeof obj === "object") {
    return Object.fromEntries(
      Object.entries(obj).map(([key, value]) => [
        key.replace("{lang}", lang), // 키에 {lang}이 있으면 변경
        replacePlaceholders(value, lang),
      ])
    );
  } else if (typeof obj === "string") {
    return obj.replace("{lang}", lang); // 문자열 내부 {lang} 변경
  }
  return obj;
};

// 공통 themeConfig 설정
const sharedThemeConfig = {
  nav: [
    { text: "Home", link: "/{lang}" },
    { text: "About", link: "{lang}/about/me" },
    { text: "Post", link: "{lang}/posts/1/content" },
    { text: "Portfolio", link: "{lang}/portfolio/woorinara/content" },
  ],
  sidebar: {
    "/{lang}/about/": [{ text: "About" }],
    "/{lang}/portfolio/": [
      {
        text: "Visa assistant chatbot",
        items: [{ text: "example", link: "{lang}/portfolio/woorinara" }],
      },
    ],
    "/{lang}/posts/": [
      {
        text: "Deep Learning",
        items: [
          { text: "Numerical differentiation", link: "{lang}/posts/1/content" },
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
    formatOptions: { dateStyle: "full", timeStyle: "medium" },
  },
  footer: {
    message: "Released under the MIT License.",
    copyright: "Copyright © 2025-Present Junbeom Lee",
  },
  search: { provider: "local" },
};

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "eng",
  title: "Junbeom Lee",
  description: "hello",
  lastUpdated: true,
  locales: {
    root: {
      label: "English",
      lang: "en",
      link: "/en/",
      themeConfig: replacePlaceholders(sharedThemeConfig, "en"),
    },
    kr: {
      label: "Korean",
      lang: "kr",
      link: "/kr/",
      themeConfig: replacePlaceholders(sharedThemeConfig, "kr"),
    },
  },
  markdown: {
    math: true,
  },
});
