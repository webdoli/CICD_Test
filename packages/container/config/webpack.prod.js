const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');
const path = require('path');

//const marketDomain = `marketing-${process.env.PRODUCTION_DOMAIN}`;
const containerDomain = 'https://react-prj-f9edc.web.app';
const marketingDomain = 'https://marketing-react-prj-f9edc.web.app';
const authDomain = 'https://auth-react-prj-f9edc.web.app';
const dashboardDomain = 'https://dashboard-react-prj-f9edc.web.app';

const prodConfig = {

    mode: 'production',
    entry: ['./src/index.js', './public/images/cghubLogo.jpg'],
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve('./dist'),
        publicPath: '/'
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                marketing: `marketing@${marketingDomain}/remoteEntry.js`,
                auth: `auth@${authDomain}/remoteEntry.js`,
                dashboard: `dashboard@${dashboardDomain}/remoteEntry.js`
            },
            shared: packageJson.dependencies,
        }),
    ]

}

module.exports = merge( commonConfig, prodConfig );