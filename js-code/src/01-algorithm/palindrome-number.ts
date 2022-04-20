/**
 * @description 对陈数（回文数）
 */

/**
 *
 * @param max 最大值
 * @returns 1-max 之前的对称数（数组反转）
 */
export function findPalindromeNumbers1(max: number): number[] {
    const res: number[] = []
    if (max <= 0) return res

    for (let i = 1; i <= max; i++) {
        const str = i.toString()
        const arr = str.split("")
        arr.reverse()
        const str2 = arr.join("")
        if (str === str2) {
            res.push(i)
        }
    }

    return res
}

/**
 *
 * @param max 最大值
 * @returns 1-max 之前的对称数（字符串头尾比较）
 */
export function findPalindromeNumbers2(max: number): number[] {
    const res: number[] = []
    if (max <= 0) return res

    for (let i = 1; i <= max; i++) {
        const str = i.toString()
        const length = str.length

        let startIndex = 0
        let endIndex = length - 1
        let flag = true

        while (startIndex < endIndex) {
            if (str[startIndex] === str[endIndex]) {
                startIndex++
                endIndex--
            } else {
                flag = false
                break
            }
        }

        if (flag) res.push(i)
    }

    return res
}

/**
 *
 * @param max 最大值
 * @returns 1-max 之前的对称数（生成翻转数）
 */
export function findPalindromeNumbers3(max: number): number[] {
    const res: number[] = []
    if (max <= 0) return res

    for (let i = 1; i < max; i++) {
        let n = i;
        let rev = 0

        while (n > 0) {
            rev = rev * 10 + n % 10
            n = Math.floor(n / 10)
        }

        if (rev === i) res.push(i)
    }

    return res
}

// console.info(findPalindromeNumbers3(200))


console.time("findPalindromeNumbers1")
findPalindromeNumbers1(100 * 10000) // 231ms
console.timeEnd("findPalindromeNumbers1")

console.time("findPalindromeNumbers2")
findPalindromeNumbers2(100 * 10000) // 30ms
console.timeEnd("findPalindromeNumbers2")

console.time("findPalindromeNumbers3")
findPalindromeNumbers3(100 * 10000) // 28
console.timeEnd("findPalindromeNumbers3")
