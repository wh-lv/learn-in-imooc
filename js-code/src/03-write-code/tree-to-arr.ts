/**
 * @description tree to array (广度优先遍历)
 */

interface ITreeNode {
    id: number
    name: string
    children?: ITreeNode[]
}

interface ITreeItem {
    id: number
    name: string
    parentId: number
}

export function convert(root: ITreeNode): ITreeItem[] {
    const nodeToParent: Map<ITreeNode, ITreeNode> = new Map()

    const result: ITreeItem[] = []

    const queue: ITreeNode[] = []
    queue.push(root)

    while (queue.length > 0) {
        const curNode = queue.shift()
        if (curNode == null) break

        const { id, name, children = [] } = curNode
        const parentNode = nodeToParent.get(curNode)
        const parentId = parentNode?.id || 0
        const treeItem = { id, name, parentId }

        result.push(treeItem)

        children.forEach(item => {
            queue.push(item)
            nodeToParent.set(item, curNode)
        })
    }


    return result
}

const obj = {
    id: 1,
    name: "部门A",
    children: [
        {
            id: 2,
            name: "部门B",
            children: [
                { id: 4, name: "部门D" },
                { id: 5, name: "部门E" },
            ]
        },
        {
            id: 3,
            name: "部门C",
            children: [
                { id: 6, name: "部门F" }
            ]
        }
    ]
}

const arr = convert(obj)
console.info(arr)
