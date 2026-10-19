/**
 * @param {string} s
 * @return {number}
 */
var numPermsDISequence = function(s) {
    const MOD = 1e9 + 7;
    const BMOD = BigInt(MOD);
    const dp = new Map();
  
    const fac = [1, 1];
    for (let x = 2; x < 201; x++) {
      fac.push(fac.at(-1) * x % MOD);
    }
  
    function power(base, exp) {
      let res = 1n;
      base = BigInt(base) % BMOD;
      exp = BigInt(exp);
  
      while (exp > 0n) {
          if (exp % 2n === 1n) res = (res * base) % BMOD;
          base = (base * base) % BMOD;
          exp /= 2n;
      }
      return res;
  }
  
  const facinv = fac.map(f => power(f, BMOD - 2n));

  function binom(n, k) {
    return BigInt(fac[n]) * facinv[n-k] % BMOD * facinv[k] % BMOD;
  }

  function DFS(i, j) {
    if (i >= j) {
      return 1n;
    }
    
    const key = i +',' + j;
    
    if (dp.has(key)) {
      return dp.get(key);
    }

    let ans = 0n, n = j - i + 2;
    if (s[i] == 'I') {
      ans += DFS(i + 1, j);
    }
    
    if (s[j] == 'D') {
      ans += DFS(i, j - 1);
    }
        
    for (let k=i+1; k<j+1; k++) {
      if (s.slice(k-1, k+1) == 'DI') {
        ans += binom(n-1, k-i) * DFS(i, k-2) % BMOD * DFS(k+1, j) % BMOD;
        ans %= BMOD;
      }
    }

    dp.set(key, ans);
    return ans;
  }
      
  return Number(DFS(0, s.length - 1));
};

// time:  O(n^2)
// space: O(n^2)

// 'D'
// 'DID'