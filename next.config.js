/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  images: {
    domains: [
      "cdn.myanimelist.net",
      "img1.ak.crunchyroll.com",
      "s4.anilist.co",
      "artworks.thetvdb.com",
      "media.kitsu.io",
    ],
  },
};
