function debounce(fn, delay) {
  let timeout; // store timer id
  
  return function(...args) {
    clearTimeout(timeout); // clear previous timer
    timeout = setTimeout(() => {
      fn.apply(this, args); // call fn after delay
    }, delay);
  };
}

function logMessage(msg) {
  console.log("Called with:", msg);
}

const debouncedLog = debounce(logMessage, 1000);

// Simulate rapid calls
debouncedLog("Hello");
debouncedLog("Hello again");
debouncedLog("Final call"); 
