// import to from "await-to-js";
const to = require('await-to-js').default;

const to1 = function(promise) {
  if(!isPromise(promise)) {
    const error = new Error('错误')
    return [error, null];
  }
  return promise.then((res) => {
    console.log(res)
    return [null, res];
  }).catch((err) => {
    console.log(err)
    return [err, null];
  })
  
};

// vue的工具函数熟悉一下
function isDef(v) {
  return v !== undefined && v !== null
}

function isPromise(v) {
  return(isDef(v) && typeof v.then === 'function' && typeof v.catch === 'function')

}

async function test() {
  const fn = new Promise((resolve) => {
    console.log(111)
    resolve('你好')
  });
  const fn1 = () => {
    throw new Error('error')
  }
  const arr = await to1(fn);
  console.log(arr,2)
}

test()