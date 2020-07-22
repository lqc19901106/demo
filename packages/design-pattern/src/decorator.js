/**
 * 装饰器模式
 *
 * 1. 装饰器模式 - 结构型模式
 *
 * 2. 使用场景
 * 3.
 */

function readonly(target, name, descriptor) {
  console.log(target, name, descriptor);
  discriptor.writable = false;
  return discriptor;
}
class Cat {
  @readonly
  say() {
    console.log("meow ~");
  }
}
var kitty = new Cat();
kitty.say = function () {
  console.log("woof !");
};
kitty.say();
