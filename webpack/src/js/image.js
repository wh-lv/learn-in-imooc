import '../css/img.css'

function packImg() {
    // 1. 创建一个容器元素
    const oEle = document.createElement('div')

    // 2. 创建 img 标签，设置 src 属性
    const oImg = document.createElement('img')
    // oImg.src = require('../img/pic1.jpg').default
    oImg.src = require('../img/pic1.jpg')
    oEle.appendChild(oImg)

    // 3. 添加背景图片
    const oBgImg = document.createElement('div')
    oBgImg.className = 'bgBox'
    oEle.appendChild(oBgImg)

    return oEle
}

document.body.appendChild(packImg())