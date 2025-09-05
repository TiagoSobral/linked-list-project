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
		let previous = this.head;
		let curr = previous.nextNode;
		while (curr != null) {
			previous = curr;
			curr = curr.nextNode;
		}
		return previous;
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
