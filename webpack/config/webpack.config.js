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
                    'css-loader',
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
                    'css-loader',
                    'postcss-loader',
                    'less-loader'
                ]
            }
        ]
    }
}