/**
 * @description Event Bus
 */
export default class EventBus {
    private events: { [key: string]: Array<Function> }
    private onceEvents: { [key: string]: Array<Function> }

    constructor() {
        this.events = {}
        this.onceEvents = {}
    }

    on(type: string, fn: Function) {
        const events = this.events
        if (events[type] == null) {
            this.events[type] = []
        }
        this.events[type].push(fn)
    }

    once(type: string, fn: Function) {
        const onceEvents = this.onceEvents
        if (onceEvents[type] == null) {
            this.onceEvents[type] = []
        }
        this.onceEvents[type].push(fn)
    }

    off(type: string, fn?: Function) {
        if (!fn) {
            this.events[type] = []
            this.onceEvents[type] = []
        } else {
            const fnList = this.events[type]
            const onceFnList = this.onceEvents[type]
            if (fnList) {
                this.events[type] = fnList.filter(curFn => curFn !== fn)
            }
            if (onceFnList) {
                this.onceEvents[type] = onceFnList.filter(curFn => curFn !== fn)
            }
        }
    }

    emit(type: string, ...args: any[]) {
        const fnList = this.events[type]
        const onceFnList = this.onceEvents[type]

        if (fnList) {
            fnList.forEach(f => f(...args));
        }
        if (onceFnList) {
            onceFnList.forEach(f => f(...args));
            this.onceEvents[type] = []
        }
    }
}

// const e = new EventBus()

// const fn1 = function(a: number, b: number) { console.info(`fn1: ${a} ${b}`) }
// const fn2 = function(a: number, b: number) { console.info(`fn2: ${a} ${b}`) }
// const fn3 = function(a: number, b: number) { console.info(`fn3: ${a} ${b}`) }

// e.on("key1", fn1)
// e.on("key1", fn2)
// e.once("key1", fn3)
// e.on("xxxxxx", fn3)

// e.emit("key1", 10, 20) // 触发 fn1 fn2 fn3
// e.emit("key1", 10, 20)

// e.off("key1", fn1) // 解除 fn1

// e.emit("key1", 1000, 2000) // 触发 fn2
