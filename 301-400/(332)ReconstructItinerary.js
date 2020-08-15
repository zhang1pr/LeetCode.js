/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function(tickets) {
  const target = new Map();
  tickets.sort().reverse();
   
  for (const [a, b] of tickets) {
    if (target.has(a)) {
      target.get(a).push(b);
    } else {
      target.set(a, [b]);
    }   
  }

  const route = [];
  const stack = ['JFK'];

  while (stack.length) {
    while (target.has(stack[stack.length - 1])) {
      const code = stack[stack.length - 1]; 
      const array = target.get(code);
      stack.push(array.pop());     

      if (array.length == 0) {
        target.delete(code);
      }
    }

    route.push(stack.pop());
  }

  return route.reverse();
};

// time:  O(nlog(n))
// space: O(n)

// [['MUC', 'LHR'], ['JFK', 'MUC'], ['SFO', 'SJC'], ['LHR', 'SFO']]
// [['JFK', 'SFO'], ['JFK', 'ATL'], ['SFO', 'ATL'], ['ATL', 'JFK'], ['ATL', 'SFO']]
