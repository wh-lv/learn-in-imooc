/**
 * @description 获取详细数据类型
 */

export function getType(param: any): string {
    const originType = Object.prototype.toString.call(param)
    const spaceIndex = originType.indexOf(" ")
    const type = originType.slice(spaceIndex + 1, -1)
    return type.toLowerCase()
}

console.info(getType(null))
console.info(getType(undefined))
console.info(getType(100))
console.info(getType('100'))
console.info(getType(/\.$/))
console.info(getType({}))
console.info(getType([]))
console.info(getType(() => {}))
console.info(getType(new Map()))
console.info(getType(new Set()))
console.info(getType(new WeakMap()))
console.info(getType(new WeakSet()))
