/** @type {import('next').NextConfig} */
const nextTranslate = require('next-translate');
const nextConfig = {
	reactStrictMode: true,
	...nextTranslate(),
};
module.exports = nextTranslate();
module.exports = nextConfig;
