///////////////////////////////////////////////////////////////////////////////////////////
// Queue datastructure
///////////////////////////////////////////////////////////////////////////////////////////
function Queue() {
    this.elements = [];
}
Queue.prototype.enqueue = function (e) {
    this.elements.push(e);
};
// remove an element from the front of the queue
Queue.prototype.dequeue = function () {
    return this.elements.shift();
};
// check if the queue is empty
Queue.prototype.isEmpty = function () {
    return this.elements.length == 0;
};
// get the element at the front of the queue
Queue.prototype.peek = function () {
    return !this.isEmpty() ? this.elements[0] : undefined;
};
///////////////////////////////////////////////////////////////////////////////////////////

export default function bfs(startNode, endNode) {
    let visitedInOrder = [];
    let prev = solve(startNode, visitedInOrder);

    return {
        path: reconstructPath(startNode, endNode, prev),
        visited: visitedInOrder,
    };
}

function solve(s) {
    let q = new Queue();

    let visited = {};
}

function reconstructPath(s, e, prev) {}

function getNeighbors() {}
