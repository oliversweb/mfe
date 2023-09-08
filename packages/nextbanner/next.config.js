/** @type {import('next').NextConfig} */
const NextFederationPlugin = require('@module-federation/nextjs-mf');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const deps = require('./package.json').dependencies;

module.exports = {
    experimental: {
        appDir: false,
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
        
    //   config.plugins.push(
    //         new ModuleFederationPlugin({
    //             name: 'nextbanner',
    //             filename: 'static/chunks/remoteEntry.js',
    //             exposes: {
    //                 './NextBannerApp': './src/bootstrap.js',
    //             },
    //         }),
    //     );
        return config;
    },
};