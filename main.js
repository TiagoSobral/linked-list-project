import { LinkedList } from './linked-list.js';

const list = new LinkedList();

list.append('dog');
list.append('cat');
list.append('parrot');
list.append('hamster');
list.append('snake');
list.append('turtle');
list.removeAt(7);

console.dir(list, { depth: null });
console.log(list.toString());
