#!/usr/bin/node

export class LinkedList {
	headProperty;
	append(value) {
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
		string += `( ${list.value} ) -> `;
		return this.toString(list.nextNode, string);
	}

	insertAt(value, index) {
		let nodeNumbr = 0;
		let currNode = this.headProperty;
		while (currNode.nextNode != null && nodeNumbr != index - 1) {
			nodeNumbr += 1;
			currNode = currNode.nextNode;
		}
		currNode.nextNode = new Node(value, currNode.nextNode);
	}

	removeAt(index) {
		// debugger;
		let nodeNumbr = 0;
		let currNode = this.headProperty;
		let next = currNode.nextNode;
		while (next != null && nodeNumbr != index - 1) {
			nodeNumbr += 1;
			currNode = next;
			next = next.nextNode;
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
