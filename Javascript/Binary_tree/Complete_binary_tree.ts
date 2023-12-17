import { TreeNode } from "./TreeNode";
/**
 * 배열을 받았을 때 완전 이진트리로 변환해주는 Class로써, 삽입과 수정이 불가능합니다.
 * index를 통해서 이진트리 구조를 생성
 */
export class CBT<T> {
  private root: TreeNode<T> | null = null;

  /**
   * 배열을 받아 Tree 구조를 만듭니다.
   * @param {T[]} elements 입력하고자 하는 Array
   */
  insert(elements: T[]): void {
    this.insertNode(elements, 0);
  }

  /**
   * 배열을 받아서 binaryTree를 구현합니다.
   * 재귀 함수를 통해 parent 및 하위 노드를 구현합니다.
   * @param {T[]} elements Tree Node를 이룰 Array 집합
   * @param {number} index Array의 인덱스
   * @returns {TreeNode<T> | null} 해당 값이 null일 경우 null 반환, 아니면 Tree 반환
   */
  private insertNode(elements: T[], index: number): TreeNode<T> | null {
    let parent: TreeNode<T> | null = null;
    if (index < elements.length) {
      let value = elements[index];
      if (value === null || value === undefined) {
        return null;
      }

      parent = new TreeNode(elements[index]);
      if (index === 0) {
        this.root = parent;
      }
      parent.left = this.insertNode(elements, 2 * index + 1);
      parent.right = this.insertNode(elements, 2 * index + 2);
    }
    return parent;
  }

  invert(): void {
    this.invertNode(this.root);
  }

  private invertNode(parent: TreeNode<T> | null): TreeNode<T> | null {
    if (parent) {
      [parent.left, parent.right] = [
        this.invertNode(parent.right),
        this.invertNode(parent.left),
      ];
      return parent;
    } else {
      return null;
    }
  }

  getRoot(): TreeNode<T> | null {
    return this.root;
  }
}

const test1 = new CBT();
test1.insert([3, 9, 20, null, null, 15, 7]);
console.log(test1.getRoot());
test1.invert();
console.log(test1.getRoot());
