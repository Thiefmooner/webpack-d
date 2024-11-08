const HtmlWebpackPlugin = require("html-webpack-plugin")
const { Server } = require("https")
const path = require('path')
const { Generator } = require("webpack")

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
        publicPath: "./",
        filename: "[name].[hash:10].bundle.js",
        chunkFilename: "asset_[id:5].js"//单独打包import内容
    },

    resolveLoader: {
        //取个别名
        alias: {
            "replace-loader": path.resolve(__dirname, './src/loaders/replace-loader')
        }
    },
    
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.js$/,
                use: {
                    loader: 'replace-loader',
                    options: {
                        name: "野种李伟杭"//注意options参数和loader平级，在use里
                    }
                }
            },
            {
                test: /\.(jpg|svg)$/,
                type: "asset",
                parser: {
                    dataUrlCondition: {
                        //小于10kb的图片转base64，优点：减请求数量，缺点：体积变大
                        maxSize: 10 * 1024 //10kb
                    }
                },
                generator: {
                    //打包图片名称
                    filename:'static/images/[hash][ext][query]'
                }
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'test',//如果使用了下面的template，这个title不会生效了，必须要使用templateParameters更改
            filename: 'example.html',
            template: path.resolve(__dirname, './src/index.html'),
            templateParameters: {
                titleName: '示例html'//这个titleName在src/index.html用模板语法接收下
            },
        })
    ],
    //devtool:'source-map',
    
    //fixed: webpack5的devserver要加上static，感谢kris彦伯
    //不然浏览器会出现，can not get，404报错
    devServer: {
        static:{
            directory:path.join(__dirname,'src')
        },
        host:"127.0.0.1",
        port:"3000",
        open:true
    }
}