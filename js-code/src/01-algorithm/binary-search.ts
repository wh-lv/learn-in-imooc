/**
 * @description 二分查找
 */

export function binarySearch1(arr: number[], target: number): number {
    const length = arr.length
    if (length === 0) return -1

    let startIndex = 0 // 开始位置
    let endIndex = length - 1 // 结束位置

    while (startIndex <= endIndex) {
        const midIndex = Math.floor((startIndex + endIndex) / 2)
        const midValue = arr[midIndex]
        if (target < midValue) {
            // 目标值较小，继续在左侧查找
            endIndex = midIndex - 1
        } else if (target > midValue) {
            // 目标值较大，在右侧查找
            startIndex = midIndex + 1
        } else {
            return midIndex
        }
    }
    return -1
}

export function binarySearch2(arr: number[], target: number, startIndex?: number, endIndex?: number): number {
    const length = arr.length
    if (length === 0) return -1;

    if (startIndex == null) startIndex = 0
    if (endIndex == null) endIndex = length - 1

    // 如果startIndex和endIndex相遇，则结束
    if (startIndex > endIndex) return -1

    const midIndex = Math.floor((startIndex + endIndex) / 2)
    const midValue = arr[midIndex]

    if (target < midValue) {
        return binarySearch2(arr, target, startIndex, midIndex - 1)
    } else if (target > midValue) {
        return binarySearch2(arr, target, midIndex + 1, endIndex)
    } else {
        return midIndex
    }
}

const arr = [10, 20, 30, 40, 50, 60]
const target = 30
// console.info(binarySearch2(arr, target))

console.time("binarySearch1")
for (let i = 0; i < 1000 * 10000; i++) {
    binarySearch1(arr, target)
}
console.timeEnd("binarySearch1")

console.time("binarySearch2")
for (let i = 0; i < 1000 * 10000; i++) {
    binarySearch2(arr, target)
}
console.timeEnd("binarySearch2")
