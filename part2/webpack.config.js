const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

// clean插件
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    entry: "./src/index.ts",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        // 告诉webpack不使用箭头函数
        environment: {
            // webpack打包之后不出现箭头函数
            arrowFunction: false,
            // webpack打包之后不出现 const
            const: false
        },
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: [
                                [
                                    // 指定环境插件
                                    "@babel/preset-env",
                                    {
                                        // 指定 core-js 的版本
                                        corejs: {
                                            version: 3
                                        },
                                        // 使用 corejs 的方式 “usage” 表示按需加载
                                        useBuiltIns: "usage",
                                        // 要兼容的目标浏览器
                                        targets: {
                                            "chrome": "58",
                                            "ie": "10"
                                        }
                                    }
                                ]
                            ]
                        }
                    },
                    "ts-loader"
                ],
                // 要排除的文件
                exclude: /node-modules/
            },
            {
                test: /\.less$/,
                use: [
                    "style-loader",
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        "postcss-preset-env", 
                                        {
                                            browsers: "last 2 versions"
                                        }
                                    ]
                                ]
                            }
                        }
                    },
                    "less-loader"
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    // 用来设置引用模块
    resolve: {
        extensions: ['.ts', '.js']
    },
    mode: "development"
}