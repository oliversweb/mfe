/** @type {import('next').NextConfig} */
const NextFederationPlugin = require('@module-federation/nextjs-mf');
const deps = require('./package.json').dependencies;

module.exports = {
    experimental: {
        serverActions: false,
    },
    webpack(config, options) {
        config.plugins.push(
            new NextFederationPlugin({
                name: 'nextbanner',
                filename: 'static/chunks/remoteEntry.js',
                exposes: {
                    './NextBannerApp': './src/pages',
                },
                shared: deps
            })
        );

        return config;
    },
};