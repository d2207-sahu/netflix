/**
 * @const
 * @function
 * @param {Function} callback
 * @param {Number} delay [MilliSeconds]
 * @returns
 */
const debounce = (callback, delay = 1000) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(callback(...args), delay);
  };
};

export default debounce;

export const throtte = (callback, delay = 1000) => {
  let shouldWait = false;
  let recentArgs = null;
  const timeoutFunc = () => {
    if (recentArgs == null) {
      shouldWait = false;
    } else {
      callback(...recentArgs);
      recentArgs = null;
      shouldWait = true;
      setTimeout(timeoutFunc, delay);
    }
  };

  return (...args) => {
    if (shouldWait) {
      recentArgs = args;
      return;
    }
    callback(...args);
    shouldWait = true;
    setTimeout(timeoutFunc, delay);
  };
};
