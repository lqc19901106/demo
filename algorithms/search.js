/**
 * 顺序查找
 * @param {*} arr
 * @param {*} data
 */
function listSearch(arr, data) {
  let result = -1;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === data) {
      result = i;
      break;
    }
  }
  return result;
}

/**
 * 二分法查找
 *
 * 前提是数组已经是排序后的数组
 * @param {*} arr
 * @param {*} key
 */
function binarySearch(arr, key) {
  let low = 0,
    high = arr.length - 1;
  while (low <= high) {
    let mid = parseInt((low + high) / 2);
    if (key < arr[mid]) {
      high = mid - 1;
    } else if (key > arr[mid]) {
      low = mid + 1;
    } else {
      return mid;
    }
  }
  return -1;
}
