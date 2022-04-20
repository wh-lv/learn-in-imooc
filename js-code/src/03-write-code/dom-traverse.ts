/**
 * @description 遍历 DOM tree
 */

function visitNode(n: Node) {
    if (n instanceof Comment) {
        // 注释
        console.info("Test node---", n.textContent)
    }
    if (n instanceof Text) {
        const t = n.textContent?.trim()
        if (t) {
            // 文本
            console.info("Test node---", n.textContent?.trim())
        }
    }
    if (n instanceof HTMLElement) {
        // element
        console.info("Element node---", `<${n.tagName.toLowerCase()}>`)
    }
}

/**
 * 深度优先遍历
 * @param root
 */
export function depthFirstTraverse(root: Node) {
    visitNode(root)

    // .childNodes 获取所有 Node 节点（注释文本等）；.children 只获取元素（不获取注释和文本）
    const childNodes = root.childNodes

    if (childNodes.length) {
        childNodes.forEach(child => {
            depthFirstTraverse(child)
        })
    }
}

export function depthFirstTraverse2(root: Node) {
    const stack: Node[] = []
    stack.push(root)

    while (stack.length > 0) {
        const node = stack.pop()
        if (node == null) break
        visitNode(node)

        const childNodes = node.childNodes
        if (childNodes.length > 0) {
            // childNodes 反转之后再压栈
            Array.from(childNodes).reverse().forEach(child => {
                stack.push(child)
            })
        }
    }
}

/**
 * 广度优先遍历
 * @param root
 */
export function breadthFirstTraverse1(root: Node) {
    // 数组实现队列 （数组、链表）
    const queue: Node[] = []
    queue.unshift(root)

    while (queue.length > 0) {
        const node = queue.pop()
        if (node == null) break

        visitNode(node)

        // 子元素入队
        const childNodes = node.childNodes
        if (childNodes.length > 0) {
            childNodes.forEach((child: Node) => {
                queue.unshift(child)
            })
        }
    }
}

export function breadthFirstTraverse2(root: Node) {
    // 数组实现队列 （数组、链表）
    // const queue: Node[] = []
    const queue = new MyQueue()
    queue.add(root)

    while (queue.length > 0) {
        const node = queue.delete()
        if (node == null) break

        visitNode(node)

        // 子元素入队
        const childNodes = node.childNodes
        if (childNodes.length > 0) {
            childNodes.forEach((child: Node) => {
                queue.add(child)
            })
        }
    }
}

// 链表实现队列
interface ILinkListNode {
    value: Node,
    next: ILinkListNode | null
}
class MyQueue {
    private head: ILinkListNode | null = null
    private tail: ILinkListNode | null = null
    private len: number = 0

    add(n: Node) {
        const node = {
            value: n,
            next: null
        }

        if (this.head === null) {
            this.head = node
        }

        const tail = this.tail
        if (tail) {
            tail.next = node
        }
        this.tail = node
        this.len++
    }

    delete() {
        const head = this.head
        if (head === null) return null
        if (this.len <= 0) return null

        const value = head.value
        this.head = head.next

        this.len--
        return value
    }

    get length(): number {
        return this.len
    }
}

const box = document.getElementById("box")
if (box === null) throw new Error("box is null")
console.info(depthFirstTraverse2(box))

// console.time("breadthFirstTraverse1")
// for (let i = 0; i < 10 * 10000; i++) {
//     breadthFirstTraverse1(box)
// }
// console.timeEnd("breadthFirstTraverse1")

// console.time("breadthFirstTraverse2")
// for (let i = 0; i < 10 * 10000; i++) {
//     breadthFirstTraverse2(box)
// }
// console.timeEnd("breadthFirstTraverse2")
