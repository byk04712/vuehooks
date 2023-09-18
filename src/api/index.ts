export function submitApi(text: string) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() >= 0.5) {
        resolve({
          status: 'ok',
          text: text
        })
      } else {
        reject(new Error('不小心出错了!'))
      }
    }, 3000)
  })
}

export function cancelApi(text: string) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() >= 0.5) {
        resolve({
          status: "ok",
          text: text,
        });
      } else {
        reject(new Error('不小心出错了!'))
      }
    }, 1000)
  })
}

export function listApi() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() >= 0.5) {
        resolve({
          code: 0,
          msg: "查询成功",
          data: [{
            username: "小王",
            age: 20,
          }],
        });
      } else {
        reject(new Error("不小心出错了!"));
      }
    }, 3000);
  })
}