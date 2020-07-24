/**
 *  箭头函数
 * 不能做构造函数
 * 自动绑定上下文
 * call、apply不能改变引用的上下文
 * 
 *
 */
const ss = (message) => {
  console.log(message);
};
ss("ceshi");
