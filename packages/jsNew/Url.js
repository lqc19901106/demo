/**
 * 
 * @param {*} url 
 * 解析url中的参数生成对象
 */
function parseQueryObject(url = "") {
    const queryObject = {};
    
}

/**
 * 
 * @param {} data 
 * 将参数对象编码生成url 的 params
 */
function queryString(data = {}) {
  let qs = [];
  for (const key in data) {
    qs.push(`${key}=${encodeURIComponent(data[key])}`);
  }
  return qs.join("&");
}
