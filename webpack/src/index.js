import { sum, square } from './js/utils.js'
const getInfo = require("./js/api.js")

import "./js/login"

import "./js/image"

console.info(sum(10, 20))
console.info(square(10))
console.info(getInfo())

/**
 * 1.工程化
 * 2.兼容性：CSS、JS
 * 3.如何实现兼容
 * 4.到底要兼容哪些平台
 *  caniuse.com
 * 
 * >1% // 市场占有率大于 1%
 * default
 * dead
 * last 2 version 浏览器最新的两个版本
 * 
 * 可以写到 package.json 中
 * "browserslist": [
    ">1%",
    "last 2 version",
    "not dead"
  ]

  或者新建一个 .browserslistrc 文件
 */

  /**
   * 1 posecss 是什么：javascript 转换样式的工具（帮助我们使用javascript转换css样式）
   * poscess工作流程：通过 browserlist 告诉浏览器平台
   * 添加前缀的话使用 autoprefixer
   */
  /**
   * postcss-preset-env
   * 
   * 预设 -- 插件集合
   */

  /**
   * 打包图片
   *  - img src
   *    + 使用 require 导入图片，如果不配置 esModule: false，则需使用 .default 导出
   *    + 也可以在配置中设置 esModule: false
   *    + 采用 import xxx from '图片资源'，此时也可以直接使用 xxx
   *  - background  url
   * 
   * 注意：
   *  css-loader 看到 url（background-image） 之后会自动把它换成 require（require返回的是es Module） 语法
   */
  /**
   * 设置图片名称与输出
   * [ext]：扩展名
   * [name]：文件名
   * [hash]：
   * [contentHash]：
   * [hash:<length>]
   * [path]：
   */

  /**
   * url-loader 处理图片
   * 
   */

  /**
   * file-loader：将资源拷贝至指定的目录
   * url-loader：图片转为 base64 uri
   * 
   * url-loader 内部可以调用 file-loader 设置 limit
   */



  /**
   * webpack 5.0 之后可以使用 asset 模块（webpack 5.0 内置）
   * asset处理图片
   * 01 asset/resource -> 相当于 file-loader，可以把目标资源拷贝至指定目录
   * 02 asset/inline -> url-loader
   * 03 asset/source -> raw-laoder
   * 04 assest 
   */

  /**
   * asset 处理图标字体
   */
  import '../src/js/Font'

  /**
   * 01 loader：对特定的类型进行转换
   * 02 plugin：做更多事情，
   */

  /**
   * babel
   * JSX TS ES6+ -> 转换为浏览器平台能够直接使用
   * 处理 JS 兼容
   * 
   * @babel/plugin-transform-arrow-functions
   * @babel/plugin-transform-block-scoping
   * 
   * 
   * @babel/preset-env 预设，插件集合
   * 
   * babel-loader 相关配置文件
   * babel.config.js(json cjs mjs)
   * babelrc.json(js)
   */
  const title = '前端'
  const foo = () => {
    console.info(title)
  }

  foo()


  /**
   * polyfill：
   * @babel/preset-env 预设能转换的语法有限（const、let、箭头函数等），generator生成器、Symblo、promise无法转化
   * webpack 5.0 之前 polyfill默认引入，但是会造成打包之后包体积过大的问题，可设置按需配置
   * 
   * @babel/polyfill（此包体积较大，babel7之后可以使用：core-js regenerator-runtime）
   * 
   */
  const p1 = new Promise((resolve, reject) => {
    console.info(111)
  })
  console.info(p1)


  /**
   * copy-webpack-plugin
   * 拷贝资源
   */