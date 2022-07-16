/*
 * @Author: liujun 18316880540@163.com
 * @Date: 2022-06-22 14:01:40
 * @LastEditors: liujun 18316880540@163.com
 * @LastEditTime: 2022-07-16 17:49:05
 * @FilePath: \fileUpload\webpack.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    devtool: "source-map",
    // 模式
    // mode: 'development', // 开发模式 生成普通 js 文件
    mode: 'production', // 生产模式 生成 .min.js 压缩文件
    // 入口
    entry: path.join(__dirname, './src/index.js'),
    // 出口
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: path.resolve(__dirname, 'dist'),
        // filename: 'fileUpload.js', // 生成的文件名 对应 开发模式
        filename: 'fileUpload.min.js', // 生成的文件名 对应 生产模式
        libraryTarget: 'umd', // 支持 ems / commontjs / requirejs 规范
        // libraryTarget: 'amd' // 支持 requirejs 规范
        umdNamedDefine: true
    },
    module: {
        rules:[
            {test:/.vue$/, use: 'vue-loader'},
            {test:/.css$/, use: ['style-loader','css-loader']},
            {test:/.scss$/, use: ['style-loader','css-loader','sass-loader',]},
            {test:/.(jpg|png|gif|bmp|jpeg)$/, loader: 'url-loader'},
            {test:/.(ttf|eot|svg|woff|woff2)$/,use: 'url-loader'}
        ]
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    },
    plugins: [
        new VueLoaderPlugin()
    ]
}