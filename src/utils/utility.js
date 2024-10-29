
export const throttle = (callback, wait) => {
    let isEnabled = true;
    return function (...args) {
      if (isEnabled) {
        callback.apply(this, args);
        isEnabled = false;
        setTimeout(() => {
          isEnabled = true;
        }, wait);
      }
    };
  };


  export const debounce = (callback, wait) => {
    let timeout;
  
    return function (...args) {
      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(() => callback.apply(this, args), wait);
    };
  };
  
  