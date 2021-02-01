/**
 * es5 Object新增方法
 * 1. Object.defineProperty
 * 2. Object.seal
 * 3. Object.freeze
 * 4. object.preventExtensions
 * 5. object.create();
 * 6. Object.getOwnPropertyDescriptor
 */

/**
 * descriptor
 * writable 可写
 * configurable 可配置
 * enumerable 可枚举
 */

var obj = {};
Object.defineProperties(obj, {
  test1: {
    writable: false,
    configurable: true,
    enumerable: true,
    value: "sss",
  },
  test2: {
    writable: true,
    configurable: false,
    enumerable: true,
    value: "sss",
  },
  test3: {
    writable: true,
    configurable: true,
    enumerable: false,
    value: "sss",
  },
  test4: {
    writable: true,
    configurable: true,
    enumerable: true,
    value: "sss",
  },
});

obj.test1 = "ddd"; //报错

delete obj.test2; // 报错
Object.defineProperty(obj, "test2", {
  configurable: true,
}); //报错

Object.keys(obj); // ['test1', 'test2', 'test4']
for (const key in object) {
  if (object.hasOwnProperty(key)) {
    const element = object[key];
  }
}

/**
 * 手写Object.create
 *
 */
function objCreate(obj = {}, properties) {
  function Obj() {}
  Obj.prototype = obj;
  if (properties) {
    Object.defineProperties(Obj, properties);
  }
  return new Obj();
}

/**
 * 手写new
 */

function myNew() {
  var obj = new Object(); // 从Object.prototype上克隆一个空对象 此时 __proto__ 指向Object.prototype
  var Constructor = [].shift.call(arguments); //取得构造器
  obj.__proto__ = Constructor.prototype; // 指向构造器的prototype
  var ret = Constructor.apply(obj, arguments); //执行构造函数
  return typeof ret === "object" ? ret : obj;
}

/**
 * object.create 与 new 的区别
 * 1. 前者继承指定对象，后者继承内置对象Object
 * 2. Object.create(null) 创建一个没有原型的的对象，new Object() 返回的对象 原型永远指向 Object.prototype
 */
