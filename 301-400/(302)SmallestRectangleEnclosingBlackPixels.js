/**
 * @param {character[][]} image
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
function minArea(image, x, y) {
  const M = image.length;
  const N = image[0].length;

  const left = searchColumns(image, 0, y, 0, M, true);
  const right = searchColumns(image, y + 1, N, 0, M, false);
  const top = searchRows(image, 0, x, left, right, true);
  const bottom = searchRows(image, x + 1, M, left, right, false);

  return (right - left) * (bottom - top);
}
  
function searchColumns(image, i, j, top, bottom, whiteToBlack) {
  while (i != j) {
    let k = top;
    const mid = (i + j) >>> 1;

    while (k < bottom && image[k][mid] == '0') {
      k++;
    }

    if ((k < bottom) == whiteToBlack) {
      j = mid;
    } else {
      i = mid + 1;
    }
  }

  return i;
}

function searchRows(image, i, j, left, right, whiteToBlack) {
  while (i != j) {
    let k = left;
    const mid = Math.floor((i + j) / 2);

    while (k < right && image[mid][k] == '0') {
      k++;
    }

    if ((k < right) == whiteToBlack) {
      j = mid;
    } else {
      i = mid + 1;
    }
  }

  return i;
}

// time:  O(mlogn+nlogm)
// space: O(m+n)

// [['1']], 0, 0
// [['0', '0', '1', '0'], ['0', '1', '1', '0'], ['0', '1', '0', '0']], 0, 2