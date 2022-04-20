/**
 * @description 快速排序
 */

/**
 *  快速排序（使用 splice）
 * @param arr number arr
 * @returns number arr
 */
export function quickSort1(arr: number[]): number[] {
    const length = arr.length
    if (length <= 1) return arr

    const midIndex = Math.floor(length / 2)
    const midValue = arr.splice(midIndex, 1)[0] // 此时把拿到的值排除出去，避免之后递归的时候栈溢出
    // const midValue = arr[midIndex] // 用这种方式的话，下面for循环里面需要把 midIndex 排除在外

    const left: number[] = []
    const right: number[] = []

    // i 的临界值用 arr.length ，因为此时 arr 的长度已经被 splice 修改了
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < midValue) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }

    return quickSort1(left).concat([midValue], quickSort1(right))
}

export function quickSort2(arr: number[]): number[] {
    const length = arr.length
    if (length === 0) return arr

    const midIndex = Math.floor(length / 2)
    const midValue = arr.slice(midIndex, midIndex + 1)[0]

    const left: number[] = []
    const right: number[] = []

    for (let i = 0; i < length; i++) {
        if (i !== midIndex) {
            if (arr[i] < midValue) {
                left.push(arr[i])
            } else {
                right.push(arr[i])
            }
        }
    }

    return quickSort2(left).concat([midValue], quickSort2(right))
}

// 1, 4, 6, 2, 3, 5
// 4, 6, 2, 3, 5

// const arr = [1, 4, 3, 6, 9, 7, 2, 8, 3, 5, 0]
// console.info(quickSort2(arr))
