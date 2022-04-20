/**
 * @description 深拷贝 - 只考虑了简单的数组、对象
 */

function cloneDeep1(obj: any) {
    if (typeof obj !== "object" || obj == null) return obj

    let result: any

    if (obj instanceof Array) {
        result = []
    } else {
        result = {}
    }

    for (const key in obj) {
        // hasOwnProperty 这个方法会查找一个对象是否有某个属性，但是不会去查找它的原型链。
        if (obj.hasOwnProperty(key)) {
            result[key] = cloneDeep1(obj[key]) // 递归调用
        }
    }

    return result
}

/**
 *
 * @param obj obj
 * @param map weakmap 为了避免循环引用
 */
export function cloneDeep(obj: any, map = new WeakMap()): any {
    if (typeof obj !== "object" || obj == null) return obj

    // 避免循环应用
    const objFromMap = map.get(obj)
    if (objFromMap) return objFromMap

    let target: any = {}
    map.set(obj, target)

    // Map
    if (obj instanceof Map) {
        target = new Map()
        obj.forEach((v, k) => {
            const v1 = cloneDeep(v, map)
            const k1 = cloneDeep(k, map)
            target.set(k1, v1)
        })
    }

    // Set
    if (obj instanceof Set) {
        target = new Set()
        obj.forEach(v => {
            const v1 = cloneDeep(v, map)
            target.add(v1)
        })
    }

    // Array
    if (obj instanceof Array) {
        target = obj.map(item => cloneDeep(item, map))
    }

    // Object
    for (const key in obj) {
        const val = obj[key]
        const val1 = cloneDeep(val, map)
        target[key] = val1
    }

    return target
}


// const a: any = {
//     set: new Set([10, 20, 30]),
//     map: new Map([["x", 10], ["y", 20]]),
//     info: {
//         city: "北京"
//     },
//     fn: () => {
//         console.info("hello world")
//     }
// }
// a.self = a
// const a2 = cloneDeep(a)
// a2.fn()
// console.info(a2)
