/**
 * @description 移动 0 到数组末尾（只能在原数组操作）
 */

export function moveZero1(arr: number[]) : void {
    const length = arr.length
    if (length === 0) return

    let zeroLength = 0
    for (let i = 0; i < length - zeroLength; i++) {
        if (arr[i] === 0) {
            arr.push(0)
            arr.splice(i, 1)
            zeroLength++
            i--
        }
    }
}

export function moveZero2(arr: number[]): void {
    const length = arr.length
    if (length === 0) return

    let i
    let j = -1 // j 指向第一个 0

    for (i = 0; i < length; i++) {
        if (arr[i] === 0) {
            if (j < 0) {
                j = i
            }
        }

        if (arr[i] !== 0 && j >= 0) {
            const temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp

            j++
        }
    }
}

// const arr = [1, 0, 0, 3, 4, 0, 0, 11, 0]
// moveZero2(arr)
// console.log(arr);

