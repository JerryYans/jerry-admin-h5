/**
 * 根据id 查找 树中的node节点信息
 * @param  tree array
 * @param nodeId object
 * @returns object
 */
const findNodeFromTree = (tree, nodeId) => {
  if (tree == null || tree.length <= 0) return null
  for (let i = 0; i <= tree.length; i++){
    if (tree[i]['id'] == nodeId){
      return tree[i]
    }
    //有子节点  递归查找子节点
    if (!!tree[i]['children'] && tree[i]['children'].length > 0){
      let res = findNodeFromTree(tree[i]['children'], id)
      if (res != null){
        return res
      }
    }
    return null
  }
}

/**
 * 向 树中 插入新的 节点
 * @param tree 要插入的树
 * @param treeNode 要插入的节点
 */
const appendTreeNode = (tree, treeNode) => {
  if (tree == null || tree.length <= 0) return;
  //如果要插入的节点没有父节点,则直接插入树的根部
  if (!treeNode['parentId'] || treeNode['parentId'] == null){
    let i = tree.findIndex(p => p.sort > treeNode.sort);
    if (i == -1){
      i = tree.length;
    }
    tree.splice(i, 0, treeNode)
    return
  }
  //有父节点,递归判断并插入其父节点下面
  for (let j = 0; j < tree.length; j++){
    let tmpNode = tree[j]
    if (treeNode['parentId'] == tmpNode['id']){
      if (tmpNode['children'] && tmpNode['children'].length > 0){
        let i = tmpNode['children'].findIndex(p => p.sort > treeNode.sort)
        i = i == -1 ? tmpNode['children'].length : i
        tmpNode['children'].splice(i, 0, treeNode)
      }else {
        tmpNode['children'] = []
        tmpNode['children'].push(treeNode)
      }
    } else {
      appendTreeNode(tmpNode['children'], treeNode)
    }
  }
}

const deleteFromTree = () => {

}

const updateTreeNode = () => {

}

const batchDeleteFromTree = () => {

}

export default {
  methods: {
    findNodeFromTree,
    appendTreeNode,
    deleteFromTree,
    updateTreeNode,
    batchDeleteFromTree
  }
};
