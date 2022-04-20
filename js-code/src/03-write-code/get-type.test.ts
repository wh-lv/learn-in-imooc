import { getType } from './get-type'

describe("获取详细数据类型", () => {
    it("null", () => {
        expect(getType(null)).toBe('null')
    })

    it("undefined", () => {
        expect(getType(undefined)).toBe('undefined')
    })

    it("数字类型", () => {
        expect(getType(100)).toBe('number')
    })

    it("字符串类型", () => {
        expect(getType('abc')).toBe('string')
    })

    it("正则", () => {
        expect(getType(/\.$/)).toBe('regexp')
    })

    it("函数", () => {
        expect(getType(() => {})).toBe('function')
    })

    it("object", () => {
        expect(getType({})).toBe('object')
    })

    it("map", () => {
        expect(getType(new Map())).toBe('map')
    })

    it("set", () => {
        expect(getType(new Set())).toBe('set')
    })

    it("WeakMap", () => {
        expect(getType(new WeakMap())).toBe('weakmap')
    })

    it("WeakSet", () => {
        expect(getType(new WeakSet())).toBe('weakset')
    })
})
