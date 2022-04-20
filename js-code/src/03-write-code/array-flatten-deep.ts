/**
 * @description 深度扁平化
 */

export function flattenDeep1(arr: any[]): any[] {
    let res: any[] = []

    arr.forEach(item => {
        if (Array.isArray(item)) {
            res = res.concat(flattenDeep1(item))
        } else {
            res = res.concat(item)
        }
    })

    return res
}

export function flattenDeep2(arr: any[]): any[] {
    const length = arr.length
    if (length <= 0) return arr
    let res: any[] = []

    arr.forEach(item => {
        if (Array.isArray(item)) {
            const flat = flattenDeep2(item)
            flat.forEach(n => res.push(n))
        } else {
            res.push(item)
        }
    })

    return res
}

const arr = [1, [2], [3, 4, 5, [6, ['a', ['b'], ''], 7, [8, 9]]], 0]
console.info(flattenDeep2(arr))
