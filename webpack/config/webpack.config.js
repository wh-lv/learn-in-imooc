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
                            importLoaders: 1 // @import模块在使用css-loader前，是否用之前的loaders处理（1：使用前一个）
                        }
                    },
                    'postcss-loader',
                    'less-loader'
                ]
            }
        ]
    }
}