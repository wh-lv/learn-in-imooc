/**
 * @description 实现 new
 */

export function createNew<T>(constructor: Function, ...args: any[]): T {
    // 1. 创建空对象 obj，并继承构造函数的原型
    const obj = Object.create(constructor.prototype)
    // 2. 将 obj 作为 this 执行构造函数
    constructor.apply(obj, args)
    // 3. 返回 obj
    return obj
}

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

const f1 = new Foo("zhihui", "beijing", 28)
const f2 = createNew<Foo>(Foo, "zhihui", "beijing", 28)

console.info(f1)
console.info(f2)
