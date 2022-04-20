/**
 * @description Event Bus
 */

export class EventBus {
    /**
     {
        "key1": [
            { fn: Function, isOnce: false }
        ]
        "key2": [] // 有序
        "key3": []
     }
     */

    private events: {
        [key: string]: Array<{fn: Function; isOnce: boolean}>
    }

    constructor() {
        this.events = {}
    }

    on(type: string, fn: Function, isOnce: boolean = false) {
        const events = this.events
        if (events[type] == null) {
            this.events[type] = []
        }
        this.events[type].push({ fn, isOnce })
    }

    once(type: string, fn: Function) {
        this.on(type, fn, true)
    }

    off(type: string, fn?: Function) {
        if (!fn) {
            // 解绑所有 type 的函数
            this.events[type] = []
        } else {
            const fnList = this.events[type]
            if (fnList) {
                this.events[type] = fnList.filter(item => item.fn !== fn)
            }
        }
    }

    emit(type: string, ...args: any[]) {
        const fnList = this.events[type]
        if (fnList == null) return
        this.events[type] = fnList.filter(item => {
            const {fn, isOnce} = item
            fn(...args)
            return !isOnce
        })
    }
}

const e = new EventBus()

const fn1 = function(a: number, b: number) { console.info(`fn1: ${a} ${b}`) }
const fn2 = function(a: number, b: number) { console.info(`fn2: ${a} ${b}`) }
const fn3 = function(a: number, b: number) { console.info(`fn3: ${a} ${b}`) }

e.on("key1", fn1)
e.on("key1", fn2)
e.once("key1", fn3)
e.on("xxxxxx", fn3)

e.emit("key1", 10, 20) // 触发 fn1 fn2 fn3
e.emit("key1", 10, 20)

e.off("key1", fn1) // 解除 fn1

e.emit("key1", 100, 200) // 触发 fn2
