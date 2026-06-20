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
};

module.exports = nextConfig;