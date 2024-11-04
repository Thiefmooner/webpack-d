const HtmlWebpackPlugin = require("html-webpack-plugin")
const { Server } = require("https")
const path = require('path')

module.exports = {
    mode: 'development',
    //entry可以单入口或多入口，此entry为多入口，用对象形式，会在dist里生成两个js文件
    entry: {
        index: {
            import: './src/index.js'
        },
        vender: {
            import: './src/vender.js'
        }
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        publicPath:"./",
        filename: "[name].js",
        chunkFilename: "asset_[id].js"//单独打包import内容
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader','sass-loader']
            },

        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'test',//如果使用了下面的template，这个title不会生效了，必须要使用templateParameters更改
            filename: 'asshole.html',
            template: path.resolve(__dirname, './src/index.html'),
            templateParameters:{
                titleName:'test2'//这个titleName在src/index.html用模板语法接收下
            },
            
        })
    ],
    devtool:'source-map',
    //去除devserver有问题

}