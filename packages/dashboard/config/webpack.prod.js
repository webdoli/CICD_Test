const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const packageJson = require('../package.json');
const commonConfig = require('./webpack.common');

const dashboardDomain = 'https://dashboard-react-prj-f9edc.web.app/';

//const path = require('path');
//const domain = process.env.PRODUCTION_DOMAIN;

const prodConfig = {
    mode: 'production',
    //entry: './src/index.js',
    plugins: [
        new ModuleFederationPlugin({
            name: 'dashboard',
            filename: 'remoteEntry.js',
            exposes: {
                './DashboardApp': './src/bootstrap'
            },
            shared: packageJson.dependencies
        })
    ],
    output: {
        //path: path.resolve('dist' ),
        filename: '[name].[contenthash].js',
        publicPath: `${ dashboardDomain }`
        
    }
}

module.exports = merge( commonConfig, prodConfig )