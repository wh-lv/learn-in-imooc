/**
 * @description 手写 bind
 */

// @ts-ignore
Function.prototype.customBind = function(context: any, ...bindArgs: any[]) {
    // context 是 bind 传入的 this
    // bindArgs 是 bind 传入的各个参数

    const self = this // 当前的函数本身

    return function (...args: any[]) {
        const newArgs = bindArgs.concat(args)
        return self.apply(context, newArgs)
    }
}

const fn = function(this: any, a: any, b: any, c: any) {
    console.info(this, a, b, c)
}

// @ts-ignore
const f = fn.customBind({ x: 100 }, 10)
f(20, 30)
