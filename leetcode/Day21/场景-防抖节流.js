function debounce(fn, delay) {
  let timer = null;
  return function(...args) {
      if (timer) {
          clearTimeout(timer);
      }
      timer = setTimeout(() => {
          fn.apply(this, args);
          timer = null;
      }, delay);
  };
}


function throttle(fn, delay) {
  let timer = null
  return function (...args) {
    if (timer) {
      return
    }
    fn.apply(this, args);
    timer = setTimeout(() => {
      timer = null;
    },delay)
  }
}