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
   * url-loader：图片转为 base64 
   * 
   * url-loader 内部可以调用 file-loader 设置 limit
   */