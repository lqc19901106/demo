/**
 * 冒泡排序
 * @param { Array } arr
 * 基本思想：
 */
function bubbleSort(arr) {
  if (!Array.isArray(arr) || arr.length <= 1) {
    return arr;
  }
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

function selectSort(arr) {}

function insertSort(arr) {}

function heapSort(arr) {}

function hillSort(arr) {}

function quickSort(arr) {}

function mergeSort(arr) {}
