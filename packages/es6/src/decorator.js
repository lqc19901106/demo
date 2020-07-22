/**
 * @装饰器 作为属性的修饰方法 参数的含义
 * @param {*} target   当前的类对象
 * @param {*} name   当前装饰的的属性名称
 * @param {*} descriptor 方法的你不属性操作
 * 与 Object.defineProperty(obj, prop, descriptor) 相同
 */

function readonly(target, name, descriptor) {
  descriptor.writable = false;
  return descriptor;
}

class Cat {
  @readonly
  say() {
    console.log("meow ~");
  }
}
var kitty = new Cat();
// kitty.say = function () {
//   console.log("woof !");
// };
// 执行的话脚本报错
kitty.say();
/**
 * 作为类的修饰相当于以下代码
 * @param {*} target 
 * 
var Dog = isAnimal(_class2 = function Dog() {
  _classCallCheck(this, Dog);
}) || _class2;
 */

function isAnimal(target) {
  target.isAnimal = true;
  return target;
}

@isAnimal
class Dog {}

console.log(Dog.isAnimal);

function log(message) {
  return function () {
    console.log(message);
  };
}

console.log("before class");
@log("class Bar")
class Bar {
  @log("class method bar")
  bar() {}

  @log("class getter alice")
  get alice() {}

  @log("class property bob")
  bob = 1;
}
console.log("after class");
let bar = {
  @log("object method bar")
  bar() {},
};
