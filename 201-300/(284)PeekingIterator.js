/**
 * // This is the Iterator's API interface.
 * // You should not implement it, or speculate about its implementation.
 * function Iterator() {
 *    @ return {number}
 *    this.nextVal = function() { // return the nextVal number of the iterator
 *       ...
 *    }; 
 *
 *    @return {boolean}
 *    this.hasNext = function() { // return true if it still has numbers
 *       ...
 *    };
 * };
 */

/**
 * @param {Iterator} iterator
 */
var PeekingIterator = function(iterator) {
  this.it = iterator;
  
  if (this.it.hasNext()){
    this.nextVal = this.it.next();
  } else {
    this.nextVal = null;
  }
};

/**
* @return {number}
*/
PeekingIterator.prototype.peek = function() {
  return this.nextVal; 
};

/**
* @return {number}
*/
PeekingIterator.prototype.next = function() {
  const result = this.nextVal;
  this.nextVal = this.it.hasNext() ? this.it.next() : null;
  return result;
};

/**
* @return {boolean}
*/
PeekingIterator.prototype.hasNext = function() {
  return this.nextVal != null;
};

/** 
* Your PeekingIterator object will be instantiated and called as such:
* var obj = new PeekingIterator(arr)
* var param_1 = obj.peek()
* var param_2 = obj.nextVal()
* var param_3 = obj.hasNext()
*/

// time:  O(1)
// space: O(1)

// ['PeekingIterator', next', 'peek', 'next', 'next', 'hasNext'], [[[1,2,3]], [], [], [], [], []]
