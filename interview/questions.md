#### 一、快速创建 0-n 的数组
```js

/**
 * 1. for 循环
 * 2. Array.from({ length: 10 }).map((v, k) => k)
 */
```
#### 二、实现 promise

```js
const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';
class MyPromise {
    constructor(executor) {
        let self = this;
        self.status = PENDING;
        self.value = undefined;
        self.reason = undefined;
        self.onResolvedCallbacks = [];
        self.onRejectedCallbacks = [];

        let resolve = (value) => {
            if (self.status === PENDING) {
                self.status = FULFILLED;
                self.value = value;
                self.onResolvedCallbacks.forEach((fn) => fn());
            }
        };

        let reject = (reason) => {
            if (self.status === PENDING) {
                self.status = REJECTED;
                self.reason = reason;
                self.onRejectedCallbacks.forEach((fn) => fn());
            }
        };
        try {
            executor(resolve, reject);
        } catch {
            reject(err);
        }
    }

    then(onFulfilled, onRejected) {
        //处理then里面不是回调函数情况
        //Promise/A+ 2.2.1 / Promise/A+ 2.2.5 / Promise/A+ 2.2.7.3 / Promise/A+ 2.2.7.4
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : (v) => v;
        onRejected =
            typeof onRejected === 'function'
            ? onRejected
        : (err) => {
            throw err;
        };
        let self = this;
        return new MyPromise((resolve, reject) => {
            if (self.status === 'fulfilled') {
                setTimeout(() => {
                    try {
                        let x = onFulfilled(self.value);
                        x instanceof MyPromise ? x.then(resolve, reject) : resolve(x);
                    } catch (err) {
                        reject(err);
                    }
                }, 0);
            }
            if (self.status === 'rejected') {
                setTimeout(() => {
                    try {
                        let x = onRejected(self.reason);
                        x instanceof MyPromise ? x.then(resolve, reject) : resolve(x);
                    } catch (err) {
                        reject(err);
                    }
                }, 0);
            }
            if (self.status === 'pending') {
                self.onResolvedCallbacks.push(() => {
                    setTimeout(() => {
                        let x = onFulfilled(self.value);
                        x instanceof MyPromise ? x.then(resolve, reject) : resolve(x);
                    }, 0);
                });
                self.onRejectedCallbacks.push(() => {
                    setTimeout(() => {
                        let x = onRejected(self.reason);
                        x instanceof MyPromise ? x.then(resolve, reject) : resolve(x);
                    }, 0);
                });
            }
        });
    }
}
```
#### 三、如何统计 $nextTick 的调用次数
```js

// main.js
let count = 0

const nextTick = Vue.nextTick
Vue.prototype.$nextTick = function (fn) {
  count++
  console.info('$nextTick调用次数', count)
  return nextTick(fn, this)
}

```

#### 四、实现 Promise.all
```js

function promiseAll(promises) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(promises)) {
            throw new Error('arguments must be array')
        }

        let resolveCounter = 0
        const promiseLength = promises.length
        const result = []

        for (let i = 0; i < promiseLength; i++) {
            Promise.resolve(promises[i]).then((value) => {
                resolveCounter++
                result[i] = value
                if (resolveCounter === promiseLength) {
                    return resolve(result)
                }
            }, (error) => {
                return reject(error)
            })
        }
    })
}

// test
let p1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve(1)
    }, 1000)
})
let p2 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve(2)
    }, 2000)
})
let p3 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve(3)
    }, 3000)
})
promiseAll([p3, p1, p2]).then(res => {
    console.log(res) // [3, 1, 2]
})

```


