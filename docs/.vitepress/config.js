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
      { text: "Design", link: "pages/Design/Design" },
      { text: "Front End", link: "pages/FrontEnd/FrontEnd" },
    ],
    sidebar: {
      "pages/FrontEnd/Git/": [
        {
          text: "Basis",
          items: [
            {
              text: "package.json 指北",
              link: "pages/FrontEnd/package-json/package-json.html",
            },
          ],
          collapsible: true,
        },
      ],
      "pages/Design/Earth/": [
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
      "pages/FrontEnd/package-json/": [
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
      "pages/FrontEnd/website/": [
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
