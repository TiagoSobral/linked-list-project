#!/usr/bin/node

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
		debugger;
		let node = this.head;
		let result = 0;
		while (node != null) {
			result += 1;
			node = node.nextNode;
		}
		return result;
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
list.prepend('oi');
console.log(list.size());

console.log(list);
