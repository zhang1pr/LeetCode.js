/**
 * @param {number} width
 * @param {number} height
 * @param {number[][]} food
 */
var SnakeGame = function(width, height, food) {
  this.width = width;
  this.height = height;
  this.food = food;
  this.foodIdx = 0;
  this.row = 0;
  this.col = 0;
  this.queue = [0];
  this.visited = new Set([0]);
}

// time:  O(1)
// space: O(1)

/** 
 * @param {string} direction
 * @return {number}
 */
SnakeGame.prototype.move = function(direction) {
  if (direction === 'U') {
    this.row--;
  }

  if (direction === 'R') {
    this.col++;
  }

  if (direction === 'D') {
    this.row++;
  }

  if (direction === 'L') {
    this.col--;
  }

  const head = this.row * this.width + this.col;

  if (head !== this.queue[0] && this.visited.has(head)) {
    return -1;
  }

  if (this.row >= 0 && this.row < this.height && this.col >= 0 && this.col < this.width) {
    if (this.foodIdx < this.food.length && this.food[this.foodIdx][0] === this.row && this.food[this.foodIdx][1] === this.col) {
      this.foodIdx++;
    } else {
      this.visited.delete(this.queue.shift());
    }

    this.queue.push(head);
    this.visited.add(head);
    return this.foodIdx;
  }

  return -1;
}

// time:  O(n)
// space: O(1)

/** 
 * Your SnakeGame object will be instantiated and called as such:
 * var obj = new SnakeGame(width, height, food)
 * var param_1 = obj.move(direction)
 */

// ['SnakeGame', 'move', 'move', 'move', 'move', 'move', 'move'], [[3, 2, [[1, 2], [0, 1]]], ['R'], ['D'], ['R'], ['U'], ['L'], ['U']
