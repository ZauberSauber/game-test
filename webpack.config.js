const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './src/game.ts',
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Welcome',
            template: './template/index.html',
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
    devtool: "inline-source-map",
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 8083,
        hot: true,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(ttf|eot|woff|woff2|png|ico|jpg|jpeg|gif|bg\.svg)$/i,
                use: [{
                    loader: 'file-loader',
                }],
            }
        ]
    },
    resolve: {
        extensions: ['.ts', 'tsx', '.js', 'json']
    }
};
