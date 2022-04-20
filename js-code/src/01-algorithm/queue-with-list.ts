/**
 * @description 链表实现队列
 */

interface IListNode {
    value: number,
    next: IListNode | null
}

export class MyQueue {

    private head: IListNode | null = null
    private tail: IListNode | null = null
    private len = 0

    add(n: number) {
        const newNode: IListNode = {
            value: n,
            next: null
        }
        // 处理 head
        if (this.head === null) {
            this.head = newNode
        }
        // 处理 tail
        const tailNode = this.tail
        if (tailNode) {
            tailNode.next = newNode
        }
        this.tail = newNode

        // 记录长度
        this.len++
    }
    delete(): number | null {
        const headNode = this.head
        if (headNode === null) return null
        if (this.len <= 0) return null

        // 取值
        const value = headNode.value
        // 处理head
        this.head = headNode.next

        this.len--

        return value
    }
    get length(): number {
        // length 要单独存储，不要遍历链表获取，否则时间复杂度太高（O(n)）
        return this.len
    }
}


const q = new MyQueue()
// q.add(100)
// q.add(200)
// q.add(300)
// console.info("queue length1", q.length)
// console.info(q.delete())
// console.info("queue length2", q.length)
// console.info(q.delete())
// console.info("queue length3", q.length)
// console.info(q.delete())
// console.info("queue length4", q.length)
// console.info(q.delete())
// console.info("queue length5", q.length)

console.time("queue with list")
for (let i = 0; i < 100000; i++) {
    q.add(i)
}
for (let i = 0; i < 100000; i++) {
    q.delete()
}
console.timeEnd("queue with list")
