module.exports = {
    plugins: [
        require('postcss-preset-env') // postcss-preset-env 是插件集合，里面集合的 自动添加前缀和颜色处理的（转rgba）等插件
        // require('autoprefixer')
    ]
}