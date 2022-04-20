/**
 * @description sleep 机制
 */

export class LazyMan {
    private name: string
    private tasks: Function[] = []

    constructor(name: string) {
        this.name = name

        setTimeout(() => {
            this.next()
        })
    }

    private next() {
        const task = this.tasks.shift()
        if (task) task()
    }

    eat(k: string) {
        const task = () => {
            console.info(`${this.name} eat ${k}`)
            this.next() // 立刻执行下一个任务
        }

        this.tasks.push(task)

        return this
    }


    sleep(seconds: number) {
        const task = () => {
            console.info(`${this.name} 开始睡觉了`)
            setTimeout(() => {
                console.info(`${this.name} 睡了 ${seconds}s，开始执行下一个任务`)
                this.next() // 立刻执行下一个任务
            }, seconds * 1000)
        }

        this.tasks.push(task)
        return this
    }
}

const me = new LazyMan("zhihui")
me.eat("苹果").eat("菠萝").sleep(2).eat("西瓜").sleep(2).eat("芒果")
