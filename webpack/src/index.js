import { sum, square } from './js/utils.js'
const getInfo = require("./js/api.js")

import "./js/login"

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