import { defineConfig } from "vitepress";

export default defineConfig({
  // These are app level configs.

  // CDN Tailwindcss
  // head: [
  //   ['link', { rel: 'stylesheet', href:'https://unpkg.com/tailwindcss@2.0.4/dist/tailwind.min.css' }]],
  title: "",
  titleTemplate: "Ekar",
  base: "/",
  lang: "en-US",
  description: "",
  lastUpdated: true,
  themeConfig: {
    nav: [
      { text: "Design", link: "/Design/Design" },
      { text: "Front End", link: "/FrontEnd/FrontEnd" },
    ],
    sidebar: {
      "/FrontEnd/Git/": [
        {
          text: "essentials",
          items: [
            {
              text: "package.json 指北",
              link: "FrontEnd/Git/Git.html",
            },
            {
              text: "package.json 指北",
              link: "FrontEnd/Git/Git.html",
            },
            {
              text: "package.json 指北",
              link: "FrontEnd/Git/Git.html",
            },
          ],
          collapsible: true,
        },
      ],
      "/Design/Earth/": [
        {
          text: "Basis",
          items: [
            {
              text: "引言",
              link: "/Earth/",
            },
          ],
          collapsible: true,
        },
      ],
      "/FrontEnd/package-json/": [
        {
          text: "Basis",
          items: [
            {
              text: "some",
              link: "/Earth/",
            },
          ],
          collapsible: true,
        },
      ],
      "/FrontEnd/website/": [
        {
          text: "Basis",
          items: [
            {
              text: "some",
              link: "/Earth/",
            },
          ],
          collapsible: true,
        },
      ],
    },
    siteTitle: "Ekar",
    // siteTitle:false,
    // logo:'/Ekar.svg'
    socialLinks: [
      { icon: "github", link: "https://github.com/Ekarmore" },
    ],
    // outlineTitle: "In hac pagina",
  },
});
