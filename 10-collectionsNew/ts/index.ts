import { LList } from "./LList";

const list = new LList();
list.add(5);
list.add(10);
list.add('hello');
// list.set(20, 1);
// console.log(list.get(1));
// console.log(list.remove(5));
// console.log(list.remove(10));
// console.log(list.toArray());
// console.log(list.toString());
// console.log(list.contains('hello'));
// console.log(list.contains(100));
// console.log(list.minIndex());
// console.log(list.maxIndex());
// console.log(list.get(list.maxIndex()));


console.log(list.toArray());
list.reverse();
console.log(list.toArray());




