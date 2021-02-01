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

function debounce(timeout) {
  const instanceMap = new Map(); // 创建一个Map的数据结构，将实例化对象作为key

  return function (target, key, descriptor) {
    return Object.assign({}, descriptor, {
      value: function value() {
        // 清除延时器
        clearTimeout(instanceMap.get(this));
        // 设置延时器
        instanceMap.set(
          this,
          setTimeout(() => {
            // 调用该方法
            descriptor.value.apply(this, arguments);
            // 将延时器设置为 null
            instanceMap.set(this, null);
          }, timeout)
        );
      },
    });
  };
}

class Editor {
  constructor() {
    this.content = "";
  }

  @debounce(500)
  updateContent(content) {
    console.log(content);
    this.content = content;
  }
}

function deprecate(deprecatedObj) {
  return function (target, key, descriptor) {
    const deprecatedInfo = deprecatedObj.info;
    const deprecatedUrl = deprecatedObj.url;
    // 警告信息
    const txt = `DEPRECATION ${
      target.constructor.name
    }#${key}: ${deprecatedInfo}. ${
      deprecatedUrl ? "See " + deprecatedUrl + " for more detail" : ""
    }`;

    return Object.assign({}, descriptor, {
      value: function value() {
        // 打印警告信息
        console.warn(txt);
        descriptor.value.apply(this, arguments);
      },
    });
  };
}

@attach2Prop({ name: "B" })
class B {}

function attach2Prop(obj) {
  return function (target) {
    target.prototype.$data = obj;
  };
}

Function.prototype.before = function (beforefn) {
  var __self = this; // 保存原函数的引用
  return function () {
    // 返回包含了原函数和新函数的"代理"函数
    beforefn.apply(this, arguments); // 执行新函数，且保证 this 不被劫持，新函数接受的参数
    // 也会被原封不动地传入原函数，新函数在原函数之前执行
    return __self.apply(this, arguments); // 执行原函数并返回原函数的执行结果，
    // 并且保证 this 不被劫持
  };
};
Function.prototype.after = function (afterfn) {
  var __self = this;
  return function () {
    var ret = __self.apply(this, arguments);
    afterfn.apply(this, arguments);
    return ret;
  };
};
