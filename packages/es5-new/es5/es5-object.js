/**
 * es5 Object新增方法
 * 1. Object.defineProperty
 * 2. Object.seal
 * 3. Object.freeze
 * 4. object.preventExtensions
 */

// writable 控制
var obj = {};
Object.defineProperty(obj, "test", {
  writable: true,
  configurable: true,
  enumerable: true,
  value: "sss",
});

console.log(obj.test);
