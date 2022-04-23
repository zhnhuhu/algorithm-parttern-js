function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}


var maxDepth = function (root) {
    return root == null ? 0 : Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
};

var isBalanced = function (root) {
    if (root === null) {
        return true;
    }
    return isBalanced(root.left) && isBalanced(root.right) && Math.abs(maxDepth(root.left) - maxDepth(root.right)) <= 1;
};

// 我们递归遍历整棵二叉树，定义 f(x)表示x节点是否包含p或q，包含则为true。
// 则最近公共子祖先x一定满足以下条件
// f(lson)&&(frson) || (x=p||x=q)&&(f(lson)||f(rson))
var lowestCommonAncestor = function (root, p, q) {
    let ans;
    const dfs = (root, p, q) => {
        if (root === null) return false;
        const lson = dfs(root.left, p, q);
        const rson = dfs(root.right, p, q);
        if ((lson && rson) || (root.val === p.val || root.val === q.val) && (lson || rson)) {
            ans = root;
        }
        return lson || rson || (root.val === p.val || root.val === q.val);
    }
    dfs(root, p, q);
    return ans;
};

// 二叉树的层序遍历
var levelOrderBottom = function (root) {
    let queue = [root];
    let res = [];
    if(!root) return res;
    while (queue.length) {
        let cur=[]
        let n = queue.length;
        while (n > 0) {
            tmp=queue.shift()
            cur.push(tmp.val)
            if (tmp.left) {
                queue.push(tmp.left)
            }
            if (tmp.right) {
                queue.push(tmp.right)
            }
            n--;
        }
        res.push(cur);
    }
    return res.reverse()
};