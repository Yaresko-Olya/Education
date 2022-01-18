export type ListNode = {
  value: any,
  next: ListNode | null,
}

export interface IList {
  clear(): void;
  getSize(): number;
  add(value: any): void;
  set(value: any, index: number): void;
  get(index: number): ListNode | null;
  remove(value: any): ListNode | null;
  toArray(): any[];
  toString(): string;
  contains(value: any): boolean;
  minValue(): ListNode;
  maxValue(): ListNode;
  minIndex(): number;
  maxIndex(): number;
  reverse(): void;
  halfReverse(): void;
  retainAll(array: any[]): void;
  removeAll(array: any[]): void;
  sort(): void;
  print(): void;
}

export type TreeNode = {
  value: any,
  right: TreeNode | null,
  left: TreeNode | null,
}

export interface ITree {
  init(array: any[]): void;
  clear(): void;
  size(): number;
  insert(value: any): void;
  print(node: any, callback: () => any): void;
  toArray(): any[];
  search(value: any): TreeNode;
  width(): number;
  height(): number;
  nodes(): number;
  leaves(): number;
  reverse(): void;
  minNode(): TreeNode;
  maxNode(): TreeNode;
  remove(value: any): void;
}