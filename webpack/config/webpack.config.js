const path = require("path")

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "built.js",
        path: path.resolve(__dirname, "../dist")
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
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            esModule: false,
                            name: 'img/[name].[hash:10].[ext]',
                            // outputPath: 'img' // 输出目录 也可在 name 属性中直接拼接
                        }
                    }
                ]
            }
        ]
    }
}