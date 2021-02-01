// Internal list of HTML entities for escaping.
const escapeMap = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#x27;",
  "`": "&#x60;",
};

/**
 * 字符串编码解决xss漏洞问题
*/
function escspe(str) {
  if (!str) {
    return str;
  }
  const source = Object.keys(escapeMap).join("");
  const testRegexp = RegExp(source);
  const replaceRegexp = RegExp(source, "g");

  return testRegexp.test(str)
    ? str.replace(replaceRegexp, (match) => {
        return escapeMap[match];
      })
    : str;
}
