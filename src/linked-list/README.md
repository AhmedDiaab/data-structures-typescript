# LinkedList

A linked list is a linear data structure where elements (called nodes) are stored in separate memory locations and connected using pointers or references. Unlike arrays, linked lists do not require a continuous block of memory, making insertion and deletion operations more efficient.

## LinkedList. vs Array


| Operation          | Linked Lists | Arrays  |
|--------------------|------------- |---------|
| Push               | O(1)         | O(1)    |
| Pop                | O(n)         | **O(1)**|
| Shift              | **O(1)**     | O(n)    |
| Unshift            | **O(1)**     | O(n)    |
| Insert             | O(n)         | O(n)    |
| Delete             | O(n)         | O(n)    |
| Lookup by Index    | O(n)         | **O(1)**|
| Lookup by Value    | O(n)         | O(n)    |

## Use Cases
### Frequent Insertions and Deletions
- When you need to insert or delete elements dynamically without shifting data (unlike arrays).
- Example: Implementing stacks, queues, and file systems.

### Dynamic Memory Allocation
- When the number of elements is unknown or changes frequently.
- Example: Managing memory in operating systems or handling large data structures.

### Undo/Redo and Navigation
- When you need to track changes or move backward and forward efficiently.
- Example: Browser history, text editors, and media playlists.

### Graph Representation
- When storing relationships between nodes dynamically.
- Example: Social networks, maps, and recommendation systems.


## Methods
### `push` 
Pushes new node to the end of the linked list
#### Steps
1. newNode(value)
2. if !linkedList ? 
    - head = newNode
    - tail = newNode
3. else 
    - tail.next = newNode
    - tail = newNode
4. length++ 
5. return linkedList


### `pop`
Removes last node of the linked list
#### Steps
1. poppedNode = head
2. if !head ? return undefined
3. if head = tail ? head = tail = null
4. while poppedNode.next:
    - if poppedNode.next = tail ? 
        - [tail,  poppedNode] = [poppedNode , tail]
        - tail.next = null
        - break
    - poppedNode = poppedNode.next
5. length--
6. return poppedNode


### `unshift`
Pushes new node to the start of linked list
#### Steps
1. newNode(value)
2. if !head ? head = tail = newNode
3. else 
    - newNode.next = head
    - head = newNode
4. length++
5. return linkedList


### `shift`
Removes node from the start of linked list
1. if !head ? return undefined
2. shiftedNode = head
3. head = head.next
4. if !head ? tail = head
5. length--
6. shiftedNode.next = null
7. return shiftedNode


### `get`
Gets node by index
1. 0 > index ||  length < index ? return undefined
2. node = head
3. iterate through nodes
    - index === iteration ? break
    - node = node.next
4. return node


### `set`
Change value of node by index
1. node = get(index)
2. if node ?
    - node.value = value
    - return true
3. return false


### `insert`
Inserts node in a spcific index
1. if index === 0 ? return unshift(value)
2. if index === length ? push(value)
3. if 0 > index || this.length < index ? return false
4. newNode = new Node(value)
5. temp = get(index - 1)
6. newNode.next = temp.next
7. temp.next = newNode
8. length++
9. return this


### `remove`
Removes node by index 
1. if index === 0 ? return shift(value)
2. if index === length ? pop(value)
3. if 0 > index || this.length <= index ? return undefined
4. previous = get(index - 1)
5. poppedNode = previous.next
6. previous.next = poppedNode.next
7. poppedNode.next = null
8. length --
9. return poppedNode

### `reverse`
Reverses the linked list
1. temp = head [assign temp with head]
2. head = tail | [switch head
3. tail = temp | with tail]
2. prevous = temp, next = temp [assign previous and next with temp]
3. iterate through nodes
    - next = temp.next [step forward]
    - temp.next = previous [reverse link]
    - previous = temp [move previous forward]
    - temp = next [move next forward]
4. tail.next = null
5. return linkedList
