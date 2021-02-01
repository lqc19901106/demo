/**
 * 观察者模式/ 发布订阅模式
 * 定义了对象间的一种一对多的依赖关系，当一个对象的状态发 生改变时，所有依赖于它的对象都将得到通知
 * 
 * 
// 订阅
document.body.addEventListener('click', function() {
    console.log('click1');
}, false);

document.body.addEventListener('click', function() {
    console.log('click2');
}, false);

// 发布
document.body.click(); // click1  click2
 */

// 观察者
var observer = {
  // 缓存订阅的数据
  subscribes: {},

  // 订阅
  subscribe: function (type, fn) {
    if (!this.subscribes[type]) {
      this.subscribes[type] = [];
    }

    // 收集订阅者的处理
    typeof fn === "function" && this.subscribes[type].push(fn);
  },

  // 发布  可能会携带一些信息发布出去
  publish: function () {
    var type = [].shift.call(arguments),
      fns = this.subscribes[type];

    // 不存在的订阅类型，以及订阅时未传入处理回调的
    if (!fns || !fns.length) {
      return;
    }

    // 挨个处理调用
    for (var i = 0; i < fns.length; ++i) {
      fns[i].apply(this, arguments);
    }
  },

  // 删除订阅
  remove: function (type, fn) {
    // 删除全部
    if (typeof type === "undefined") {
      this.subscribes = [];
      return;
    }

    var fns = this.subscribes[type];

    // 不存在的订阅类型，以及订阅时未传入处理回调的
    if (!fns || !fns.length) {
      return;
    }

    if (typeof fn === "undefined") {
      fns.length = 0;
      return;
    }

    // 挨个处理删除
    for (var i = 0; i < fns.length; ++i) {
      if (fns[i] === fn) {
        fns.splice(i, 1);
      }
    }
  },
};

// 订阅岗位列表
function jobListForA(jobs) {
  console.log("A", jobs);
}

function jobListForB(jobs) {
  console.log("B", jobs);
}

// A订阅了笔试成绩
observer.subscribe("job", jobListForA);
// B订阅了笔试成绩
observer.subscribe("job", jobListForB);

// A订阅了笔试成绩
observer.subscribe("examinationA", function (score) {
  console.log(score);
});

// B订阅了笔试成绩
observer.subscribe("examinationB", function (score) {
  console.log(score);
});

// A订阅了面试结果
observer.subscribe("interviewA", function (result) {
  console.log(result);
});

observer.publish("examinationA", 100); // 100
observer.publish("examinationB", 80); // 80
observer.publish("interviewA", "备用"); // 备用

observer.publish("job", ["前端", "后端", "测试"]); // 输出A和B的岗位

// B取消订阅了笔试成绩
observer.remove("examinationB");
// A都取消订阅了岗位
observer.remove("job", jobListForA);

observer.publish("examinationB", 80); // 没有可匹配的订阅，无输出
observer.publish("job", ["前端", "后端", "测试"]); // 输出B的岗位

/**
 * 使用proxy实现的观察者模式
 */
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

const Event = {
  on(eventType, fns) {},
  trigger() {},
  remove() {},
};

var observer = {
  subscribes: {},
  subscribe(type, fun) {
    if (!this.subscribes[type]) {
      this.subscribes[type] = [];
    }
    if (typeof fun === "function") {
      this.subscribes[type].push(fun);
    }
  },
  publish(type, args) {
    var funs = this.subscribes[type];
    if (!funs || funs.length === 0) {
      return;
    }
    for (let index = 0; index < funs.length; index++) {
      const fun = funs[index];
      fun.apply(this, args);
    }
  },
  remove(type, fn) {
    if (!type) {
      this.subscribes = {};
      return false;
    }
    var funs = this.subscribes[key];

    if (!funs || !funs.length) {
      return;
    }

    if (typeof fn === "undefined") {
      this.subscribes[type] = [];
      return;
    }

    for (let index = 0; index < funs.length; index++) {
      if (funs[i] === fn) {
        funs.splice(index, 1);
      }
    }
  },
};
