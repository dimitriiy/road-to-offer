/**
 * 102. Binary Tree Level Order Traversal
 * https://leetcode.com/problems/binary-tree-level-order-traversal/
 *
 * Definition for a binary tree node.
 */
export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

/**
 * Level-order (BFS) traversal of a binary tree.
 * Returns node values grouped by level, left-to-right, top-to-bottom.
 *
 * @param root - Root of the binary tree (or null for empty tree).
 * @returns Array of arrays, each sub-array is one level's node values.
 */
export function levelOrder(root: TreeNode | null): number[][] {
  if (!root) return [];

  const result: number[][] = [];

  const queue = [root];

  while (queue.length) {
    const levelSize = queue.length;
    const currentLevel: number[] = [];

    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift()!;

      currentLevel.push(node?.val);

      if (node?.left) {
        queue.push(node.left);
      }

      if (node?.right) {
        queue.push(node.right);
      }
    }

    result.push(currentLevel);
  }

  return result;
}
