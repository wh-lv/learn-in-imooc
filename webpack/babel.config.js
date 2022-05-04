module.exports = {
    // presets: ['@babel/preset-env']
    presets: [
        [
            '@babel/preset-env',
            {
                // 默认为 false ：不对当前JS处理做 polyfill 填充
                // usage 按需填充 依据用户源代码当中所使用到的新语法进行填充
                // entry 根据配置兼容的浏览器版本填充
                useBuiltIns: 'usage',
                corejs: '3' // useBuiltIne 设置为 usage 时，core-js默认使用的是 2.x 版本
            }
        ],
        [
            '@babel/preset-react'
        ],
        [
            '@babel/preset-typescript'
        ]
    ],
    plugins: [
        ['react-refresh/babel']
    ]
}