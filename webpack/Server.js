const express = require('express')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpack = require('webpack')

const app = express()

// 获取配置文件
const config = require('./config/webpack.config')
const compiler = webpack(config)

app.use(webpackDevMiddleware(compiler))

// 开启端口上的服务
app.listen(3000, () => {
    console.info('服务运行在 3000 端口上')
})