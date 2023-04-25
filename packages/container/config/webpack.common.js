const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    module: {
        rules: [
            {
                test: /\.(png|j?g|svg|gif)?$/,
                use: 'file-loader?name=./images/[name].[ext]',
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react','@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-runtime']
                    }
                }
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader', 'postcss-loader'],
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
}