/**
 * @description 快速排序 test
 */

import { quickSort1, quickSort2 } from './quick-sort'

describe("快速排序", () => {
    it("正常情况", () => {
        const arr = [1, 4, 3, 6, 9, 7, 2, 8, 3, 5, 0]
        const res = quickSort2(arr)
        expect(res).toEqual([0, 1, 2, 3, 3, 4, 5, 6, 7, 8, 9])
    })

    it("有负数", () => {
        const arr = [1, 4, -1, 6, 9, 7, 2, 8, 3, 5]
        const res = quickSort2(arr)
        expect(res).toEqual([-1, 1, 2, 3, 4, 5, 6, 7, 8, 9])
    })

    it("空数组", () => {
        const res = quickSort2([])
        expect(res).toEqual([])
    })

    it("数组元素相同", () => {
        const arr = [1, 1, 1, 1, 1, 1]
        const res = quickSort2(arr)
        expect(res).toEqual([1, 1, 1, 1, 1, 1])
    })
})
