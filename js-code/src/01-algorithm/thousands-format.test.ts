/**
 * @description 数字千分位格式化 test
 */

import { format1, format2 } from './thousands-format'

describe("数字千分位格式化", () => {
    it("正常情况", () => {
        expect(format2(100200300)).toBe("100,200,300")
        expect(format2(1002003000)).toBe("1,002,003,000")
        expect(format2(10020030000)).toBe("10,020,030,000")
    })

    it("数字小于1000", () => {
        expect(format2(1)).toBe("1")
        expect(format2(10)).toBe("10")
        expect(format2(100)).toBe("100")
    })
})
