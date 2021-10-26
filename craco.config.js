// craco.config.js
module.exports = {
  style: {
    postcss: {
      plugins: [require("tailwindcss"), require("autoprefixer")],
    },
  },
  webpack: {
    alias: {
      neetoui: "@bigbinary/neetoui/v2",
      "neeto-icons": "@bigbinary/neeto-icons",
    },
  },
};
