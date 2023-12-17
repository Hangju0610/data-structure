import { TreeNode } from "./TreeNode";

export class BinarySearchTree {
  private root: TreeNode<number> | null = null;
  constructor() {
    this.root = null;
  }

  /**
   * Tree에 Node 삽입 매서드입니다. 하나씩 데이터를 삽입하는 구조입니다.
   * @param {number} value
   */
  insert(value: number): void {
    const newNode = new TreeNode(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  /**
   * 재귀함수를 통해 반복하는 insertNode 구조입니다.
   * @param {TreeNode<number>} node
   * @param {TreeNode<number>} newNode
   */
  insertNode(node: TreeNode<number>, newNode: TreeNode<number>): void {
    // newNode의 값보다 기존 Node 값이 큰 경우
    // 왼쪽으로 newNode를 보낸다.
    if (node.data > newNode.data) {
      // left가 비어있는 경우 newNode로 입력
      if (node.left === null) {
        node.left = newNode;
      } else {
        // 없는 경우 재귀함수를 통해 반복
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }
  /**
   * 노드 탐색입니다.
   * @param {number} value
   * @returns
   */
  search(value: number) {
    return this.searchNode(this.root, value);
  }

  /**
   * 재귀 함수를 통한 노드 탐색입니다.
   * @param {TreeNode<number> | null} node 재귀함수에서 반환되는 node이며, null이 나올 수 있습니다.
   * @param {number} value
   * @returns {TreeNode<number> | number | null}
   */
  private searchNode(
    node: TreeNode<number> | null,
    value: number
  ): TreeNode<number> | number | null {
    // 해당하는 데이터가 없는 경우, null 반환
    if (node === null) {
      return null;
    }
    // 해당하는 데이터 확인 시 반환 진행
    if (node.data === value) {
      return node.data;
    }

    // value값 보다 node의 데이터가 큰 경우 탐색 진행
    if (node.data > value) {
      return this.searchNode(node.left, value);
    } else {
      // 큰 경우 오른쪽으로 탐색 진행
      return this.searchNode(node.right, value);
    }
  }
}
