import { createNew } from './new'

describe("自定义 new", () => {
    it("new", () => {
        class Foo {
            name: string
            city: string
            age: number

            constructor(name: string, city: string, age: number) {
                this.name = name
                this.city = city
                this.age = age
            }

            getName() {
                return this.name
            }
        }
        const f = createNew<Foo>(Foo, "zhihui", "beijing", 28)
        expect(f.getName()).toBe("zhihui")
        expect(f.city).toBe("beijing")
        expect(f.age).toBe(28)
    })
})
