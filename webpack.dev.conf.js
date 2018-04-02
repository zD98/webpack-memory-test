require('memwatch-next').on('leak', info => {
    console.log('Memory leak \n', info)
    require('heapdump').writeSnapshot(Date.now() + '.heapsnapshot')
})
setInterval(() => {
    require('heapdump').writeSnapshot(Date.now() + '.heapsnapshot')
}, 1000 * 60 * 10)
;('use strict')
const webpack = require('webpack')
const merge = require('webpack-merge')
const path = require('path')
const baseWebpackConfig = require('./webpack.base.conf')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack4-plugin')

const devWebpackConfig = merge(baseWebpackConfig, {
    mode: 'development',
    output: {},
    module: {},
    devtool: 'cheap-module-eval-source-map',
    // these devServer options should be customized in /config/index.js
    devServer: {
        clientLogLevel: 'error',
        inline: true,
        hot: false,
        compress: true,
        host: 'localhost',
        port: 3000,
        quiet: true, // necessary for FriendlyErrorsPlugin
        allowedHosts: ['huayang.qq.com', 's.url.cn']
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
            inject: true
        }),

        new FriendlyErrorsPlugin({
            compilationSuccessInfo: {
                messages: [`Your application is running here: http://localhost:3000`]
            }
        })
    ]
})

module.exports = devWebpackConfig
