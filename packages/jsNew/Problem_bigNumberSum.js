/**
 * 
如何实现两个非常大的数字(已经超出了Number范围)的加法运算。

注意由于这两个已经超过了Number范围，因此不能用Number存，这里我们选择使用字符串存储。

 */

function bigNumberSum(a, b) {
  //先将两个字符串变成等长字符串
  /**
   * 123456789
   * 000006789
   */
  let current = 0;
  while (current < a.length || current < b.length) {
    if (!a[current]) {
      a = "0" + a;
    }
    if (!b[current]) {
      b = "0" + b;
    }
    current++;
  }

  let sum = 0;
  let result = [];
  /**
   * 各个位数累加生成数据最后拼接成结果
   */
  for (let index = a.length - 1; index >= 0; index--) {
    let sumIndex = sum + Number(a[index]) + Number(b[index]);
    if (sumIndex > 9) {
      sum = 1;
    } else {
      sum = 0;
    }
    result[index] = sumIndex % 10;
  }
  if (sum === 1) {
    result = [1, ...result];
  }
  return result.join("");
}
