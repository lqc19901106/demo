/**
 * Proxy
 *
 * Reflect
 * 1. 所有方法都是静态的，类似于math、没有静态属性
 * 2. 内置对象，提供拦截js操作的方法
 */

// Reflect.apply(target,thisArg,args)
// Reflect.construct(target,args)
// Reflect.get(target,name,receiver)
// Reflect.set(target,name,value,receiver)
// Reflect.defineProperty(target,name,desc)
// Reflect.deleteProperty(target,name)
// Reflect.has(target,name)
// Reflect.ownKeys(target)
// Reflect.isExtensible(target)
// Reflect.preventExtensions(target)
// Reflect.getOwnPropertyDescriptor(target, name)
// Reflect.getPrototypeOf(target)
// Reflect.setPrototypeOf(target, prototype)

const queuedObservers = new Set();

const observe = (fn) => queuedObservers.add(fn);
const observable = (obj) => new Proxy(obj, { set });

function set(target, key, value, receiver) {
  const result = Reflect.set(target, key, value, receiver);
  queuedObservers.forEach((observer) => observer());
  return result;
}
const person = observable({
  name: "张三",
  age: 20,
});

function print() {
  console.log(`${person.name}, ${person.age}`);
}

observe(print);
person.name = "李四";

/***
 * proxy
 *
 */
