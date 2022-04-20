import './bind'

describe("自定义 bind", () => {
    it("绑定 this", () => {
        function fn(this: any) {
            return this
        }

        // @ts-ignore
        const fn1 = fn.customBind({ x: 100 })
        expect(fn1()).toEqual({ x: 100 })
    })

    it("绑定参数", () => {
        function fn(a: number, b: number, c: number) {
            return a + b + c
        }

        // @ts-ignore
        const fn1 = fn.customBind(null, 10)
        const res = fn1(20, 30)

        expect(res).toBe(60)
    })
})

