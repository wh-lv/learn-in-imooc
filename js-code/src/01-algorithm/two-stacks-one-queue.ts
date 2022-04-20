/**
 * @description 两个栈实现一个队列
 */

export class MyQuene {
    private stack1: number[] = []
    private stack2: number[] = []

    add(n: number) {
        this.stack1.push(n)
    }

    delete() : number | null {
        let res
        const stack1 = this.stack1
        const stack2 = this.stack2
        while(stack1.length) {
            const n = stack1.pop()
            if (n) {
                stack2.push(n)
            }
        }

        res = stack2.pop();

        while(stack2.length) {
            const n = stack2.pop()
            if(n) {
                stack1.push(n)
            }
        }

        return res || null
    }

    get length(): number {
        return this.stack1.length;
    }
}

const q = new MyQuene();
// q.add(100);
// q.add(200);
// q.add(300);
// console.log(q);

// console.log(q.length);
// console.log(q.delete());
// console.log(q.length);

console.time("queue with array")
for (let i = 0; i < 10000; i++) {
    q.add(i)
}
for (let i = 0; i < 10000; i++) {
    q.delete()
}
console.timeEnd("queue with array")



