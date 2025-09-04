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
}

class Node {
	constructor(value = null, nextNode = null) {
		this.value = value;
		this.nextNode = nextNode;
	}
}
const list = new LinkedList();

list.append('hey');

console.log(list);
