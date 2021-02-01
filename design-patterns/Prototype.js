/**
 * 原型模式
 */

function MyClass {

};
MyClass.prototype.sayName = function(){
    console.log(this.name);
}
MyClass.prototype.name = "Class";

let mc = new MyClass();

mc.__proto__ === MyClass.prototype;

//可以通过 hasOwnProperty