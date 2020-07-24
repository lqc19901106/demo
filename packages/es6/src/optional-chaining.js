/**
 * "@babel/plugin-proposal-optional-chaining"
 */
const foo = {
  a: {
    b: {
      c: 50,
    },
  },
};

const c = foo?.a?.b?.c;

const d = foo?.m?.n?.d;

console.log(c, d);
