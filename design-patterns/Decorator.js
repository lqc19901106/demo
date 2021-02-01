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
        instanceMap.set(this, setTimeout(() => {
          // 调用该方法
          descriptor.value.apply(this, arguments);
          // 将延时器设置为 null
          instanceMap.set(this, null);
        }, timeout));
      }
    })
  }
}

class Editor {
  constructor() {
    this.content = '';
  }

  @debounce(500)  
  updateContent(content) {
    console.log(content);
    this.content = content;
  }
}


function deprecate(deprecatedObj) {

  return function(target, key, descriptor) {
    const deprecatedInfo = deprecatedObj.info;
    const deprecatedUrl = deprecatedObj.url;
    // 警告信息
    const txt = `DEPRECATION ${target.constructor.name}#${key}: ${deprecatedInfo}. ${deprecatedUrl ? 'See '+ deprecatedUrl + ' for more detail' : ''}`;
    
    return Object.assign({}, descriptor, {
      value: function value() {
        // 打印警告信息
        console.warn(txt);
        descriptor.value.apply(this, arguments);
      }
    })
  }
}

@attach2Prop({ name: 'B' })
class B {
 
}
 
function attach2Prop(obj) {
    return function(target) {
        target.prototype.$data = obj;
    }
}
