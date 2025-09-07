#!/usr/bin/node

const util = require('util');

util.inspect.defaultOptions.depth = null;

class LinkedList {
	headProperty;
	append(value) {
		debugger;
		if (this.headProperty == undefined) {
			return (this.headProperty = new Node(value));
		} else {
			let temp = this.headProperty;
			while (temp.nextNode != null) {
				temp = temp.nextNode;
			}
			temp.nextNode = new Node(value);
		}
	}

	prepend(value) {
		this.headProperty = new Node(value, this.headProperty);
	}

	size() {
		let node = this.headProperty;
		let result = 0;
		while (node != null) {
			result += 1;
			node = node.nextNode;
		}
		return result;
	}

	head() {
		return this.headProperty;
	}

	tail() {
		let curr = this.headProperty;
		while (curr.nextNode != null) {
			curr = curr.nextNode;
		}
		return curr;
	}

	at(index) {
		let array = [];
		let temp = this.headProperty;
		while (temp.nextNode != null) {
			array.push(temp);
			temp = temp.nextNode;
		}
		return array[index];
	}

	pop() {
		let curr = this.headProperty;
		let next = curr.nextNode;
		while (next.nextNode != null) {
			curr = next;
			next = next.nextNode;
		}
		curr.nextNode = null;
	}

	contains(value, node = this.headProperty) {
		if (node.value == value) {
			return true;
		} else if (node.nextNode == null) {
			return false;
		} else {
			return this.contains(value, node.nextNode);
		}
	}

	find(value) {
		let curr = this.headProperty;
		let index = 0;
		while (curr.nextNode != null && curr.value != value) {
			index += 1;
			curr = curr.nextNode;
		}
		if (curr.value == value) return index;
		return null;
	}

	toString(list = this.headProperty, string = '') {
		if (list == null) return (string += null);
		string += ` ( ${list.value} ) -> `;
		return this.toString(list.nextNode, string);
	}

	insertAt(value, index) {
		let nodeNumbr = 0;
		let currNode = this.headProperty;
		while (currNode.nextNode != null && nodeNumbr != index) {
			currNode = currNode.nextNode;
			nodeNumbr += 1;
		}
		currNode.nextNode = new Node(value, currNode.nextNode);
	}

	removeAt(index) {
		let nodeNumbr = 0;
		let currNode = this.headProperty;
		let next = currNode.nextNode;
		while (next != null && nodeNumbr != index) {
			currNode = next;
			next = next.nextNode;
			nodeNumbr += 1;
		}
		currNode.nextNode = next.nextNode;
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
list.head();
list.tail();
list.at(1);
list.pop();
list.contains('oi');
list.find('lel');
list.toString();
list.insertAt('tiago', 0);
list.removeAt(1);

console.dir(list, { depth: null });
