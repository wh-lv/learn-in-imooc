/**
 *
 * 数组扁平化（一级扁平化、深度扁平化）
 * @description
 */

export function flatten1(arr: any[]): any[] {
    const res: any[] = []

    arr.forEach(item => {
        if (Array.isArray(item)) {
            item.forEach(n => res.push(n))
        } else {
            res.push(item)
        }
    })

    return res
}
export function flatten2(arr: any[]): any[] {
    let res: any[] = []
    arr.forEach(item => {
        res = res.concat(item)
    })

    return res
}
