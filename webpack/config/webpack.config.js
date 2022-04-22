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
                    'css-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            }
        ]
    }
}