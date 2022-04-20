/**
 * @description 自定义 call apply
 *
 * { x: 100, fnn() { this.x } }
 */

// @ts-ignore
Function.prototype.customCall = function(context: any, ...callArgs: any[]) {
    // call 和 apply 中如果传入的 this 为 null/undefined 时，此时 this 指向 window
    if (context == null) {
        context = globalThis // globalThis 相当于浏览器中的 window 或者nodejs中的 global
    }
    if(typeof context !== "object") {
        context = new Object(context) // 值类型，变为对象
    }

    const fnKey = Symbol() // 不会出现属性名称的覆盖
    context[fnKey] = this // this 就是当前的函数

    const res = context[fnKey](...callArgs)

    delete context[fnKey] // 清理掉 fn， 防止污染

    return res
}

// @ts-ignore
Function.prototype.customApply = function(context: any, applyArgs: any[] = []) {
    if (context == null) context = globalThis
    if (typeof context !== "object") context = new Object(context)

    const fnKey = Symbol()
    context[fnKey] = this

    const res = context[fnKey](...applyArgs)

    delete context[fnKey]

    return res
}

// function fn(this: any, a: any, b: any, c: any) {
//     console.info(this, a, b, c)
// }

// // @ts-ignore
// fn.customCall({ x: 100 }, 10, 20, 30)

// // @ts-ignore
// fn.customApply({ x: 200 }, [10, 20, 30])
