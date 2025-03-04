import { createInterface } from "node:readline/promises";
import { LinkedList } from "./linked-list";
import { stdin, stdout } from "node:process";

const rl = createInterface({
    input: stdin,
    output: stdout
})
const ll = new LinkedList(4);
ll.push(3);
ll.push(2);
ll.pop();
ll.pop();
ll.pop();

ll.pop();
ll.unshift(2);
ll.unshift(3);
ll.unshift(4);
console.log(ll);


async function question() {
    await rl.question('Server is running...');
}

question();