/**
 * @description 连续字符
 */

interface IRrs {
    char: string,
    length: number
}

export function findCountinuousChar1(str: string): IRrs {
    const res: IRrs = {
        char: '',
        length: 0
    }

    const length = str.length
    if (length === 0) return res

    let tempLength = 0 // 临时记录当前连续字符的长度

    for (let i = 0; i < length; i++) {
        tempLength = 0 // 重置

        for (let j = i; j < length; j++) {
            if (str[i] === str[j]) {
                tempLength++
            }

            if (str[i] !== str[j] || j === length - 1) {
                if (tempLength > res.length) {
                    res.char = str[i]
                    res.length = tempLength
                }
                if (j < length - 1) {
                    i = j - 1 // 之后会执行 i++，故 i = j - 1
                }
                break
            }
        }
    }

    return res
}

export function findCountinuousChar2(str: string): IRrs {
    const res: IRrs = {
        char: "",
        length: 0
    }

    const length = str.length
    if (length === 0) return res

    let i = 0
    let j = i
    let tempLength = 0

    while (i < length) {
        if (str[i] === str[j]) {
            tempLength++
        }
        if (str[i] !== str[j] || i === length - 1) {
            if (tempLength > res.length) {
                res.char = str[j]
                res.length = tempLength
            }
            tempLength = 1
            if (i < length - 1) {
                j = i
            }
        }
        i++
    }

    // for (; i < length; i++) {
    //     if (str[i] === str[j]) {
    //         tempLength++
    //     }
    //     if (str[i] !== str[j] || i === length - 1) {
    //         if (tempLength > res.length) {
    //             res.char = str[j]
    //             res.length = tempLength
    //         }
    //         tempLength = 0
    //         if (i < length - 1) {
    //             j = i
    //             i--
    //         }
    //     }
    // }

    return res
}

// const str = "aaasssffeeeeaeeaaaaaddaf"

// console.info(findCountinuousChar2(str))

let str = ''
for (let i = 0; i < 100 * 10000; i++) {
    str += i.toString()
}

console.time("findContinuousChar1")
findCountinuousChar1(str)
console.timeEnd("findContinuousChar1")

console.time("findContinuousChar1")
findCountinuousChar2(str)
console.timeEnd("findContinuousChar1")
