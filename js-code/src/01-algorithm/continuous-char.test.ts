/**
 * @description 连续字符 test
 */

import { findCountinuousChar2 } from './continuous-char'

describe("连续字符", () => {
    it("正常情况", () => {
        const str = "aaasssffeeeeaeeaaddaf"
        const res = findCountinuousChar2(str)
        expect(res).toEqual({ char: "e", length: 4 })
    })

    it("空字符串", () => {
        const str = ""
        const res = findCountinuousChar2(str)
        expect(res).toEqual({ char: "", length: 0 })
    })

    it("无连续字符", () => {
        const str = "asd"
        const res = findCountinuousChar2(str)
        expect(res).toEqual({ char: "a", length: 1 })
    })

    it("都是连续字符", () => {
        const str = "aabbcc"
        const res = findCountinuousChar2(str)
        expect(res).toEqual({ char: "a", length: 2 })
    })
})
