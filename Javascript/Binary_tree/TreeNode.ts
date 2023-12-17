/** 
Tree에 들어가는 Node 구현
@param {T} data Node에 들어갈 data
@returns {TreeNode}
*/
export class TreeNode<T> {
  public data: T;
  public left: TreeNode<T> | null = null;
  public right: TreeNode<T> | null = null;

  constructor(data: T) {
    this.data = data;
  }
}
