import { IList, ListNode } from "./interfaces";

export class LList implements IList {
  private head: ListNode | null;
  private tail: ListNode | null;
  private size: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  clear(): void {
    this.size = 0;
    this.head = null;
    this.tail = null;
  }

  getSize(): number {
    return this.size;
  }

  add(value: any): void {
    const node: ListNode = {
      value,
      next: null,
    };

    if (!this.head) this.head = node;
    if (this.tail) {
      this.tail.next = node;
    }

    this.tail = node;
    this.size++;
  }

  set(value: any, index: number): void {
    this.forEach((el, i) => {
      if (i === index) el.value = value;
    });
  }

  get(index: number): ListNode | null {
    let currentNode = this.head;

    this.forEach((el, i) => {
      if (i === index) currentNode = el;
    });

    return currentNode;
  }

  remove(value: any): ListNode | null {
    let findedElement: ListNode | null = null;
    let findedIndex: number | null = null;
  
    this.forEach((el, i) => {
      if (el.value === value) {
        findedElement = el;
        findedIndex = i;
      }
    })
    
    if (!findedElement || findedIndex === null) return null;
  
    const prevElement = this.get(findedIndex - 1);
    if (findedIndex === 0) {
      this.head = this.head?.next ?? null;
    } else if (findedIndex === this.size - 1) {
      if (prevElement) {
        prevElement.next = null;
      }

      this.tail = prevElement;
    } else {
      if (prevElement) {
        prevElement.next = prevElement?.next?.next ?? null;
      }
    }

    if (!this.head) this.tail = null;

    this.size--;

    return findedElement;
  }

  toArray(): any[] {
    const array: any[] = [];

    this.forEach((el) => array.push(el.value));

    return array;
  }

  toString(): string {
    return this.toArray().toString();
  }

  contains(value: any): boolean {
    let contains = false;

    this.forEach((el) => {
      if (el.value === value) contains = true;
    });

    return contains;
  }

  minValue(): ListNode {
    throw new Error("Method not implemented.");
  }

  maxValue(): ListNode {
    throw new Error("Method not implemented.");
  }
  minIndex(): number {
    return 0;
  }
  maxIndex(): number {
    return this.head ? this.size - 1 : 0;
  }
  reverse(): void {
    this.forEach((el, i) => {
      const last = this.get(this.size - 1 - i);
      const elVal = el.value;
      if (last) {
        el.value = last.value;
        last.value = elVal;
      }
    })
  }
  halfReverse(): ListNode[] {
    throw new Error("Method not implemented.");
  }
  retainAll(array: any[]): void {
    throw new Error("Method not implemented.");
  }
  removeAll(array: any[]): void {
    throw new Error("Method not implemented.");
  }
  sort(): void {
    throw new Error("Method not implemented.");
  }
  print(): void {
    throw new Error("Method not implemented.");
  }

  private forEach(callback: (el: ListNode, index: number) => void): void {
    let currentNode = this.head;

    for(let i = 0; i < this.size; i++) {
      if (!currentNode) return;
      callback(currentNode, i);
      currentNode = currentNode?.next ?? null;
    }
  }

}