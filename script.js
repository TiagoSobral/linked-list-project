#!/usr/bin/node

const util = require('util');

util.inspect.defaultOptions.depth = null;

class LinkedList {
	append(value) {
		if (this.head == null) {
			this.head = new Node(value);
		} else {
			let temp = this.head;
			while (temp.nextNode != null) {
				temp = temp.nextNode;
			}
			temp.nextNode = new Node(value);
		}
	}

	prepend(value) {
		this.head = new Node(value, this.head);
	}

	size() {
		let node = this.head;
		let result = 0;
		while (node != null) {
			result += 1;
			node = node.nextNode;
		}
		return result;
	}

	first() {
		return this.head;
	}

	tail() {
		let curr = this.head;
		let next = curr.nextNode;
		while (next != null) {
			curr = next;
			next = next.nextNode;
		}
		return curr;
	}

	at(index) {
		let array = [];
		let temp = this.head;
		while (temp.nextNode != null) {
			array.push(temp);
			temp = temp.nextNode;
		}
		return array[index];
	}

	pop() {
		let curr = this.head;
		let next = curr.nextNode;
		while (next.nextNode != null) {
			curr = next;
			next = next.nextNode;
		}
		curr.nextNode = null;
	}

	contains(value, node = this.head) {
		if (node.nextNode == null) {
			return node.value == value;
		}
		return this.contains(value, node.nextNode);
	}
}

class Node {
	constructor(value = null, nextNode = null) {
		this.value = value;
		this.nextNode = nextNode;
	}
}
const list = new LinkedList();

list.append('hey');
list.append('lel');
list.prepend('oi');
list.size();
list.first();
list.tail();
list.at(1);
list.pop();
console.log(list.contains('hey'));

console.log(list);
