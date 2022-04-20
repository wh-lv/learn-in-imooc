import { ILinkListNode, createLinkList, reverseLinkList } from './reverse-link-list'

describe("反转单项链表", () => {
    it("单个元素", () => {
        const node: ILinkListNode = { value: 100 }
        const node1 = reverseLinkList(node)
        expect(node1).toEqual({ value: 100 })
    })

    it("多个元素", () => {
        const arr = [100, 200, 300]
        const list = createLinkList(arr)
        const list1 = reverseLinkList(list)
        expect(list1).toEqual({
            value: 300,
            next: {
                value: 200,
                next: {
                    value: 100
                }
            }
        })
    })
})
