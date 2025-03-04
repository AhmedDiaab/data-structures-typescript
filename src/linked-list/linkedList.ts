class Node {
    private value: number;
    private next: Node | null;

    constructor(value: number) {
        this.value = value;
        this.next = null;
    }
}

export class LinkedList {
    private head: Node;
    private tail: Node;
    private length: number;

    constructor(value: number) {
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }
}