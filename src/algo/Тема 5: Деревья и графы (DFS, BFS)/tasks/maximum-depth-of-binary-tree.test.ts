import { describe, it, expect } from "vitest";
import { maxDepth, TreeNode } from "./maximum-depth-of-binary-tree";

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

describe("maxDepth", () => {
  it("returns 3 for tree [3,9,20,null,null,15,7]", () => {
    const root = buildTree([3, 9, 20, null, null, 15, 7]);
    expect(maxDepth(root)).toBe(3);
  });

  it("returns 2 for tree [1,null,2]", () => {
    const root = buildTree([1, null, 2]);
    expect(maxDepth(root)).toBe(2);
  });

  it("returns 0 for empty tree (null root)", () => {
    expect(maxDepth(null)).toBe(0);
  });

  it("returns 1 for single node tree", () => {
    const root = new TreeNode(1);
    expect(maxDepth(root)).toBe(1);
  });

  it("returns correct depth for left-heavy tree", () => {
    const root = buildTree([1, 2, null, 3, null, 4]);
    expect(maxDepth(root)).toBe(4);
  });

  it("returns correct depth for right-heavy tree", () => {
    const root = buildTree([1, null, 2, null, 3, null, 4]);
    expect(maxDepth(root)).toBe(4);
  });

  it("returns correct depth for balanced tree of depth 4", () => {
    const root = buildTree([1, 2, 3, 4, 5, 6, 7, 8]);
    expect(maxDepth(root)).toBe(4);
  });

  it("returns 2 for tree with two children", () => {
    const root = buildTree([1, 2, 3]);
    expect(maxDepth(root)).toBe(2);
  });
});
