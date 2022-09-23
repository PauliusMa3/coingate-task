const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	compiler: {
		styledComponents: true
	},
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/i,
			issuer: /\.[jt]sx?$/,
			use: ['@svgr/webpack']
		});

		return config;
	},
	async rewrites() {
		return [
			{
				source: '/:path*',
				destination: 'https://api.coingate.com/api/v2/gift-cards/:path*'
			}
		];
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'coingate-production.s3.amazonaws.com',
				pathname: '/uploads/gift_card_logo/**'
			}
		],
		domains: ['coingate-production.s3.amazonaws.com', 'assets.tillo.io']
	}
};

module.exports = nextConfig;
