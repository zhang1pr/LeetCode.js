/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
  const map = new Map();
  let res = [];

  let min = Infinity;
  for (let i = 0; i < list1.length; i++) {
    map.set(list1[i], i);
  }

  for (let i = 0; i < list2.length; i++) {
    const get = map.get(list2[i]);
    if (get != null && i + get <= min) {
      if (i + get < min) {
        res = [];
        min = i + get;
      }

      res.push(list2[i]);
    }
  }

  return res;
};

// time:  O(m + n)
// space: O(m)

// ['KFC'], ['KFC']
// ['Shogun', 'Tapioca Express', 'Burger King', 'KFC'], ['KFC', 'Shogun', 'Burger King']
// ['Shogun', 'Tapioca Express', 'Burger King', 'KFC'], ['KFC', 'Burger King', 'Tapioca Express', 'Shogun']
// ['Shogun', 'Tapioca Express', 'Burger King', 'KFC'], ['KNN', 'KFC', 'Burger King', 'Tapioca Express', 'Shogun']
// ['Shogun', 'Tapioca Express', 'Burger King', 'KFC'], ['Piatti', 'The Grill at Torrey Pines', 'Hungry Hunter Steakhouse', 'Shogun']
