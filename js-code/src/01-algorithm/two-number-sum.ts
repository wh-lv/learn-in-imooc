/**
 * @description 两数之和
 */

export function findTwoNumbers1(arr: number[], n: number): number[] {
    const res: number[] = []

    const length = arr.length
    if (length === 0) return res

    for (let i = 0; i< arr.length - 1; i++) {
        const n1 = arr[i]

        let flag = false
        for (let j = i + 1; j < length - 1; j++) {
            const n2 = arr[j]

            if (n1 + n2 === n) {
                res.push(n1)
                res.push(n2)
                flag = true
                break
            }
        }

        if (flag) break
    }

    return res
}

export function findTwoNumbers2(arr: number[], n: number): number[] {
    const res: number[] = []

    const length = arr.length
    if (length === 0) return res

    let startIndex = 0
    let endIndex = length - 1

    while (startIndex < endIndex) {
        const startValue = arr[startIndex]
        const endValue = arr[endIndex]
        const sum = startValue + endValue

        if (sum > n) {
            endIndex--
        } else if (sum < n) {
            startIndex++
        } else {
            res.push(startValue)
            res.push(endValue)
            break
        }
    }

    return res
}



const arr = [1, 2, 4, 7, 11, 15]

console.time("findTwoNumbers1")
for (let i = 0; i < 100 * 10000; i++) {
    findTwoNumbers1(arr, 15)
}
console.timeEnd("findTwoNumbers1")

console.time("findTwoNumbers2")
for (let i = 0; i < 100 * 10000; i++) {
    findTwoNumbers2(arr, 15)
}
console.timeEnd("findTwoNumbers2")
