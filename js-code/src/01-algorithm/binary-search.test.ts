import { binarySearch1, binarySearch2 } from './binary-search'

describe("二分查找", () => {
    it("正常情况", () => {
        const arr = [10, 20, 30, 40, 50]
        const target = 40
        const index = binarySearch1(arr, target)
        expect(index).toBe(3)
    })

    it("空数组", () => {
        const index = binarySearch1([], 100)
        expect(index).toBe(-1)
    })

    it("找不到", () => {
        const arr = [10, 20, 30, 40, 50]
        const target = 400
        const index = binarySearch1(arr, target)
        expect(index).toBe(-1)
    })
})
