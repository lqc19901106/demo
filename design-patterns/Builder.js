/**
 * 
作用
1.分布创建一个复杂的对象。
2.解耦封装过程和具体创建的组件。
3.无需关心组件如何组装。
注意事项：
1.一定要一个稳定的算法进行支持。
2.加工工艺是暴露的。
 */

class A {
  constructor(a) {
    this.a = a;
  }
}
class B {
  constructor(a) {
    this.a = a;
  }
}

class C {
  constructor(a) {
    this.a = a;
  }
}

class ABC {
  constructor(a, b, c) {
    var abc = {};
    abc.a = new A(a);
    abc.b = new B(b);
    abc.c = new B(c);
    return abc;
  }
}

function abc() {
  var heti = new a();
  heti.name = new b();
  heti.age = new c();
  return heti;
}
