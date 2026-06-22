/** @type {import('next').NextConfig} */
const nextConfig = {
  // Добавляем настройки для Turbopack, чтобы он понимал SVG как компоненты
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },
  images: {
    domains: ['cinemaguide.skillbox.cc'],
  },
};

module.exports = nextConfig;