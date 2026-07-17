import { assert } from "vitest";

/**
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

export function maxDepthRec(root: TreeNode | null): number {
  if (!root) return 0;

  const l = maxDepth(root.left);
  const r = maxDepth(root.right);

  return 1 + Math.max(l, r);
}

export function maxDepth(root: TreeNode | null): number {
  if (!root) return 0;
  let result = 0;
  const stack: Array<[TreeNode, number]> = [[root, 1]];

  while (stack.length) {
    const el = stack.pop();

    assert(el);

    const [node, depth] = el;

    result = Math.max(result, depth);

    if (node.left) {
      stack.push([node.left, depth + 1]);
    }

    if (node.right) {
      stack.push([node.right, depth + 1]);
    }
  }
  return result;
}
