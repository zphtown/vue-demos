export function shuffle(arr) {
  let m = arr.length
  let i
  while (m) {
    i = (Math.random() * m--) >>> 0;
    [arr[m], arr[i]] = [arr[i], arr[m]]
  }
  // const arrLength = arr.length
  // let i = arrLength
  // let rndNum
  // while (i--) {
  //   if (i !== (rndNum = Math.floor(Math.random() * arrLength))) {
  //     [arr[i], arr[rndNum]] = [arr[rndNum], arr[i]]
  //   }
  // }
  return arr
}

export function throttle(func, delay = 200) {
  let timer
  // 通过闭包使timer一直存在内存中
  return function (...args) {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      func.apply(this, args) // 通过apply还原this指向事件
    }, delay)
  }
}
