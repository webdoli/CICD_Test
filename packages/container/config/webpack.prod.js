const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const marketDomain = `marketing-${process.env.PRODUCTION_DOMAIN}`;

console.log('도메인: ' + marketDomain );

const prodConfig = {

    mode: 'production',
    output: {
        filename: '[name].[contenthash].js',
        publicPath: '/'
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                marketing: `marketing@${marketDomain}/remoteEntry.js`
            },
            shared: packageJson.dependencies,
        }),
    ]

}

module.exports = merge( commonConfig, prodConfig );