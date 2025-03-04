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
        let poppedNode: Node = this.head!;
        
        if(!this.head) {
            return undefined;
        }

        if(this.head === this.tail) {
            this.head = this.tail = null;
        } 
        
        while (poppedNode.next) {
            if(poppedNode.next === this.tail) {
                [this.tail,  poppedNode] = [poppedNode , this.tail];
                this.tail.next = null;
                break;
            }
            poppedNode = poppedNode.next; 
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
        return shiftedNode;
    }
}