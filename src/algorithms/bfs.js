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
    return this.elements.length === 0;
};
// get the element at the front of the queue
Queue.prototype.peek = function () {
    return !this.isEmpty() ? this.elements[0] : undefined;
};
///////////////////////////////////////////////////////////////////////////////////////////

export default function bfs(grid, startNode, endNode) {
    let visitedInOrder = [];
    let prev = solve(startNode, visitedInOrder, grid);

    return {
        path: reconstructPath(startNode, endNode, prev),
        visited: visitedInOrder,
    };
}

function solve(s, visitedInOrder, grid) {
    let q = new Queue();
    q.enqueue(s);
    let visited = {};
    visited[`${s.row} ${s.col}`] = 1;

    let prev = {};
    //visited["13 2"] = 0;

    while (!q.isEmpty()) {
        let node = q.dequeue();
        let neighbors = getNeighbors(node, grid);
        visitedInOrder.push(node);

        neighbors.forEach((el) => {
            if (!visited[`${el.row} ${el.col}`]) {
                q.enqueue(el);
                visited[`${el.row} ${el.col}`] = 1;
                prev[`${el.row} ${el.col}`] = node;
            }
        });
    }
    return prev;
}

function reconstructPath(s, e, prev) {
    let path = [];
    for (let at = e; at != null; at = prev[`${at.row} ${at.col}`]) {
        path.push(at);
    }

    path.reverse();

    for (let i = 0; i < path.length; i++) {
        if (path[i].row === s.row && path[i].col === s.col) {
            return path;
        }
    }
    return [];
}

function getNeighbors(node, grid) {
    const neighbors = [];
    const { col, row } = node;
    if (row > 0 && grid[row]) neighbors.push(grid[row - 1][col]);
    if (row < grid.length - 1) neighbors.push(grid[row + 1][col]);
    if (col > 0) neighbors.push(grid[row][col - 1]);
    if (col < grid[0].length - 1) neighbors.push(grid[row][col + 1]);
    return neighbors.filter((neighbor) => !neighbor.isWall);
}
