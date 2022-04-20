import { MyQuene } from './two-stacks-one-queue'


describe("两个栈，一个队列", () => {
    it("add and length", () => {
        const queue = new MyQuene();
        queue.add(300)
        queue.add(400)
        queue.add(500)
        expect(queue.length).toBe(3)
    })
    it("delete", () => {
        const queue = new MyQuene()
        expect(queue.delete()).toBeNull()
        queue.add(300)
        queue.add(400)
        queue.add(500)
        expect(queue.delete()).toBe(300)
        expect(queue.length).toBe(2)
        expect(queue.delete()).toBe(400)
        expect(queue.length).toBe(1)
    })
})

