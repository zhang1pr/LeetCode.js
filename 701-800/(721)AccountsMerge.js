/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
 var accountsMerge = function(accounts) {
  const map = new Map();
  const graph = new Map();

  for (const account of accounts) {
    let name = '';
    for (const email of account) {
      if (name == '') {
        name = email;
        continue;
      }

      if (!graph.has(email)) {
        graph.set(email, []);
      }

      graph.get(email).push(account[1]);

      if (!graph.has(account[1])) {
        graph.set(account[1], []);
      }

      graph.get(account[1]).push(email);

      map.set(email, name);
    }
  }

  const set = new Set();
  const res = [];

  for (const email of graph.keys()) {
    if (!set.has(email)) {
      set.add(email);

      const stack = [email];
      const component = [];
      while (stack.length) {
        const node = stack.pop();
        component.push(node);

        for (const nei of graph.get(node)) {
          if (!set.has(nei)) {
            set.add(nei);
            stack.push(nei);
          }
        }
      }

      res.push([map.get(email), ...component.sort()]);
    }
  }

  return res;
};

// time:  O(nlog(n))
// space: O(n)

// [['John', 'johnsmith@mail.com', 'john_newyork@mail.com'], ['John', 'johnsmith@mail.com', 'john00@mail.com'], ['Mary', 'mary@mail.com'], ['John', 'johnnybravo@mail.com']]
// [['Gabe', 'Gabe0@m.co', 'Gabe3@m.co', 'Gabe1@m.co'], ['Kevin', 'Kevin3@m.co', 'Kevin5@m.co', 'Kevin0@m.co'], ['Ethan', 'Ethan5@m.co', 'Ethan4@m.co', 'Ethan0@m.co'], ['Hanzo', 'Hanzo3@m.co', 'Hanzo1@m.co', 'Hanzo0@m.co'], ['Fern', 'Fern5@m.co', 'Fern1@m.co', 'Fern0@m.co']]
