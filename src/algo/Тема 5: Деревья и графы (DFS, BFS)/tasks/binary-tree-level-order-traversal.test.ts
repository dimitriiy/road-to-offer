import { describe, it, expect } from "vitest";
import { levelOrder, TreeNode } from "./binary-tree-level-order-traversal";

function buildTree(arr: (number | null)[]): TreeNode | null {
  if (arr.length === 0 || arr[0] === null) return null;

  const root = new TreeNode(arr[0]!);
  const queue: TreeNode[] = [root];
  let i = 1;

  while (queue.length > 0 && i < arr.length) {
    const node = queue.shift()!;

    if (i < arr.length && arr[i] !== null) {
      node.left = new TreeNode(arr[i]!);
      queue.push(node.left);
    }
    i++;

    if (i < arr.length && arr[i] !== null) {
      node.right = new TreeNode(arr[i]!);
      queue.push(node.right);
    }
    i++;
  }

  return root;
}

describe("levelOrder", () => {
  it("returns [[3],[9,20],[15,7]] for [3,9,20,null,null,15,7]", () => {
    const root = buildTree([3, 9, 20, null, null, 15, 7]);
    expect(levelOrder(root)).toEqual([[3], [9, 20], [15, 7]]);
  });

  it("returns [[1]] for single node tree [1]", () => {
    const root = buildTree([1]);
    expect(levelOrder(root)).toEqual([[1]]);
  });

  it("returns [] for empty tree (null root)", () => {
    expect(levelOrder(null)).toEqual([]);
  });

  it("returns [[1],[2,3],[4,5,6,7]] for balanced tree of depth 3", () => {
    const root = buildTree([1, 2, 3, 4, 5, 6, 7]);
    expect(levelOrder(root)).toEqual([[1], [2, 3], [4, 5, 6, 7]]);
  });

  it("returns [[1],[2],[3],[4]] for left-heavy tree", () => {
    const root = buildTree([1, 2, null, 3, null, 4]);
    expect(levelOrder(root)).toEqual([[1], [2], [3], [4]]);
  });

  it("returns [[1],[2],[3],[4]] for right-heavy tree", () => {
    const root = buildTree([1, null, 2, null, 3, null, 4]);
    expect(levelOrder(root)).toEqual([[1], [2], [3], [4]]);
  });

  it("returns [[1],[2,3]] for tree with two children", () => {
    const root = buildTree([1, 2, 3]);
    expect(levelOrder(root)).toEqual([[1], [2, 3]]);
  });

  it("preserves left-to-right order within a level", () => {
    const root = buildTree([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
    expect(levelOrder(root)).toEqual([
      [1],
      [2, 3],
      [4, 5, 6, 7],
      [8, 9, 10, 11],
    ]);
  });
});
