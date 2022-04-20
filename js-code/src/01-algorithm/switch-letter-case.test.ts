/**
 * @description 切换字母大小写 test
 */

import { switchLetterCase1, switchLetterCase2 } from './switch-letter-case'

describe("切换字符大小写", () => {
    it("正常情况", () => {
        const str = "123AsD666"
        const res = switchLetterCase2(str)
        expect(res).toBe("123aSd666")
    })

    it("只有大写", () => {
        const str = "123AAA666"
        const res = switchLetterCase2(str)
        expect(res).toBe("123aaa666")
    })

    it("只有小写", () => {
        const str = "123sss666"
        const res = switchLetterCase2(str)
        expect(res).toBe("123SSS666")
    })

    it("无英文字母", () => {
        const str = "123666"
        const res = switchLetterCase2(str)
        expect(res).toBe("123666")
    })

    it("空字符串", () => {
        const str = ""
        const res = switchLetterCase2(str)
        expect(res).toBe("")
    })
})
