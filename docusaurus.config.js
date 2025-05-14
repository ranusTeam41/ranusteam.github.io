// @ts-check
import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "KinovRise Activator (KRA)",
  tagline: "Yooo, this is our website!",
  favicon: "img/favicon.ico",

  url: "https://ranusteam41.github.io",
  baseUrl: "/ranusteam.github.io/", // Đảm bảo đúng với repo GitHub Pages

  organizationName: "ranusTeam41",
  projectName: "ranusteam.github.io",

  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/ranusTeam41/ranusteam.github.io/edit/main/",
        },
        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/ranusTeam41/ranusteam.github.io/edit/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/ranusTeam41.css"),
        },
      }),
    ],
  ],

  themeConfig: {
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      logo: { alt: "RanusTeam Logo", src: "/img/logo.svg" },
      items: [
        { to: "/docs", label: "Documentation", position: "left" },
        { to: "/faq", label: "FAQ", position: "left" },
        { to: "/troubleshoot", label: "Troubleshoot", position: "left" },
        { to: "/download", label: "Download", position: "left" },
        { to: "/blog", label: "Blog", position: "left" },
        { to: "/contact", label: "Contact Us", position: "left" },
        { href: "https://github.com/ranusTeam41", label: "GitHub", position: "right" },
        { href: "https://discord.com/invite/ranusteam", label: "Discord", position: "right" },
      ],
    },
    footer: {
      style: "dark",
      links: [
        { title: "Documentation", items: [{ label: "Tutorial", to: "/docs/intro" }] },
        { title: "Community", items: [{ label: "Discord", href: "https://discordapp.com/invite/docusaurus" }, { label: "GitHub", href: "https://github.com/ranusTeam41" }] },
      ],
      copyright: `© ${new Date().getFullYear()} RanusTeam41. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;