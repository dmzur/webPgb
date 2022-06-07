const { resolve } = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackBundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports ={
    entry: './js/index.js',
    // mode: 'development',
    output:{
        filename: 'main.[contenthash].js',
        path: resolve(__dirname, 'build')
    },
    module:{
        rules: [
            {
                test: /\.(png|jpeg|gif|mp3)$/i,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]'
                }
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: resolve(__dirname, 'index.html')
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
        new WebpackBundleAnalyzer()
    ],
    devServer:{
        watchFiles: ["./*"],
        port: '9090',
        open: true,
        hot: true,
    },
}