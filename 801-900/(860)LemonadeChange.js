/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
  let five = 0;
  let ten = 0;

  for (const bill of bills) {
    if (bill == 5) {
      five++;
    } else if (bill == 10) {
      if (five == 0) {
        return false;
      }

      five--;
      ten++;
    } else {
      if (five > 0 && ten > 0) {
        five--;
        ten--;
      } else if (five >= 3) {
        five -= 3;
      } else {
        return false;
      }
    }
  }

  return true;
};

// time:  O(n)
// space: O(1)

// [10, 10]
// [5, 5, 10]
// [5, 5, 5, 10, 20]
// [5, 5, 10, 10, 20]
