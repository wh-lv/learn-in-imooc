/**
 * @description 二叉搜索树
 */

interface ITreeNode {
    value: number,
    left: ITreeNode | null,
    right: ITreeNode | null
}


export const bst: ITreeNode = {
    value: 5,
    left: {
        value: 3,
        left: {
            value: 2,
            left: null,
            right: null
        },
        right: {
            value: 4,
            left: null,
            right: null
        }
    },
    right: {
        value: 7,
        left: {
            value: 6,
            left: null,
            right: null
        },
        right: {
            value: 8,
            left: null,
            right: null
        }
    }
}


const arr: number[] = [];


export function getKthValue(node: ITreeNode, k: number): number | null {
    inOrderTraverseNode(node)
    return arr[k - 1] || null
}

// 中序遍历
export function inOrderTraverseNode(node: ITreeNode | null) {
    if (node == null) return
    inOrderTraverseNode(node.left)
    arr.push(node.value)
    inOrderTraverseNode(node.right)
}

// 前序遍历
export function preOrderTreaverseNode(node: ITreeNode | null) {
    if (node == null) return
    console.info(node.value)
    preOrderTreaverseNode(node.left)
    preOrderTreaverseNode(node.right)
}

// 后序遍历
export function postOrderTraverseNode(node: ITreeNode | null) {
    if (node == null) return
    postOrderTraverseNode(node.left)
    postOrderTraverseNode(node.right)
    console.info(node.value)
}

inOrderTraverseNode(bst)
