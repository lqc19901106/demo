/**
 * 策略模式
 *
 * 根据绩效计算年终奖
 * 
 * 优缺点：

　　　　优点：　　　

　　　　1、利用组合、委托和多态技术和思想，可以避免多重条件选择语句；
　　　　2、将算法封装在独立的策略类里，使得易于切换，易于理解，易于扩展；
　　　　3、策略模式可以复用在系统的其他地方，从而避免重复的复制粘贴工作；　　　

　　　　缺点：　　　

　　　　1、程序中会增加许多策略类或者策略对象；
　　　　2、使用策略类必须要对所有的策略类算法了解清楚，否则不知道怎么选择。
 */
var strategies = {
  S: function (salary) {
    return salary * 4;
  },
  A: function (salary) {
    return salary * 3;
  },
  B: function (salary) {
    return salary * 2;
  },
};

var calculateBonus = function (level, salary) {
  return strategies[level](salary);
};
console.log(calculateBonus("S", 14000)); //56000
console.log(calculateBonus("A", 10000)); //30000
console.log(calculateBonus("B", 5000)); //10000


