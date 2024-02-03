/** @type {import('next').NextConfig} */

const path = require("path");

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "/features/Tetris/assets/scss/")],
  },
};

module.exports = nextConfig;