/**
 * @description 数组深度扁平化
 */

import { flattenDeep1, flattenDeep2 } from './array-flatten-deep'

describe("数组深度扁平化", () => {
    it("空数组", () => {
        const res = flattenDeep2([])
        expect(res).toEqual([])
    })

    it("非嵌套数组", () => {
        const arr = [1, 2, 3, 4, 5]
        const res = flattenDeep2(arr)
        expect(res).toEqual(arr)
    })

    it("一级嵌套", () => {
        const arr = [1, 2, [3], 4, 5]
        const res = flattenDeep2(arr)
        expect(res).toEqual([1, 2, 3, 4, 5])
    })

    it("二级嵌套", () => {
        const arr = [1, [2, [3], 4], 5]
        const res = flattenDeep2(arr)
        expect(res).toEqual([1, 2, 3, 4, 5])
    })

    it("多级嵌套", () => {
        const arr = [1, [2], [3, 4, 5, [6, ['a', ['b'], ''], 7, [8, 9]]], 0]
        const res = flattenDeep2(arr)
        expect(res).toEqual([1, 2, 3, 4, 5, 6, 'a', 'b', '', 7, 8, 9, 0])
    })
})
