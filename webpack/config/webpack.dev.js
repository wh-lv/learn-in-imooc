const path = require("path")
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = {
    mode: 'development',
    devtool: 'source-map',
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
    plugins: [
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