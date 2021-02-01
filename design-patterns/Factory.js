/**
 *
 工厂模式：
 使用场景:
1. 当对象或组件设置非常复杂的时候。
2. 当需要根据所在的不同环境轻松生成对象的不同实例时。
3. 当处理很多共享相同属性的小型对象或组件时。
4. 对象的实例只需要满足一个约定——鸭子类型(duck typing)。利于解耦。
 */

function createPerson(name, age) {
  let obj = {};
  obj.name = name;
  obj.age = age;
  return obj;
}

let person1 = createPerson("xiaoming", 16);
