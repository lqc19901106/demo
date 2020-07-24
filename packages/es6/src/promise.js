const handles = [
  {
    params: 1,
    handler(success, stop) {
      success(this.params);
    },
  },
  {
    params: 2,
    handler(success, stop) {
      success(this.params);
    },
  },
  {
    params: 3,
    handler(success, stop) {
      success(this.params);
    },
  },
  {
    params: 4,
    handler(success, stop) {
      setTimeout(() => {
        console.log(this.params, Date.now());
        success(this.params);
      }, 500);
    },
  },
  {
    params: 5,
    handler(success, stop) {
      Promise.resolve().then(() => {
        success(this.params);
      });
    },
  },
];

handles.reduce((prevValue, currentValue) => {
  debugger;
  prevValue.then((data) => {
    console.log(data, currentValue, "iterator");
    return new Promise((reslove, reject) => {
      currentValue.handler(reslove, reject);
    });
  });
}, Promise.resolve());
