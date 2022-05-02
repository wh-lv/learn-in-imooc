const path = require("path")
const { DefinePlugin } = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = {
    // watch: true,
    mode: 'development',
    devtool: 'source-map',
    entry: "./src/index.js",
    resolve: {
        extensions: ['.js', '.json', '.ts', '.jsx', '.vue'],

        // 别名
        alias: {
            '@': path.resolve(__dirname, '../src')
        }
    },
    output: {
        filename: "js/built.js",
        path: path.resolve(__dirname, "../dist"), // 打包输出的目录
        // 此时 [ext] 前面不用加点
        // 这样配置的话，使用 asset 模块处理的图片和字体都会在一个目录里面
        // assetModuleFilename: 'image/[name].[hash:4][ext]' 

    },
    devServer: {
        hot: true,
        static: {
            // 告诉服务器从哪里提供内容。只有在你希望提供静态文件时才需要这样做。static.publicPath 将会被用来决定应该从哪里提供 bundle，并具有优先级。
            publicPath: '/',
            directory: path.join(__dirname, 'public'),
        },
        // hotOnly: true, // 此属性 webpack 最新版本好像删除了
        port: 4000,
        open: false, // 是否自动打开浏览器
        compress: true, // 开启 gzip 压缩
        historyApiFallback: true, // 任意 404 响应都可能需要被替代为 index.html, treu 开启

        proxy: {
            '/api': {
                target: 'https://api.github.com',
                pathRewrite: {
                    '/api': ''
                },
                changeOrigin: true
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            esModule: false,
                            importLoaders: 1 // @import模块在使用css-loader前，是否用之前的loaders处理（1：使用前一个）
                        }
                    },
                    // {
                    //     loader: 'postcss-loader',
                    //     options: {
                    //         postcssOptions: {
                    //             plugins: [
                    //                 // require('autoprefixer'),
                    //                 // require('postcss-preset-env')
                    //                 'postcss-preset-env'
                    //             ]
                    //         }
                    //     }
                    // }
                    'postcss-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            esModule: false,
                            importLoaders: 1 // @import模块在使用css-loader前，是否用之前的loaders处理（1：使用前一个）
                        }
                    },
                    'postcss-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.(png|jpg|jpeg|gif|webp)$/,
                // type: 'asset/resource',
                // type: 'asset/inline',
                // generator: {
                //     filename: 'img/[name].[hash:4][ext]'
                // }
                type: 'asset',
                generator: {
                    filename: 'img/[name].[hash:4][ext]'
                },
                parser: {
                    dataUrlCondition: {
                        maxSize: 30 * 1024
                    }
                }
                // use: [
                //     {
                //         loader: 'url-loader',
                //         options: {
                //             esModule: false,
                //             name: 'img/[name].[hash:10].[ext]',
                //             // outputPath: 'img' // 输出目录 也可在 name 属性中直接拼接
                //             limit: 25 * 1024
                //         }
                //     }
                // ]
            },
            {
                test: /\.(ttf|woff2?)$/,
                type: 'asset/resource', // 字体文件做简单的拷贝
                generator: {
                    filename: 'font/[name].[hash:3][ext]'
                }
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/, // 排除 node_module这个包
                use: ['babel-loader'] // 此时使用 babel.config.js 配置的方式
                // use: [
                //     {
                //         loader: 'babel-loader',
                //         options: {
                //             // plugins: [
                //             //     '@babel/plugin-transform-arrow-functions',
                //             //     '@babel/plugin-transform-block-scoping'
                //             // ]
                //             presets: [
                //                 '@babel/preset-env'
                //             ]
                //         }
                //     }
                // ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Webpack',
            template: './public/index.html',
        }),
        new DefinePlugin({ // 避免 public/index.html 中 BASE_URL 报错
            BASE_URL: '"./"'
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: 'public',
                    globOptions: {
                        ignore: ['**/index.html']
                    }
                }
            ]
        }),
        new ReactRefreshWebpackPlugin()
    ]
}

/**
 * class MyPlugin {
 *  constructor() {}
 *  apply()
 * }
 */