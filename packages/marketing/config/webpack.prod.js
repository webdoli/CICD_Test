const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const packageJson = require('../package.json');
const commonConfig = require('./webpack.common');

const marketDomain = 'https://marketing-react-prj-f9edc.web.app/';
//const path = require('path');
//const domain = process.env.PRODUCTION_DOMAIN;

const prodConfig = {
    mode: 'production',
    //entry: './src/index.js',
    plugins: [
        new ModuleFederationPlugin({
            name: 'marketing',
            filename: 'remoteEntry.js',
            exposes: {
                './MarketingApp': './src/bootstrap'
            },
            shared: packageJson.dependencies
        })
    ],
    output: {
        //path: path.resolve('dist' ),
        filename: '[name].[contenthash].js',
        publicPath: `${marketDomain}`
    }
}

module.exports = merge( commonConfig, prodConfig )