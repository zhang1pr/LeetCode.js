function wordSubsets(A, B) {
  const count = Array(26).fill(0);

  for (const b of B) {
    const arr = getCounter(b);

    for (let i = 0; i < 26; i++) {
      count[i] = Math.max(count[i], arr[i]);
    }
  }

  const res = [];
  for (const a of A) {
    const arr = getCounter(a);
    let i = 0;

    while (i < 26) {
      if (arr[i] < count[i]) break;
      i++;
    }

    if (i == 26) res.push(a);
  }

  return res;
}

function getCounter(word) {
  const arr = Array(26).fill(0);
  for (let i = 0; i < word.length; i++) {
    arr[word.charCodeAt(i) - 97]++;
  }
  
  return arr;
};

// time:  O((m+n)*wordLen)
// space: O(1)

// ['amazon', 'apple', 'facebook', 'google', 'leetcode'], ['e', 'o']
// ['amazon', 'apple', 'facebook', 'google', 'leetcode'], ['lc', 'eo']