const path = require("path")
const { DefinePlugin } = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { merge } = require('webpack-merge')
const resolveApp = require('./paths')

const prodConfig = require('./webpack.prod')
const devConfig = require('./webpack.dev')

const commonConfig = {
    entry: "./src/index.ts",
    resolve: {
        extensions: ['.js', '.json', '.ts', '.jsx', '.vue'],

        // 别名
        alias: {
            '@': resolveApp('./src')
        }
    },
    output: {
        filename: "js/built.js",
        path: resolveApp("./dist"), // 打包输出的目录
        // 此时 [ext] 前面不用加点
        // 这样配置的话，使用 asset 模块处理的图片和字体都会在一个目录里面
        // assetModuleFilename: 'image/[name].[hash:4][ext]' 

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
                test: /\.(jsx?|ts)$/,
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
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack',
            template: './public/index.html',
        }),
        new DefinePlugin({ // 避免 public/index.html 中 BASE_URL 报错
            BASE_URL: '"./"'
        })
    ]
}

module.exports = (env) => {
    console.info('env---->>', env)
    const isProduction = env.production
    const config = isProduction ? prodConfig : devConfig
    const mergeConfig = merge(commonConfig, config)

    // 
    return mergeConfig
}

/**
 * class MyPlugin {
 *  constructor() {}
 *  apply()
 * }
 */