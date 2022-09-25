import { defineConfig } from "vitepress";

export default defineConfig({
  // These are app level configs.

  // 添加Tailwindcss
  // head: [
  //   ['link', { rel: 'stylesheet', href:'https://unpkg.com/tailwindcss@2.0.4/dist/tailwind.min.css' }]],
  title: "",
  titleTemplate: "Ekar",
  base: "/",
  lang: "en-US",
  description: "Vite & Vue powered static site generator.",
  lastUpdated:true,
  themeConfig: {
    nav: [
      // { text: "前端", link: "前端/HTML" },
      // { text: "Album", link: "about/About" },  
      { text: "Design", link:"pages/Design/Design" },
      { text: "Front End", link:"pages/FrontEnd/FrontEnd" },
        //  { text: "Love", link: "pages/aboutLove/Love" },
      // {
      //   text: '菜单',
      //   items: [
      //     { text: 'test', link: 'test' },
      //     { text: 'Item B', link: '/item-2' },
      //     { text: 'Item C', link: '/item-3' }
      //   ]
      // }
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
    },
    siteTitle: "Ekar",
    // siteTitle:false,
    // logo:'/Ekar.svg'
    socialLinks: [
      { icon: "github", link: "https://github.com/Ekarmore" },
      // { icon: 'instagram', link: 'https://github.com/Ekarmore' },
    ],
    // outlineTitle: "In hac pagina",
  },
});
