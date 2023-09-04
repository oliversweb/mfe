const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const devConfig = {
    mode: 'development',    
    output: {
        publicPath: 'http://localhost:8080/',
    },
    devServer: {
        port: 8080,
        historyApiFallback: {
            index: '/index.html',
        }
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                marketing: 'marketing@http://localhost:8081/remoteEntry.js',
                auth: 'auth@http://localhost:8082/remoteEntry.js',
                dynamicfooter: 'dynamicfooter@http://localhost:8085/remoteEntry.js',
                banner: 'banner@http://localhost:8086/remoteEntry.js',
                staticfooter: 'staticfooter@http://localhost:8087/remoteEntry.js',                
            },
            shared: packageJson.dependencies,
        })        
    ],
};

module.exports = merge(commonConfig, devConfig);
