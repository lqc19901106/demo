/**
 * 
作用
1、可以用它来划分命名空间

使用场景
全局只维护一个对象
 */

function Construct() {
  // ... 生成单例的构造函数的代码
}
var singleTon = (function () {
  //通过闭包来缓存生成的对象
  var unique;
  return function getInstance() {
    // 如果该实例存在，则直接返回，否则就对其实例化
    if (unique === undefined) {
      unique = new Construct();
    }
    return unique;
  };
})();

singleTon(); // 通过 getInstance() 取到单例对象
