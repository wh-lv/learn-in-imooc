/**
 * @description curry
 */

export function curry(fn: Function) {
    // 获取 fn 参数长度
    const fnArgaLength = fn.length
    let args: any[] = []

    // ts 中，独立的幻术，this 需要声明类型
    function calc(this: any, ...newArgs: any[]) {
        // 积累参数
        args = [
            ...args,
            ...newArgs
        ]

        if (args.length < fnArgaLength) {
            // 参数不够，返回函数
            return calc
        } else {
            // 参数够了，返回执行结果
            return fn.apply(this, args.slice(0, fnArgaLength))
        }
    }

    return calc
}

// function add(a: number, b: number, c: number): number {
//     return a + b + c
// }
// // add(10, 20, 30)

// const curryAdd = curry(add)
// const res = curryAdd(10)(20)(30)
// console.info(res)

