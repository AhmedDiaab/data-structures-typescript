class Node {
    value: number;
    next: Node | null;

    constructor(value: number) {
        this.value = value;
        this.next = null;
    }
}

export class LinkedList {
    private head: Node | null;
    private tail: Node | null;
    private length: number;

    constructor(value: number) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = newNode;
        this.length = 1;
    }
    
    push(value: number): LinkedList {
        const newNode = new Node(value);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail!.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop(): Node | undefined {
        if(!this.head) {
            return undefined;
        }

        let poppedNode: Node = this.tail!;

        if(this.head === this.tail) {
            this.head = this.tail = null;
        } else {
            let current = this.head;
            while (current.next && current.next !== this.tail) {
                current = current.next;
            }
            this.tail = current;
            this.tail.next = null;
        }
        
        this.length--;
        return poppedNode;
    }

    unshift(value: number): LinkedList {
        const newNode = new Node(value);

        if(!this.head) {
            this.head = this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    shift(): Node | undefined {
        if(!this.head) return undefined;
        const shiftedNode = this.head;
        this.head = this.head.next;
        if(!this.head) {
            this.tail = this.head;
        }
        this.length--;
        shiftedNode.next = null;
        return shiftedNode;
    }

    get(index: number): Node | undefined {
        if(index < 0 || index >= this.length) {
            return undefined;
        }

        let current = this.head;
        for(let idx = 0; idx < index ; idx++) {
            current = current!.next;    
        }
        return current!;
    }

    set(index: number, value: number): boolean {
        const node = this.get(index);
        if(node) {
            node.value = value;
            return true;
        }
        return false;
    }


    insert(index: number, value: number): LinkedList | boolean {
        if(index === 0) {
            return this.unshift(value);
        }

        if(index === this.length) {
            return this.push(value);
        }

        if(index < 0 || index > this.length) {
            return false;
        }

        const newNode = new Node(value);
        const temp = this.get(index - 1);
        newNode.next = temp!.next;
        temp!.next = newNode;
        this.length++;
        return this;
    }

    remove(index: number): Node | undefined {
        if(index === 0) {
            return this.shift();
        }
        
        if(index === this.length - 1) {
            return this.pop();
        }
            
        if(index < 0 || index >= this.length) {
            return undefined;
        }

        const pre = this.get(index - 1);
        const poppedNode = pre!.next;
        pre!.next  = poppedNode!.next;
        poppedNode!.next = null;
        this.length--;
        return poppedNode!;
    }

    reverse(): LinkedList {
        let prev: Node | null = null;
        let current = this.head;
        this.head = this.tail;
        this.tail = current;

        while(current) {
            let next = current.next; // next step forward
            current.next = prev; // reverse link
            prev = current; // move prev forward
            current = next; // step forward
        }

        return this;
    }
}