**webppack运行精=命令**

```nodejs

// npm webpack ... 运行本地安装的版本，后面加上 --watch 可在文件改动之后自动触发打包，也可在 webpack.config.js 中添加 watch: true 开启
webpack --entry ./src/index.js --output-path ./dist --config webpack.config.js --watch



```

#### css-loader 使用方式
行内 import "css-loader!../css/login.css"
webpack中配置

#### 处理图片
webpack 5.0 以前使用 url-loader(url-loader依赖于file-laoder)
file-loader主要是将资源拷贝至指定目录
url-loader主要是将资源转为 base64 uri，可在配置中通过设置 limit，来将 limit 限制内的图片转为 base64，大于limit的拷贝至指定目录

webpack 5.0 之后内置了 asset 模块处理图片和字体文件
```js

// 
rules: [
    {
        test: /\.(png|jpg|jpeg|gif|webp)$/,

        // 单独设置 asset/resource 所有图片拷贝至指定目录
        // type: 'asset/resource',
        // generator: {
        //     filename: 'img/[name].[hash:4][ext]'
        // }

        // type: 'asset/inline', // 单独设置 asset/line 所有图片都会转成 base64

        // 直接设置为 asset，通过配置优化处理
        type: 'asset',
        generator: {
            filename: 'img/[name].[hash:4][ext]'
        },
        parser: {
            dataUrlCondition: {
                maxSize: 30 * 1024
            }
        }
    }
]

```