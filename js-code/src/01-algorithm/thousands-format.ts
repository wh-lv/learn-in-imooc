/**
 * @description 千分位格式化
 */

/**
 * 数字千分位格式化（数组分析）
 * @param n
 */
export function format1(n: number): string {
    n = Math.floor(n) // 只考虑整数

    const s = n.toString()
    const arr = s.split("").reverse()

    return arr.reduce((prev, cur, index) => {
        if (index % 3 === 0) {
            if (index === 0) {
                return cur
            } else {
                return cur + "," + prev
            }
        } else {
            return cur + prev
        }
    }, "")
}

export function format2(n: number): string {
    n = Math.floor(n) // 只考虑整数

    let res = ""
    const s = n.toString()
    const length = s.length

    for (let i = length - 1; i >= 0; i--) {
        const index = length - i
        if (index % 3 === 0) {
            if (i === 0) {
                res = s[i] + res
            } else {
                res = "," + s[i] + res
            }
        } else {
            res = s[i] + res
        }
    }

    return res
}

const n = 10023567003
// console.info(format1(n))
// console.info(format2(n))

console.time("formnat1")
for (let i = 0; i < 100 * 10000; i++) {
    format1(n)
}
console.timeEnd("formnat1")

console.time("formnat2")
for (let i = 0; i < 100 * 10000; i++) {
    format2(n)
}
console.timeEnd("formnat2")
