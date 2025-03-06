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
        shiftedNode.next = null;
        return shiftedNode;
    }

    get(index: number): Node | undefined {
        if(0 > index || this.length < index) {
            return undefined;
        }

        let node = this.head;
        for(let idx = 0; idx < this.length ; idx++) {
            if(idx === index) {
                break;
            }
            node = node!.next;    
        }
        return node!;
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

        if(0 > index || this.length < index) {
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
            
        if(0 > index || this.length <= index) { // test if index = length
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
        // reverse head and tail
        let temp = this.head;
        this.head = this.tail;
        this.tail = temp;

        // defining previous and next variables to keet tracking nodes
        let previous = temp;
        let next = temp;
        // we move from start to end to make start the end and vice versa
        for(let idx = 0; idx < this.length; idx++) {
            next = temp!.next; // step forward [next|temp|prev,....] => [temp, prev, next, .....]
            temp!.next = previous; // move next to be previous [prev,temp,next,....]
            previous = temp; // move again previous [... prev|temp, next, ....]
            temp = next; // move temp one step forward [...., prev, temp|next, ....]
        }
        this.tail!.next = null;
        return this;
    }
}