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
  themeConfig: {
    nav: [
      // { text: "前端", link: "前端/HTML" },
      // { text: "Album", link: "about/About" },
      // { text: "Work", link: "pages/Album/Work" },
         { text: "Earth", link: "pages/Earth/Earth" },
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
      "/前端/": [
        {
          text: "前端",
          items: [
            {
              text: "引言",
              link: "/前端/HTML",
            },
          ],
          collapsible: true,
        },
      ],
      "/后端/": [
        {
          text: "前端",
          items: [
            {
              text: "引言",
              link: "/前端/HTML",
            },
          ],
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
    outlineTitle: "In hac pagina",
  },
});
