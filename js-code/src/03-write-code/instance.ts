/**
 * @description 手写 instanceof
*/

export function myInstanceof(instance: any, origin: any): boolean {
    if (instance == null) return false // null undefined

    const type = typeof instance
    if (type !== 'object' && type !== 'function') {
        // 所有的值类型 instanceof 都会返回 false
        return false
    }

    let tempInstance = instance // 防止修改 instance
    while (tempInstance) {
        if (tempInstance.__proto__ === origin.prototype) {
            return true
        }

        tempInstance = tempInstance.__proto__
    }

    return false
}
