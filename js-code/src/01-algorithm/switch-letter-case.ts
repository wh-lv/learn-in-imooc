/**
 * @description 切换字母大小写
 */

/**
 * ASCII
 * @param s
 * @returns string
 */
export function switchLetterCase1(s: string): string {
    let res = ""
    const length = s.length
    if (length === 0) return res

    for (let i = 0; i < length; i++) {
        const code = s.charCodeAt(i)
        if (code >= 65 && code <= 90) {
            res += s[i].toLowerCase()
        } else if (code >= 97 && code <= 122) {
            res += s[i].toUpperCase()
        } else {
            res += s[i]
        }
    }

    return res
}

/**
 * 正则
 * @param s
 * @returns string
 */
export function switchLetterCase2(s: string): string {
    let res = ""
    const length = s.length
    if (length === 0) return res

    const upReg = /[A-Z]/
    const lowReg = /[a-z]/

    for (let i = 0; i < length; i++) {
        if (upReg.test(s[i])) {
            res += s[i].toLowerCase()
        } else if (lowReg.test(s[i])) {
            res += s[i].toUpperCase()
        } else {
            res += s[i]
        }
    }

    return res
}


// const str = "123AsD666"
// // console.info(switchLetterCase1(str))
// // console.info(switchLetterCase2(str))

// console.time("switchLetterCase1")
// for (let i = 0; i < 100 * 10000; i++) {
//     switchLetterCase1(str)
// }
// console.timeEnd("switchLetterCase1")

// console.time("switchLetterCase2")
// for (let i = 0; i < 100 * 10000; i++) {
//     switchLetterCase2(str)
// }
// console.timeEnd("switchLetterCase2")
