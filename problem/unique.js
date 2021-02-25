/**
 * 数组去重
 */
function unique(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return arr;
  }
  let result = [];
  arr.forEach((item) => {
    if (!result.includes(item)) {
      result.push(item);
    }
  });
  return result;
}

function unique(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return arr;
  }

  return [...new Set(arr)];
}
