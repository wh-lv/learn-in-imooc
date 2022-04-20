/**
 * @description 二叉搜索树第K小值 test
 */

import { bst, inOrderTraverseNode, getKthValue } from './binary-search-tree'

describe("二叉搜索树", () => {
    it("正常情况", () => {
        const res = getKthValue(bst, 3)
        expect(res).toBe(4)
    })
    it("k 不在正常范围", () => {
        const res = getKthValue(bst, 100)
        expect(res).toBeNull()
    })
})
